
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { TrendingUp, Target, Calendar, Zap } from 'lucide-react';

interface WorkoutAnalyticsProps {
  stats: {
    totalWorkouts: number;
    totalMissed: number;
    muscleGroupStats: Record<string, number>;
    totalDays: number;
  };
}

const WorkoutAnalytics: React.FC<WorkoutAnalyticsProps> = ({ stats }) => {
  const completionRate = stats.totalDays > 0 
    ? Math.round((stats.totalWorkouts / stats.totalDays) * 100) 
    : 0;

  const muscleGroupData = Object.entries(stats.muscleGroupStats)
    .filter(([muscle]) => muscle !== 'Rest')
    .map(([muscle, count]) => ({
      muscle,
      count
    }));

  return (
    <div className="space-y-6">
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Workouts</CardTitle>
            <Target className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">{stats.totalWorkouts}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Missed Days</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600">{stats.totalMissed}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Completion Rate</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-600">{completionRate}%</div>
            <Progress value={completionRate} className="mt-2" />
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Days</CardTitle>
            <Zap className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.totalDays}</div>
          </CardContent>
        </Card>
      </div>

      {/* Muscle Group Chart */}
      <Card>
        <CardHeader>
          <CardTitle>Muscle Group Training Frequency</CardTitle>
        </CardHeader>
        <CardContent>
          {muscleGroupData.length > 0 ? (
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={muscleGroupData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="muscle" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="count" fill="#3b82f6" />
              </BarChart>
            </ResponsiveContainer>
          ) : (
            <p className="text-center text-muted-foreground py-8">
              Complete some workouts to see muscle group analytics!
            </p>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default WorkoutAnalytics;
