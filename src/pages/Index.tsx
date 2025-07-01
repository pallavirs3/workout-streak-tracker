
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/components/ui/use-toast';
import TodaysWorkout from '../components/TodaysWorkout';
import WorkoutHistory from '../components/WorkoutHistory';
import WorkoutAnalytics from '../components/WorkoutAnalytics';
import { useWorkoutData } from '../hooks/useWorkoutData';
import { Dumbbell, Calendar, BarChart3 } from 'lucide-react';

const Index = () => {
  const { toast } = useToast();
  const { 
    workoutLogs, 
    loading, 
    logWorkout, 
    getTodaysWorkout, 
    getWorkoutStats 
  } = useWorkoutData();
  
  const [activeTab, setActiveTab] = useState('today');
  
  const todaysWorkout = getTodaysWorkout();
  const stats = getWorkoutStats();
  
  const today = new Date().toISOString().split('T')[0];
  const todaysLog = workoutLogs.find(log => log.date === today);

  const handleWorkoutComplete = async (completed: boolean) => {
    try {
      await logWorkout(today, completed);
      toast({
        title: completed ? "Workout Complete!" : "Workout Skipped",
        description: completed 
          ? "Great job! Your workout has been logged." 
          : "Don't worry, you can always try again tomorrow.",
        variant: completed ? "default" : "destructive"
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to log workout. Please try again.",
        variant: "destructive"
      });
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <Dumbbell className="h-12 w-12 animate-spin mx-auto mb-4" />
          <p className="text-lg">Loading your fitness tracker...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-2">💪 Personal Fitness Tracker</h1>
          <p className="text-xl text-muted-foreground">6-Day Workout Split & Progress Tracking</p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3 max-w-md mx-auto mb-8">
            <TabsTrigger value="today" className="flex items-center gap-2">
              <Dumbbell className="h-4 w-4" />
              Today
            </TabsTrigger>
            <TabsTrigger value="history" className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              History
            </TabsTrigger>
            <TabsTrigger value="analytics" className="flex items-center gap-2">
              <BarChart3 className="h-4 w-4" />
              Analytics
            </TabsTrigger>
          </TabsList>

          <TabsContent value="today" className="space-y-6">
            <TodaysWorkout 
              workout={todaysWorkout}
              onComplete={handleWorkoutComplete}
              isCompleted={todaysLog?.completed || false}
            />
          </TabsContent>

          <TabsContent value="history" className="space-y-6">
            <WorkoutHistory workoutLogs={workoutLogs} />
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <WorkoutAnalytics stats={stats} />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Index;
