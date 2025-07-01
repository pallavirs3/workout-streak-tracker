
import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import { WorkoutLog } from '../types/workout';
import { workoutSchedule } from '../data/workouts';

export const useWorkoutData = () => {
  const [workoutLogs, setWorkoutLogs] = useState<WorkoutLog[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    initializeDatabase();
    fetchWorkoutLogs();
  }, []);

  const initializeDatabase = async () => {
    // Create table if it doesn't exist
    const { error } = await supabase.rpc('create_workout_logs_table');
    if (error) {
      console.log('Table might already exist:', error);
    }
  };

  const fetchWorkoutLogs = async () => {
    try {
      const { data, error } = await supabase
        .from('workout_logs')
        .select('*')
        .order('date', { ascending: false });

      if (error) throw error;
      setWorkoutLogs(data || []);
    } catch (error) {
      console.error('Error fetching workout logs:', error);
    } finally {
      setLoading(false);
    }
  };

  const logWorkout = async (date: string, completed: boolean) => {
    const dayOfWeek = new Date(date).toLocaleLowerCase().split(' ')[0] + 'day';
    const workout = workoutSchedule[dayOfWeek as keyof typeof workoutSchedule];
    
    if (!workout) return;

    const workoutLog: Omit<WorkoutLog, 'id' | 'created_at'> = {
      date,
      day: workout.day,
      muscle_groups: workout.muscleGroups,
      exercises: workout.exercises.map(ex => ex.name),
      completed
    };

    try {
      const { error } = await supabase
        .from('workout_logs')
        .upsert([workoutLog], { onConflict: 'date' });

      if (error) throw error;
      await fetchWorkoutLogs();
    } catch (error) {
      console.error('Error logging workout:', error);
    }
  };

  const getTodaysWorkout = () => {
    const today = new Date();
    const dayOfWeek = today.toLocaleLowerCase().split(' ')[0] + 'day';
    return workoutSchedule[dayOfWeek as keyof typeof workoutSchedule];
  };

  const getWorkoutStats = () => {
    const totalWorkouts = workoutLogs.filter(log => log.completed).length;
    const totalMissed = workoutLogs.filter(log => !log.completed).length;
    const muscleGroupStats = workoutLogs
      .filter(log => log.completed)
      .reduce((acc, log) => {
        log.muscle_groups.forEach(muscle => {
          acc[muscle] = (acc[muscle] || 0) + 1;
        });
        return acc;
      }, {} as Record<string, number>);

    return {
      totalWorkouts,
      totalMissed,
      muscleGroupStats,
      totalDays: workoutLogs.length
    };
  };

  return {
    workoutLogs,
    loading,
    logWorkout,
    getTodaysWorkout,
    getWorkoutStats,
    refreshLogs: fetchWorkoutLogs
  };
};
