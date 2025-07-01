
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Dumbbell } from 'lucide-react';
import { workoutSchedule } from '../data/workouts';
import { WorkoutDay } from '../types/workout';

interface WorkoutSelectorProps {
  onWorkoutSelect: (workout: WorkoutDay) => void;
  onComplete: (completed: boolean) => void;
  selectedWorkout?: WorkoutDay;
}

const WorkoutSelector: React.FC<WorkoutSelectorProps> = ({ 
  onWorkoutSelect, 
  onComplete, 
  selectedWorkout 
}) => {
  const [selectedDay, setSelectedDay] = React.useState<string>('');

  const handleDayChange = (day: string) => {
    setSelectedDay(day);
    const workout = workoutSchedule[day as keyof typeof workoutSchedule];
    onWorkoutSelect(workout);
  };

  const workoutOptions = [
    { value: 'monday', label: 'Chest & Triceps', day: 'Monday' },
    { value: 'tuesday', label: 'Back & Biceps', day: 'Tuesday' },
    { value: 'wednesday', label: 'Shoulders & Legs', day: 'Wednesday' },
    { value: 'thursday', label: 'Chest & Triceps', day: 'Thursday' },
    { value: 'friday', label: 'Back & Biceps', day: 'Friday' },
    { value: 'saturday', label: 'Shoulders & Legs', day: 'Saturday' },
    { value: 'sunday', label: 'Rest Day', day: 'Sunday' }
  ];

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg">
          <Dumbbell className="h-5 w-5" />
          Choose Your Workout
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <label className="text-sm font-medium mb-2 block">
            Select any workout you want to do today:
          </label>
          <Select value={selectedDay} onValueChange={handleDayChange}>
            <SelectTrigger>
              <SelectValue placeholder="Pick a workout..." />
            </SelectTrigger>
            <SelectContent>
              {workoutOptions.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.day} - {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        
        {selectedWorkout && selectedDay && (
          <div className="flex gap-2 pt-2">
            <Button 
              onClick={() => onComplete(true)}
              className="flex-1 bg-green-500 hover:bg-green-600"
              size="sm"
            >
              Complete
            </Button>
            <Button 
              onClick={() => onComplete(false)}
              variant="destructive"
              className="flex-1"
              size="sm"
            >
              Skip
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default WorkoutSelector;
