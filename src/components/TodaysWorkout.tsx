
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, XCircle, Dumbbell } from 'lucide-react';
import { WorkoutDay } from '../types/workout';

interface TodaysWorkoutProps {
  workout: WorkoutDay;
  onComplete: (completed: boolean) => void;
  isCompleted?: boolean;
}

const TodaysWorkout: React.FC<TodaysWorkoutProps> = ({ 
  workout, 
  onComplete, 
  isCompleted 
}) => {
  if (workout.day === 'Sunday') {
    return (
      <Card className="w-full max-w-2xl mx-auto">
        <CardHeader className="text-center">
          <CardTitle className="flex items-center justify-center gap-2">
            <Dumbbell className="h-6 w-6" />
            {workout.day} - Rest Day
          </CardTitle>
        </CardHeader>
        <CardContent className="text-center">
          <p className="text-lg text-muted-foreground mb-4">
            Today is your rest day! Take time to recover or do some optional stretching.
          </p>
          <div className="flex gap-2 justify-center">
            <Button 
              onClick={() => onComplete(true)}
              className="bg-green-500 hover:bg-green-600"
            >
              <CheckCircle className="h-4 w-4 mr-2" />
              Rest Day Complete
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  const warmUpExercises = workout.exercises.slice(0, 12);
  const mainExercises = workout.exercises.slice(12, -6);
  const coreExercises = workout.exercises.slice(-6);

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Dumbbell className="h-6 w-6" />
            {workout.day} Workout
          </div>
          <div className="flex gap-2">
            {workout.muscleGroups.map(muscle => (
              <Badge key={muscle} variant="secondary">{muscle}</Badge>
            ))}
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Warm-up Section */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-orange-600">Warm-up Routine</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {warmUpExercises.map((exercise, index) => (
              <div key={index} className="flex justify-between items-center p-2 bg-orange-50 rounded">
                <span className="font-medium">{exercise.name}</span>
                <span className="text-sm text-muted-foreground">
                  {exercise.sets} set × {exercise.reps.join(', ')} reps
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Main Workout Section */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-blue-600">Main Workout</h3>
          <div className="space-y-2">
            {mainExercises.map((exercise, index) => (
              <div key={index} className="flex justify-between items-center p-3 bg-blue-50 rounded">
                <span className="font-medium">{exercise.name}</span>
                <span className="text-sm text-muted-foreground">
                  {exercise.sets} sets × {exercise.reps.join(', ')} reps
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Core Section */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-purple-600">Core/Abs Routine</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {coreExercises.map((exercise, index) => (
              <div key={index} className="flex justify-between items-center p-2 bg-purple-50 rounded">
                <span className="font-medium">{exercise.name}</span>
                <span className="text-sm text-muted-foreground">
                  {exercise.sets} sets × {exercise.reps.join(', ')} reps
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Completion Buttons */}
        <div className="flex gap-4 justify-center pt-4">
          <Button 
            onClick={() => onComplete(true)}
            className="bg-green-500 hover:bg-green-600"
            disabled={isCompleted}
          >
            <CheckCircle className="h-4 w-4 mr-2" />
            {isCompleted ? 'Completed!' : 'Mark as Complete'}
          </Button>
          <Button 
            onClick={() => onComplete(false)}
            variant="destructive"
            disabled={isCompleted}
          >
            <XCircle className="h-4 w-4 mr-2" />
            Mark as Skipped
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default TodaysWorkout;
