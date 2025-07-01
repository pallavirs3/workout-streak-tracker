
# 💪 Personal Fitness Tracker

A comprehensive web-based fitness tracking application designed for a 6-day workout split program. Track your daily workouts, monitor progress, and stay motivated with detailed analytics and customizable workout selection.

## ✨ Features

### 🏋️ Workout Management
- **6-Day Split Program**: Pre-configured workout schedule covering Chest & Triceps, Back & Biceps, and Shoulders & Legs
- **Flexible Workout Selection**: Choose any workout on any day to fit your schedule
- **Detailed Exercise Lists**: Complete exercise breakdown with sets and reps for each workout
- **Rest Day Support**: Dedicated rest day tracking

### 📊 Progress Tracking
- **Workout History**: Complete log of all completed and skipped workouts
- **Analytics Dashboard**: Visual progress tracking with charts and statistics
- **Completion Rate**: Track your consistency with percentage-based metrics
- **Muscle Group Analysis**: See which muscle groups you've trained most frequently

### 🎯 Motivation & UX
- **Daily Motivation**: Inspirational sticky note with motivational content
- **Intuitive Interface**: Clean, responsive design with easy navigation
- **Real-time Updates**: Instant feedback on workout completion
- **Visual Progress**: Color-coded workout history and progress indicators

## 🏗️ Technical Stack

- **Frontend**: React 18 with TypeScript
- **UI Framework**: Tailwind CSS with shadcn/ui components
- **Database**: Supabase (PostgreSQL)
- **Charts**: Recharts for data visualization
- **Icons**: Lucide React
- **Build Tool**: Vite
- **State Management**: React Hooks with Tanstack Query

## 📱 Application Structure

### Workout Programs
Each workout day includes:
- **Warm-up Routine**: 12 essential warm-up exercises
- **Main Workout**: Targeted muscle group exercises with progressive rep schemes (15, 12, 10, 8)
- **Core Training**: 6 dedicated abs/core exercises

### Workout Schedule
- **Monday & Thursday**: Chest & Triceps
- **Tuesday & Friday**: Back & Biceps  
- **Wednesday & Saturday**: Shoulders & Legs
- **Sunday**: Rest Day

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd fitness-tracker
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
Create a `.env` file in the root directory and add your Supabase credentials:
```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

4. Start the development server:
```bash
npm run dev
```

5. Open your browser and navigate to `http://localhost:5173`

## 📊 Database Schema

The application uses a single table structure:

### workout_logs
- `id`: Primary key (auto-generated)
- `date`: Workout date (unique)
- `day`: Day of the week
- `muscle_groups`: Array of targeted muscle groups
- `exercises`: Array of exercise names
- `completed`: Boolean flag for completion status
- `created_at`: Timestamp

## 🎨 Key Components

- **TodaysWorkout**: Displays the current day's scheduled workout
- **WorkoutSelector**: Allows custom workout selection
- **WorkoutHistory**: Shows historical workout data
- **WorkoutAnalytics**: Provides statistical insights and charts
- **MotivationalNote**: Daily motivation with inspirational content

## 📈 Features in Detail

### Analytics Dashboard
- Total workouts completed
- Total workouts missed
- Overall completion percentage
- Muscle group training frequency chart
- Progress tracking over time

### Workout Flexibility
- Follow the scheduled 6-day split
- Choose any workout for any day
- Mark workouts as complete or skipped
- Rest day acknowledgment

## 🎯 Usage

1. **Daily Workout**: Check today's scheduled workout on the main dashboard
2. **Custom Selection**: Use the workout selector to choose any workout
3. **Track Progress**: Mark workouts as complete or skipped
4. **View History**: Check your workout history in the History tab
5. **Analyze Progress**: Review your statistics in the Analytics tab

## 🔧 Customization

The workout programs can be easily customized by modifying the `src/data/workouts.ts` file. You can:
- Add new exercises
- Modify rep schemes
- Change muscle group combinations
- Adjust workout structure

## 📱 Responsive Design

The application is fully responsive and works seamlessly across:
- Desktop computers
- Tablets
- Mobile phones

## 🚀 Deployment

The application can be deployed to any static hosting service like:
- Vercel
- Netlify
- GitHub Pages
- Firebase Hosting

Build the project for production:
```bash
npm run build
```

The built files will be in the `dist` directory.

## 🤝 Contributing

Feel free to contribute to this project by:
- Reporting bugs
- Suggesting new features
- Submitting pull requests
- Improving documentation

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

**Happy Training! 💪**
