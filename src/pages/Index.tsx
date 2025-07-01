
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/components/ui/use-toast';
import TodaysWorkout from '../components/TodaysWorkout';
import WorkoutHistory from '../components/WorkoutHistory';
import WorkoutAnalytics from '../components/WorkoutAnalytics';
import WorkoutSelector from '../components/WorkoutSelector';
import MotivationalNote from '../components/MotivationalNote';
import { useWorkoutData } from '../hooks/useWorkoutData';
import { WorkoutDay } from '../types/workout';
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
  const [selectedCustomWorkout, setSelectedCustomWorkout] = useState<WorkoutDay | null>(null);
  
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
      // Reset custom workout selection after logging
      setSelectedCustomWorkout(null);
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
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
              {/* Left side - Motivational Note */}
              <div className="lg:col-span-1">
                <MotivationalNote />
              </div>
              
              {/* Main content area */}
              <div className="lg:col-span-3 space-y-6">
                {/* Scheduled workout */}
                <div>
                  <h2 className="text-2xl font-semibold mb-4">Today's Scheduled Workout</h2>
                  <TodaysWorkout 
                    workout={todaysWorkout}
                    onComplete={handleWorkoutComplete}
                    isCompleted={todaysLog?.completed || false}
                  />
                </div>
                
                {/* Custom workout selector */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Or Choose Any Workout</h3>
                    <WorkoutSelector 
                      onWorkoutSelect={setSelectedCustomWorkout}
                      onComplete={handleWorkoutComplete}
                      selectedWorkout={selectedCustomWorkout}
                    />
                  </div>
                  
                  {/* Show selected custom workout */}
                  {selectedCustomWorkout && (
                    <div>
                      <h3 className="text-xl font-semibold mb-4">Selected Workout</h3>
                      <TodaysWorkout 
                        workout={selectedCustomWorkout}
                        onComplete={handleWorkoutComplete}
                        isCompleted={false}
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
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
