
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, CheckCircle, XCircle } from 'lucide-react';
import { WorkoutLog } from '../types/workout';

interface WorkoutHistoryProps {
  workoutLogs: WorkoutLog[];
}

const WorkoutHistory: React.FC<WorkoutHistoryProps> = ({ workoutLogs }) => {
  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Calendar className="h-5 w-5" />
          Workout History
        </CardTitle>
      </CardHeader>
      <CardContent>
        {workoutLogs.length === 0 ? (
          <p className="text-center text-muted-foreground py-8">
            No workout history yet. Complete your first workout to see it here!
          </p>
        ) : (
          <div className="space-y-3">
            {workoutLogs.map((log, index) => (
              <div 
                key={index} 
                className={`p-4 rounded-lg border ${
                  log.completed 
                    ? 'bg-green-50 border-green-200' 
                    : 'bg-red-50 border-red-200'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    {log.completed ? (
                      <CheckCircle className="h-5 w-5 text-green-600" />
                    ) : (
                      <XCircle className="h-5 w-5 text-red-600" />
                    )}
                    <div>
                      <h3 className="font-semibold">{log.day}</h3>
                      <p className="text-sm text-muted-foreground">
                        {new Date(log.date).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    {log.muscle_groups.map(muscle => (
                      <Badge key={muscle} variant="outline">{muscle}</Badge>
                    ))}
                  </div>
                </div>
                <div className="mt-3 text-sm text-muted-foreground">
                  <p>
                    {log.completed 
                      ? `Completed ${log.exercises.length} exercises`
                      : 'Workout skipped'
                    }
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default WorkoutHistory;
