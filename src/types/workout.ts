
export interface Exercise {
  name: string;
  sets: number;
  reps: number[];
}

export interface WorkoutDay {
  day: string;
  muscleGroups: string[];
  exercises: Exercise[];
}

export interface WorkoutLog {
  id?: string;
  date: string;
  day: string;
  muscle_groups: string[];
  exercises: string[];
  completed: boolean;
  created_at?: string;
}

export interface WorkoutSchedule {
  monday: WorkoutDay;
  tuesday: WorkoutDay;
  wednesday: WorkoutDay;
  thursday: WorkoutDay;
  friday: WorkoutDay;
  saturday: WorkoutDay;
  sunday: WorkoutDay;
}
