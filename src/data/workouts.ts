
import { WorkoutSchedule, Exercise } from '../types/workout';

const warmUpExercises: Exercise[] = [
  { name: 'Leg Circles', sets: 1, reps: [10] },
  { name: 'Shoulder Rotation', sets: 1, reps: [10] },
  { name: 'Arm Circles', sets: 1, reps: [10] },
  { name: 'Wrist Rotation', sets: 1, reps: [10] },
  { name: 'Hip Rotation', sets: 1, reps: [10] },
  { name: 'Deep Squat Raises', sets: 1, reps: [10] },
  { name: 'World\'s Greatest Stretch', sets: 1, reps: [5] },
  { name: 'Butterflies', sets: 1, reps: [10] },
  { name: 'Standing Crunches', sets: 1, reps: [10] },
  { name: 'Squats', sets: 1, reps: [10] },
  { name: 'Pull-Ups', sets: 1, reps: [10] },
  { name: 'Push-Ups', sets: 1, reps: [10] }
];

const coreExercises: Exercise[] = [
  { name: 'Half Circles', sets: 4, reps: [15, 12, 10, 8] },
  { name: 'Laying Leg Raises', sets: 4, reps: [15, 12, 10, 8] },
  { name: 'Russian Twists', sets: 4, reps: [15, 12, 10, 8] },
  { name: 'Leg In and Leg Out', sets: 4, reps: [15, 12, 10, 8] },
  { name: 'Reverse Crunches', sets: 4, reps: [15, 12, 10, 8] },
  { name: 'Machine Crunches', sets: 4, reps: [15, 12, 10, 8] }
];

const chestTricepsExercises: Exercise[] = [
  // Chest
  { name: 'Incline Dumbbell Press', sets: 4, reps: [15, 12, 10, 8] },
  { name: 'Flat Bench Press', sets: 4, reps: [15, 12, 10, 8] },
  { name: 'Decline Flyes', sets: 4, reps: [15, 12, 10, 8] },
  { name: 'Cable Crossovers', sets: 4, reps: [15, 12, 10, 8] },
  { name: 'Chest Press Machine', sets: 4, reps: [15, 12, 10, 8] },
  { name: 'Chest Flying Machine', sets: 4, reps: [15, 12, 10, 8] },
  // Triceps
  { name: 'Skull Crushers', sets: 4, reps: [15, 12, 10, 8] },
  { name: 'Overhead Extensions', sets: 4, reps: [15, 12, 10, 8] },
  { name: 'Triceps Kickbacks', sets: 4, reps: [15, 12, 10, 8] },
  { name: 'Dips', sets: 4, reps: [15, 12, 10, 8] },
  { name: 'Rope Pushdowns', sets: 4, reps: [15, 12, 10, 8] }
];

const backBicepsExercises: Exercise[] = [
  // Back
  { name: 'Barbell Rows', sets: 4, reps: [15, 12, 10, 8] },
  { name: 'Close-Grip Seated Rows', sets: 4, reps: [15, 12, 10, 8] },
  { name: 'Lat Pull-Down Machine', sets: 4, reps: [15, 12, 10, 8] },
  { name: 'Single-Arm Dumbbell Row', sets: 4, reps: [15, 12, 10, 8] },
  { name: 'Pull-Ups', sets: 4, reps: [15, 12, 10, 8] },
  { name: 'Lat Pull-Over', sets: 4, reps: [15, 12, 10, 8] },
  { name: 'Face Pulls', sets: 4, reps: [15, 12, 10, 8] },
  // Biceps
  { name: 'Incline Dumbbell Curl', sets: 4, reps: [15, 12, 10, 8] },
  { name: 'Spider Curl', sets: 4, reps: [15, 12, 10, 8] },
  { name: 'Preacher Curl', sets: 4, reps: [15, 12, 10, 8] },
  { name: 'Hammer Curls / Rope Hammer Curls', sets: 4, reps: [15, 12, 10, 8] },
  { name: 'Cable Curls', sets: 4, reps: [15, 12, 10, 8] }
];

const shouldersLegsExercises: Exercise[] = [
  // Shoulders
  { name: 'Shoulder Press', sets: 4, reps: [15, 12, 10, 8] },
  { name: 'Lateral Raises', sets: 4, reps: [15, 12, 10, 8] },
  { name: 'Upright Rows', sets: 4, reps: [15, 12, 10, 8] },
  { name: 'Reverse Pec Deck', sets: 4, reps: [15, 12, 10, 8] },
  { name: 'Face Pulls', sets: 4, reps: [15, 12, 10, 8] },
  // Legs
  { name: 'Squats', sets: 4, reps: [15, 12, 10, 8] },
  { name: 'Leg Extensions', sets: 4, reps: [15, 12, 10, 8] },
  { name: 'Lunges', sets: 4, reps: [15, 12, 10, 8] },
  { name: 'Leg Press', sets: 4, reps: [15, 12, 10, 8] },
  { name: 'Calf Raises', sets: 4, reps: [15, 12, 10, 8] }
];

export const workoutSchedule: WorkoutSchedule = {
  monday: {
    day: 'Monday',
    muscleGroups: ['Chest', 'Triceps'],
    exercises: [...warmUpExercises, ...chestTricepsExercises, ...coreExercises]
  },
  tuesday: {
    day: 'Tuesday',
    muscleGroups: ['Back', 'Biceps'],
    exercises: [...warmUpExercises, ...backBicepsExercises, ...coreExercises]
  },
  wednesday: {
    day: 'Wednesday',
    muscleGroups: ['Shoulders', 'Legs'],
    exercises: [...warmUpExercises, ...shouldersLegsExercises, ...coreExercises]
  },
  thursday: {
    day: 'Thursday',
    muscleGroups: ['Chest', 'Triceps'],
    exercises: [...warmUpExercises, ...chestTricepsExercises, ...coreExercises]
  },
  friday: {
    day: 'Friday',
    muscleGroups: ['Back', 'Biceps'],
    exercises: [...warmUpExercises, ...backBicepsExercises, ...coreExercises]
  },
  saturday: {
    day: 'Saturday',
    muscleGroups: ['Shoulders', 'Legs'],
    exercises: [...warmUpExercises, ...shouldersLegsExercises, ...coreExercises]
  },
  sunday: {
    day: 'Sunday',
    muscleGroups: ['Rest'],
    exercises: []
  }
};
