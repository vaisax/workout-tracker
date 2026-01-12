import React, { useState } from 'react';
import { CheckCircle, Circle, ChevronRight, Dumbbell, Calendar, TrendingUp, BarChart3, Activity, Target, Zap, Award } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, Legend } from 'recharts';

// BLOCK 1 DATA
const BLOCK_1_WEEKS = {
  1: {
    name: "Accumulation A",
    days: {
      1: {
        name: "Squat Focus",
        exercises: [
          { name: "Low-Bar Squat", sets: 5, reps: 5, weight: 130, rpe: "6", lift: "squat" },
          { name: "Paused Bench (2s)", sets: 4, reps: 6, weight: 70, rpe: "6-6.5", lift: "bench" },
          { name: "DB Romanian Deadlift", sets: 3, reps: 10, weight: 0, rpe: "7" },
          { name: "Hanging Leg Raise", sets: 4, reps: "12-15" },
          { name: "Weighted Plank", sets: 3, reps: "30-45s" }
        ]
      },
      2: {
        name: "Bench Focus",
        exercises: [
          { name: "Competition Bench", sets: 6, reps: 4, weight: 75, rpe: "6", lift: "bench" },
          { name: "Close-Grip Bench", sets: 4, reps: 8, weight: 65, rpe: "7", lift: "bench" },
          { name: "Chest-Supported Row", sets: 4, reps: 10, weight: 0 },
          { name: "Lateral Raises", sets: 4, reps: "15-20" },
          { name: "EZ-Bar Curl", sets: 3, reps: "10-12", weight: 0, rpe: "7" },
          { name: "Overhead Cable Triceps Ext", sets: 3, reps: "12-15", weight: 0, rpe: "7" }
        ]
      },
      3: {
        name: "Deadlift Focus",
        exercises: [
          { name: "Sumo Deadlift", sets: 5, reps: 4, weight: 160, rpe: "6", lift: "deadlift" },
          { name: "Tempo Squat (3s down)", sets: 3, reps: 6, weight: 110, rpe: "6", lift: "squat" },
          { name: "Hamstring Curl", sets: 4, reps: 12, weight: 0 },
          { name: "Back Extension", sets: 3, reps: 12 },
          { name: "Ab Wheel / Dead Bug", sets: 3, reps: "8-12" }
        ]
      },
      4: {
        name: "Bench Intensity + Squat Volume",
        exercises: [
          { name: "Paused Bench", sets: 5, reps: 3, weight: 80, rpe: "6.5", lift: "bench" },
          { name: "High-Bar Squat", sets: 4, reps: 8, weight: 115, rpe: "7", lift: "squat" },
          { name: "Pulldown / Cable Row", sets: 4, reps: "10-12", weight: 0 },
          { name: "Triceps Pushdowns", sets: 3, reps: "12-15" },
          { name: "JM Press (light)", sets: 3, reps: 6, weight: 47.5, rpe: "6-7", lift: "bench" },
          { name: "Hammer Curl", sets: 3, reps: "10-12" }
        ]
      },
      5: {
        name: "Hypertrophy / Stability / Core",
        exercises: [
          { name: "Safety Bar / Belt Squat", sets: 4, reps: 6, weight: 120, rpe: "7", lift: "squat" },
          { name: "DB Incline Bench", sets: 4, reps: 10, weight: 0, lift: "bench" },
          { name: "Single-Leg RDL", sets: 3, reps: "10/leg", weight: 0 },
          { name: "Rear Delts", sets: 3, reps: "12-15" },
          { name: "Cable Crunch (slow)", sets: 3, reps: "12-15" },
          { name: "Plank", sets: 2, reps: "45-60s" }
        ]
      }
    }
  },
  4: {
    name: "Accumulation B",
    days: {
      1: {
        name: "Squat Focus",
        exercises: [
          { name: "Low-Bar Squat", sets: 5, reps: 5, weight: 135, rpe: "6", lift: "squat" },
          { name: "Paused Bench (2s)", sets: 4, reps: 6, weight: 72.5, rpe: "6-6.5", lift: "bench" },
          { name: "DB Romanian Deadlift", sets: 3, reps: 10, weight: 0, rpe: "7" },
          { name: "Hanging Leg Raise", sets: 4, reps: "12-15" },
          { name: "Weighted Plank", sets: 3, reps: "30-45s" }
        ]
      },
      2: {
        name: "Bench Focus",
        exercises: [
          { name: "Competition Bench", sets: 6, reps: 4, weight: 77.5, rpe: "6", lift: "bench" },
          { name: "Close-Grip Bench", sets: 4, reps: 8, weight: 67.5, rpe: "7", lift: "bench" },
          { name: "Chest-Supported Row", sets: 4, reps: 10, weight: 0 },
          { name: "Lateral Raises", sets: 4, reps: "15-20" },
          { name: "EZ-Bar Curl", sets: 3, reps: "10-12", weight: 0, rpe: "7" },
          { name: "Overhead Cable Triceps Ext", sets: 3, reps: "12-15", weight: 0, rpe: "7" }
        ]
      },
      3: {
        name: "Deadlift Focus",
        exercises: [
          { name: "Sumo Deadlift", sets: 5, reps: 4, weight: 165, rpe: "6", lift: "deadlift" },
          { name: "Tempo Squat (3s down)", sets: 3, reps: 6, weight: 115, rpe: "6", lift: "squat" },
          { name: "Hamstring Curl", sets: 4, reps: 12, weight: 0 },
          { name: "Back Extension", sets: 3, reps: 12 },
          { name: "Ab Wheel / Dead Bug", sets: 3, reps: "8-12" }
        ]
      },
      4: {
        name: "Bench Intensity + Squat Volume",
        exercises: [
          { name: "Paused Bench", sets: 5, reps: 3, weight: 82.5, rpe: "6.5", lift: "bench" },
          { name: "High-Bar Squat", sets: 4, reps: 8, weight: 120, rpe: "7", lift: "squat" },
          { name: "Pulldown / Cable Row", sets: 4, reps: "10-12", weight: 0 },
          { name: "Triceps Pushdowns", sets: 3, reps: "12-15" },
          { name: "JM Press (light)", sets: 3, reps: 6, weight: 50, rpe: "6-7", lift: "bench" },
          { name: "Hammer Curl", sets: 3, reps: "10-12" }
        ]
      },
      5: {
        name: "Hypertrophy / Stability / Core",
        exercises: [
          { name: "Safety Bar / Belt Squat", sets: 4, reps: 6, weight: 125, rpe: "7", lift: "squat" },
          { name: "DB Incline Bench", sets: 4, reps: 10, weight: 0, lift: "bench" },
          { name: "Single-Leg RDL", sets: 3, reps: "10/leg", weight: 0 },
          { name: "Rear Delts", sets: 3, reps: "12-15" },
          { name: "Cable Crunch (slow)", sets: 3, reps: "12-15" },
          { name: "Plank", sets: 2, reps: "45-60s" }
        ]
      }
    }
  },
  7: {
    name: "Deload Week",
    days: {
      1: {
        name: "Light Squat + Bench",
        exercises: [
          { name: "Low-Bar Squat", sets: 3, reps: 3, weight: 120, rpe: "≤5", lift: "squat" },
          { name: "Paused Bench", sets: 3, reps: 4, weight: 65, rpe: "≤5", lift: "bench" },
          { name: "Light Rows", sets: 2, reps: 10, weight: 0 },
          { name: "Abs", sets: 2, reps: 12 }
        ]
      },
      2: {
        name: "Light Bench + Upper",
        exercises: [
          { name: "Competition Bench", sets: 4, reps: 3, weight: 70, rpe: "≤5", lift: "bench" },
          { name: "DB or Machine Upper Back", sets: 2, reps: 10, weight: 0 },
          { name: "EZ Bar Curl", sets: 2, reps: "10-12" },
          { name: "Triceps Extension", sets: 2, reps: "10-12" }
        ]
      },
      3: {
        name: "Light Deadlift + Squat",
        exercises: [
          { name: "Sumo Deadlift", sets: 3, reps: 3, weight: 145, rpe: "≤5", lift: "deadlift" },
          { name: "High-Bar Squat", sets: 2, reps: 5, weight: 100, rpe: "≤5", lift: "squat" },
          { name: "Hamstrings", sets: 2, reps: 12 }
        ]
      },
      4: {
        name: "Pump + Mobility",
        exercises: [
          { name: "Paused Bench", sets: 3, reps: 3, weight: 72.5, rpe: "≤5", lift: "bench" },
          { name: "Planks", sets: 2, reps: "45s" },
          { name: "Ab Wheel", sets: 2, reps: 8 },
          { name: "Mobility Work", sets: 2, reps: "focus quality" }
        ]
      }
    }
  }
};

BLOCK_1_WEEKS[2] = BLOCK_1_WEEKS[1];
BLOCK_1_WEEKS[3] = BLOCK_1_WEEKS[1];
BLOCK_1_WEEKS[5] = BLOCK_1_WEEKS[4];
BLOCK_1_WEEKS[6] = BLOCK_1_WEEKS[4];

// BLOCK 2 DATA
const BLOCK_2_WEEKS = {
  1: {
    name: "Intensification Week 1",
    days: {
      1: {
        name: "Squat Heavy + Bench Volume",
        exercises: [
          { name: "Low-Bar Squat (Top Set)", sets: 1, reps: "3-5", weight: 145, rpe: "7.5-8", lift: "squat", isTopSet: true },
          { name: "Low-Bar Squat (Back-Off)", sets: 3, reps: 5, weight: 125, rpe: "7", lift: "squat" },
          { name: "Paused Bench", sets: 4, reps: 6, weight: 72.5, rpe: "7", lift: "bench" },
          { name: "DB Romanian Deadlift", sets: 3, reps: 10, weight: 0, rpe: "7" },
          { name: "Hanging Leg Raise", sets: 4, reps: "12-15" },
          { name: "Weighted Plank", sets: 3, reps: "30-45s" }
        ]
      },
      2: {
        name: "Bench Heavy + Upper / Arms",
        exercises: [
          { name: "Competition Bench (Top Set)", sets: 1, reps: "3-4", weight: 82.5, rpe: "7.5-8", lift: "bench", isTopSet: true },
          { name: "Competition Bench (Back-Off)", sets: 3, reps: 6, weight: 75, rpe: "7", lift: "bench" },
          { name: "Close-Grip Bench", sets: 4, reps: 8, weight: 67.5, rpe: "7", lift: "bench" },
          { name: "Chest-Supported Row", sets: 4, reps: 10, weight: 0 },
          { name: "EZ-Bar Curl", sets: 3, reps: "10-12", weight: 0, rpe: "7" },
          { name: "Overhead Triceps Extension", sets: 3, reps: "12-15", weight: 0, rpe: "7" },
          { name: "Lateral Raises", sets: 3, reps: "15-20" }
        ]
      },
      3: {
        name: "Deadlift Heavy + Squat Light",
        exercises: [
          { name: "Sumo Deadlift (Top Set)", sets: 1, reps: "3-4", weight: 180, rpe: "7.5-8", lift: "deadlift", isTopSet: true },
          { name: "Sumo Deadlift (Back-Off)", sets: 3, reps: 5, weight: 155, rpe: "7", lift: "deadlift" },
          { name: "Tempo Squat (3s down)", sets: 3, reps: 6, weight: 115, rpe: "6.5", lift: "squat" },
          { name: "Hamstring Curl", sets: 4, reps: 12, weight: 0 },
          { name: "Back Extension", sets: 3, reps: 12 },
          { name: "Ab Wheel / Dead Bug", sets: 3, reps: "10-12" }
        ]
      },
      4: {
        name: "Bench Volume + Squat Accessory",
        exercises: [
          { name: "Paused Bench", sets: 5, reps: 4, weight: 77.5, rpe: "7", lift: "bench" },
          { name: "High-Bar Squat (lighter)", sets: 4, reps: 8, weight: 120, rpe: "7", lift: "squat" },
          { name: "Pulldown / Cable Row", sets: 4, reps: "10-12", weight: 0 },
          { name: "Triceps Pushdowns", sets: 3, reps: "12-15" },
          { name: "JM Press (light)", sets: 3, reps: 6, weight: 50, rpe: "6-7", lift: "bench" },
          { name: "Hammer Curl", sets: 3, reps: "10-12" }
        ]
      },
      5: {
        name: "Hypertrophy / Weak Points / Core",
        exercises: [
          { name: "Safety Bar / Belt Squat", sets: 4, reps: 6, weight: 125, rpe: "7", lift: "squat" },
          { name: "DB Incline Bench", sets: 4, reps: 10, weight: 0, lift: "bench" },
          { name: "Single-Leg RDL", sets: 3, reps: "10/leg", weight: 0 },
          { name: "Rear Delts", sets: 3, reps: "12-15" },
          { name: "Cable Crunch (slow)", sets: 3, reps: "12-15" },
          { name: "Plank / Weighted Plank", sets: "2-3", reps: "45-60s" }
        ]
      }
    }
  },
  2: {
    name: "Intensification Week 2",
    days: {
      1: {
        name: "Squat Heavy + Bench Volume",
        exercises: [
          { name: "Low-Bar Squat (Top Set)", sets: 1, reps: "3-5", weight: 147.5, rpe: "7.5-8", lift: "squat", isTopSet: true },
          { name: "Low-Bar Squat (Back-Off)", sets: 3, reps: 5, weight: 127.5, rpe: "7", lift: "squat" },
          { name: "Paused Bench", sets: 4, reps: 6, weight: 75, rpe: "7", lift: "bench" },
          { name: "DB Romanian Deadlift", sets: 3, reps: 10, weight: 0, rpe: "7" },
          { name: "Hanging Leg Raise", sets: 4, reps: "12-15" },
          { name: "Weighted Plank", sets: 3, reps: "30-45s" }
        ]
      },
      2: {
        name: "Bench Heavy + Upper / Arms",
        exercises: [
          { name: "Competition Bench (Top Set)", sets: 1, reps: "3-4", weight: 85, rpe: "7.5-8", lift: "bench", isTopSet: true },
          { name: "Competition Bench (Back-Off)", sets: 3, reps: 6, weight: 77.5, rpe: "7", lift: "bench" },
          { name: "Close-Grip Bench", sets: 4, reps: 8, weight: 67.5, rpe: "7", lift: "bench" },
          { name: "Chest-Supported Row", sets: 4, reps: 10, weight: 0 },
          { name: "EZ-Bar Curl", sets: 3, reps: "10-12", weight: 0, rpe: "7" },
          { name: "Overhead Triceps Extension", sets: 3, reps: "12-15", weight: 0, rpe: "7" },
          { name: "Lateral Raises", sets: 3, reps: "15-20" }
        ]
      },
      3: {
        name: "Deadlift Heavy + Squat Light",
        exercises: [
          { name: "Sumo Deadlift (Top Set)", sets: 1, reps: "3-4", weight: 182.5, rpe: "7.5-8", lift: "deadlift", isTopSet: true },
          { name: "Sumo Deadlift (Back-Off)", sets: 3, reps: 5, weight: 157.5, rpe: "7", lift: "deadlift" },
          { name: "Tempo Squat (3s down)", sets: 3, reps: 6, weight: 115, rpe: "6.5", lift: "squat" },
          { name: "Hamstring Curl", sets: 4, reps: 12, weight: 0 },
          { name: "Back Extension", sets: 3, reps: 12 },
          { name: "Ab Wheel / Dead Bug", sets: 3, reps: "10-12" }
        ]
      },
      4: {
        name: "Bench Volume + Squat Accessory",
        exercises: [
          { name: "Paused Bench", sets: 5, reps: 4, weight: 80, rpe: "7", lift: "bench" },
          { name: "High-Bar Squat (lighter)", sets: 4, reps: 8, weight: 120, rpe: "7", lift: "squat" },
          { name: "Pulldown / Cable Row", sets: 4, reps: "10-12", weight: 0 },
          { name: "Triceps Pushdowns", sets: 3, reps: "12-15" },
          { name: "JM Press (light)", sets: 3, reps: 6, weight: 50, rpe: "6-7", lift: "bench" },
          { name: "Hammer Curl", sets: 3, reps: "10-12" }
        ]
      },
      5: {
        name: "Hypertrophy / Weak Points / Core",
        exercises: [
          { name: "Safety Bar / Belt Squat", sets: 4, reps: 6, weight: 125, rpe: "7", lift: "squat" },
          { name: "DB Incline Bench", sets: 4, reps: 10, weight: 0, lift: "bench" },
          { name: "Single-Leg RDL", sets: 3, reps: "10/leg", weight: 0 },
          { name: "Rear Delts", sets: 3, reps: "12-15" },
          { name: "Cable Crunch (slow)", sets: 3, reps: "12-15" },
          { name: "Plank / Weighted Plank", sets: "2-3", reps: "45-60s" }
        ]
      }
    }
  },
  3: {
    name: "Intensification Week 3",
    days: {
      1: {
        name: "Squat Heavy + Bench Volume",
        exercises: [
          { name: "Low-Bar Squat (Top Set)", sets: 1, reps: "3-5", weight: 150, rpe: "7.5-8", lift: "squat", isTopSet: true },
          { name: "Low-Bar Squat (Back-Off)", sets: 3, reps: 5, weight: 130, rpe: "7", lift: "squat" },
          { name: "Paused Bench", sets: 4, reps: 6, weight: 75, rpe: "7", lift: "bench" },
          { name: "DB Romanian Deadlift", sets: 3, reps: 10, weight: 0, rpe: "7" },
          { name: "Hanging Leg Raise", sets: 4, reps: "12-15" },
          { name: "Weighted Plank", sets: 3, reps: "30-45s" }
        ]
      },
      2: {
        name: "Bench Heavy + Upper / Arms",
        exercises: [
          { name: "Competition Bench (Top Set)", sets: 1, reps: "3-4", weight: 85, rpe: "7.5-8", lift: "bench", isTopSet: true },
          { name: "Competition Bench (Back-Off)", sets: 3, reps: 6, weight: 77.5, rpe: "7", lift: "bench" },
          { name: "Close-Grip Bench", sets: 4, reps: 8, weight: 67.5, rpe: "7", lift: "bench" },
          { name: "Chest-Supported Row", sets: 4, reps: 10, weight: 0 },
          { name: "EZ-Bar Curl", sets: 3, reps: "10-12", weight: 0, rpe: "7" },
          { name: "Overhead Triceps Extension", sets: 3, reps: "12-15", weight: 0, rpe: "7" },
          { name: "Lateral Raises", sets: 3, reps: "15-20" }
        ]
      },
      3: {
        name: "Deadlift Heavy + Squat Light",
        exercises: [
          { name: "Sumo Deadlift (Top Set)", sets: 1, reps: "3-4", weight: 185, rpe: "7.5-8", lift: "deadlift", isTopSet: true },
          { name: "Sumo Deadlift (Back-Off)", sets: 3, reps: 5, weight: 160, rpe: "7", lift: "deadlift" },
          { name: "Tempo Squat (3s down)", sets: 3, reps: 6, weight: 115, rpe: "6.5", lift: "squat" },
          { name: "Hamstring Curl", sets: 4, reps: 12, weight: 0 },
          { name: "Back Extension", sets: 3, reps: 12 },
          { name: "Ab Wheel / Dead Bug", sets: 3, reps: "10-12" }
        ]
      },
      4: {
        name: "Bench Volume + Squat Accessory",
        exercises: [
          { name: "Paused Bench", sets: 5, reps: 4, weight: 80, rpe: "7", lift: "bench" },
          { name: "High-Bar Squat (lighter)", sets: 4, reps: 8, weight: 120, rpe: "7", lift: "squat" },
          { name: "Pulldown / Cable Row", sets: 4, reps: "10-12", weight: 0 },
          { name: "Triceps Pushdowns", sets: 3, reps: "12-15" },
          { name: "JM Press (light)", sets: 3, reps: 6, weight: 50, rpe: "6-7", lift: "bench" },
          { name: "Hammer Curl", sets: 3, reps: "10-12" }
        ]
      },
      5: {
        name: "Hypertrophy / Weak Points / Core",
        exercises: [
          { name: "Safety Bar / Belt Squat", sets: 4, reps: 6, weight: 125, rpe: "7", lift: "squat" },
          { name: "DB Incline Bench", sets: 4, reps: 10, weight: 0, lift: "bench" },
          { name: "Single-Leg RDL", sets: 3, reps: "10/leg", weight: 0 },
          { name: "Rear Delts", sets: 3, reps: "12-15" },
          { name: "Cable Crunch (slow)", sets: 3, reps: "12-15" },
          { name: "Plank / Weighted Plank", sets: "2-3", reps: "45-60s" }
        ]
      }
    }
  },
  4: {
    name: "Intensification Week 4",
    days: {
      1: {
        name: "Squat Heavy + Bench Volume",
        exercises: [
          { name: "Low-Bar Squat (Top Set)", sets: 1, reps: "3-5", weight: 152.5, rpe: "7.5-8", lift: "squat", isTopSet: true },
          { name: "Low-Bar Squat (Back-Off)", sets: 3, reps: 5, weight: 130, rpe: "7", lift: "squat" },
          { name: "Paused Bench", sets: 4, reps: 6, weight: 75, rpe: "7", lift: "bench" },
          { name: "DB Romanian Deadlift", sets: 3, reps: 10, weight: 0, rpe: "7" },
          { name: "Hanging Leg Raise", sets: 4, reps: "12-15" },
          { name: "Weighted Plank", sets: 3, reps: "30-45s" }
        ]
      },
      2: {
        name: "Bench Heavy + Upper / Arms",
        exercises: [
          { name: "Competition Bench (Top Set)", sets: 1, reps: "3-4", weight: 85, rpe: "7.5-8", lift: "bench", isTopSet: true },
          { name: "Competition Bench (Back-Off)", sets: 3, reps: 6, weight: 77.5, rpe: "7", lift: "bench" },
          { name: "Close-Grip Bench", sets: 4, reps: 8, weight: 67.5, rpe: "7", lift: "bench" },
          { name: "Chest-Supported Row", sets: 4, reps: 10, weight: 0 },
          { name: "EZ-Bar Curl", sets: 3, reps: "10-12", weight: 0, rpe: "7" },
          { name: "Overhead Triceps Extension", sets: 3, reps: "12-15", weight: 0, rpe: "7" },
          { name: "Lateral Raises", sets: 3, reps: "15-20" }
        ]
      },
      3: {
        name: "Deadlift Heavy + Squat Light",
        exercises: [
          { name: "Sumo Deadlift (Top Set)", sets: 1, reps: "3-4", weight: 185, rpe: "7.5-8", lift: "deadlift", isTopSet: true },
          { name: "Sumo Deadlift (Back-Off)", sets: 3, reps: 5, weight: 160, rpe: "7", lift: "deadlift" },
          { name: "Tempo Squat (3s down)", sets: 3, reps: 6, weight: 115, rpe: "6.5", lift: "squat" },
          { name: "Hamstring Curl", sets: 4, reps: 12, weight: 0 },
          { name: "Back Extension", sets: 3, reps: 12 },
          { name: "Ab Wheel / Dead Bug", sets: 3, reps: "10-12" }
        ]
      },
      4: {
        name: "Bench Volume + Squat Accessory",
        exercises: [
          { name: "Paused Bench", sets: 5, reps: 4, weight: 80, rpe: "7", lift: "bench" },
          { name: "High-Bar Squat (lighter)", sets: 4, reps: 8, weight: 120, rpe: "7", lift: "squat" },
          { name: "Pulldown / Cable Row", sets: 4, reps: "10-12", weight: 0 },
          { name: "Triceps Pushdowns", sets: 3, reps: "12-15" },
          { name: "JM Press (light)", sets: 3, reps: 6, weight: 50, rpe: "6-7", lift: "bench" },
          { name: "Hammer Curl", sets: 3, reps: "10-12" }
        ]
      },
      5: {
        name: "Hypertrophy / Weak Points / Core",
        exercises: [
          { name: "Safety Bar / Belt Squat", sets: 4, reps: 6, weight: 125, rpe: "7", lift: "squat" },
          { name: "DB Incline Bench", sets: 4, reps: 10, weight: 0, lift: "bench" },
          { name: "Single-Leg RDL", sets: 3, reps: "10/leg", weight: 0 },
          { name: "Rear Delts", sets: 3, reps: "12-15" },
          { name: "Cable Crunch (slow)", sets: 3, reps: "12-15" },
          { name: "Plank / Weighted Plank", sets: "2-3", reps: "45-60s" }
        ]
      }
    }
  }
};

const BLOCKS = {
  1: {
    blockName: "Block 1: Accumulation / Base Build",
    trainingMaxes: { squat: 165, bench: 95, deadlift: 210 },
    weeks: BLOCK_1_WEEKS
  },
  2: {
    blockName: "Block 2: Intensification",
    trainingMaxes: { squat: 170, bench: 97.5, deadlift: 215 },
    weeks: BLOCK_2_WEEKS
  },
  3: {
    blockName: "Block 3: Realization / Peak",
    trainingMaxes: { squat: 160, bench: 87.5, deadlift: 190 },
    weeks: {}
  }
};

// BLOCK 3 DATA - Realization / Peak
const BLOCK_3_WEEKS = {
  1: {
    name: "Peak Week 1 - Heavy Singles",
    days: {
      1: {
        name: "Squat Heavy",
        exercises: [
          { name: "Low-Bar Squat (Top Set)", sets: 1, reps: "3-5", weight: 150, rpe: "8", lift: "squat", isTopSet: true },
          { name: "Low-Bar Squat (Back-Off)", sets: 2, reps: 3, weight: 132.5, rpe: "7", lift: "squat" },
          { name: "Paused Bench (light)", sets: 3, reps: 4, weight: 75, rpe: "6", lift: "bench" }
        ]
      },
      2: {
        name: "Bench Heavy",
        exercises: [
          { name: "Competition Bench (Top Set)", sets: 1, reps: "3-4", weight: 82.5, rpe: "8", lift: "bench", isTopSet: true },
          { name: "Competition Bench (Back-Off)", sets: 2, reps: 5, weight: 75, rpe: "7", lift: "bench" },
          { name: "High-Bar Squat (light)", sets: 3, reps: 5, weight: 110, rpe: "6", lift: "squat" }
        ]
      },
      3: {
        name: "Deadlift Heavy",
        exercises: [
          { name: "Sumo Deadlift (Top Set)", sets: 1, reps: "3-4", weight: 180, rpe: "8", lift: "deadlift", isTopSet: true },
          { name: "Sumo Deadlift (Back-Off)", sets: 2, reps: 5, weight: 157.5, rpe: "7", lift: "deadlift" },
          { name: "Tempo Squat (3s down)", sets: 2, reps: 5, weight: 107.5, rpe: "6", lift: "squat" }
        ]
      },
      4: {
        name: "Optional: Light Upper/Core",
        exercises: [
          { name: "Light Arms", sets: 2, reps: "10-12", weight: 0 },
          { name: "Core Work", sets: 2, reps: "10-15", weight: 0 }
        ]
      }
    }
  },
  2: {
    name: "Peak Week 2 - Heavier Singles",
    days: {
      1: {
        name: "Squat Heavy",
        exercises: [
          { name: "Low-Bar Squat (Top Set)", sets: 1, reps: "2-3", weight: 155, rpe: "8.5", lift: "squat", isTopSet: true },
          { name: "Low-Bar Squat (Back-Off)", sets: 2, reps: "2-3", weight: 137.5, rpe: "7.5", lift: "squat" },
          { name: "Paused Bench", sets: 3, reps: 3, weight: 78.75, rpe: "7", lift: "bench" }
        ]
      },
      2: {
        name: "Bench Heavy",
        exercises: [
          { name: "Competition Bench (Top Set)", sets: 1, reps: "2-3", weight: 85, rpe: "8.5", lift: "bench", isTopSet: true },
          { name: "Competition Bench (Back-Off)", sets: 2, reps: "3-4", weight: 78.75, rpe: "7.5", lift: "bench" },
          { name: "High-Bar Squat", sets: 3, reps: 3, weight: 115, rpe: "7", lift: "squat" }
        ]
      },
      3: {
        name: "Deadlift Heavy",
        exercises: [
          { name: "Sumo Deadlift (Top Set)", sets: 1, reps: "2-3", weight: 185, rpe: "8.5", lift: "deadlift", isTopSet: true },
          { name: "Sumo Deadlift (Back-Off)", sets: 2, reps: 3, weight: 162.5, rpe: "7.5", lift: "deadlift" },
          { name: "Tempo Squat", sets: 2, reps: 4, weight: 105, rpe: "6", lift: "squat" }
        ]
      },
      4: {
        name: "Optional: Light Upper/Core",
        exercises: [
          { name: "Light Arms", sets: 2, reps: "10-12", weight: 0 },
          { name: "Core Work", sets: 2, reps: "10-15", weight: 0 }
        ]
      }
    }
  },
  3: {
    name: "Peak Week 3 - PR WEEK 🏆",
    days: {
      1: {
        name: "Squat PR Attempt",
        exercises: [
          { name: "Warm-up Sets", sets: "3-5", reps: "1-5", weight: 0, rpe: "4-6" },
          { name: "Low-Bar Squat PR", sets: 1, reps: 1, weight: 160, rpe: "9", lift: "squat", isTopSet: true, isPR: true }
        ]
      },
      2: {
        name: "Bench PR Attempt",
        exercises: [
          { name: "Warm-up Sets", sets: "3-5", reps: "1-5", weight: 0, rpe: "4-6" },
          { name: "Competition Bench PR", sets: 1, reps: 1, weight: 90, rpe: "9", lift: "bench", isTopSet: true, isPR: true }
        ]
      },
      3: {
        name: "Deadlift PR Attempt",
        exercises: [
          { name: "Warm-up Sets", sets: "3-5", reps: "1-5", weight: 0, rpe: "4-6" },
          { name: "Sumo Deadlift PR", sets: 1, reps: 1, weight: 195, rpe: "9", lift: "deadlift", isTopSet: true, isPR: true }
        ]
      }
    }
  }
};

BLOCKS[3].weeks = BLOCK_3_WEEKS;

const RPE_TO_PERCENTAGE = {
  10: 1.0, 9.5: 0.978, 9: 0.955, 8.5: 0.939, 8: 0.922,
  7.5: 0.907, 7: 0.892, 6.5: 0.878, 6: 0.863, 5.5: 0.848, 5: 0.833
};

const calculate1RM = (weight, reps, rpe) => {
  if (!weight || !reps || !rpe) return null;
  const percentage = RPE_TO_PERCENTAGE[rpe] || 0.9;
  const repMax = weight / (1.0278 - 0.0278 * reps);
  return Math.round(repMax / percentage);
};

const WorkoutTracker = () => {
  const [currentBlock, setCurrentBlock] = useState(1);
  const [currentWeek, setCurrentWeek] = useState(1);
  const [currentDay, setCurrentDay] = useState(null);
  const [completedSets, setCompletedSets] = useState({});
  const [setData, setSetData] = useState({});
  const [showSuccess, setShowSuccess] = useState(false);
  const [view, setView] = useState('program');
  const [editingSet, setEditingSet] = useState(null);

  const workoutProgram = BLOCKS[currentBlock].weeks;
  const trainingMaxes = BLOCKS[currentBlock].trainingMaxes;
  const blockName = BLOCKS[currentBlock].blockName;
  const maxWeek = currentBlock === 1 ? 7 : currentBlock === 2 ? 4 : 3;

  const toggleSet = (exerciseIdx, setIdx) => {
    const key = `b${currentBlock}-w${currentWeek}-d${currentDay}-e${exerciseIdx}-s${setIdx}`;
    const isComplete = completedSets[key];
    
    if (!isComplete) {
      setEditingSet({ exerciseIdx, setIdx });
    } else {
      setCompletedSets(prev => {
        const newState = { ...prev };
        delete newState[key];
        return newState;
      });
      setSetData(prev => {
        const newState = { ...prev };
        delete newState[key];
        return newState;
      });
    }
  };

  const saveSetData = (exerciseIdx, setIdx, weight, rpe) => {
    const key = `b${currentBlock}-w${currentWeek}-d${currentDay}-e${exerciseIdx}-s${setIdx}`;
    setSetData(prev => ({
      ...prev,
      [key]: { weight: parseFloat(weight) || 0, rpe: parseFloat(rpe) || 0 }
    }));
    setCompletedSets(prev => ({
      ...prev,
      [key]: true
    }));
    setEditingSet(null);
  };

  const getSetData = (exerciseIdx, setIdx) => {
    const key = `b${currentBlock}-w${currentWeek}-d${currentDay}-e${exerciseIdx}-s${setIdx}`;
    return setData[key];
  };

  const isSetComplete = (exerciseIdx, setIdx) => {
    const key = `b${currentBlock}-w${currentWeek}-d${currentDay}-e${exerciseIdx}-s${setIdx}`;
    return completedSets[key] || false;
  };

  const getDayProgress = (block, week, dayNum) => {
    if (!BLOCKS[block]?.weeks[week]?.days[dayNum]) return 0;
    const dayExercises = BLOCKS[block].weeks[week].days[dayNum].exercises;
    let totalSets = 0;
    let completedCount = 0;
    
    dayExercises.forEach((ex, exIdx) => {
      const numSets = typeof ex.sets === 'number' ? ex.sets : 3;
      totalSets += numSets;
      for (let i = 0; i < numSets; i++) {
        const key = `b${block}-w${week}-d${dayNum}-e${exIdx}-s${i}`;
        if (completedSets[key]) completedCount++;
      }
    });
    
    return totalSets > 0 ? (completedCount / totalSets) * 100 : 0;
  };

  const getEstimated1RMs = () => {
    const estimates = { squat: [], bench: [], deadlift: [] };
    
    Object.keys(setData).forEach(key => {
      const match = key.match(/b(\d+)-w(\d+)-d(\d+)-e(\d+)-s(\d+)/);
      if (!match) return;
      
      const [, block, week, day, exIdx] = match.map(Number);
      if (block !== currentBlock) return;
      
      const ex = BLOCKS[block]?.weeks[week]?.days[day]?.exercises[exIdx];
      
      if (ex?.lift && ['squat', 'bench', 'deadlift'].includes(ex.lift)) {
        const data = setData[key];
        const reps = typeof ex.reps === 'number' ? ex.reps : 5;
        const e1rm = calculate1RM(data.weight, reps, data.rpe);
        
        if (e1rm) {
          estimates[ex.lift].push({
            week: `W${week}`,
            day: parseInt(day),
            e1rm,
            weight: data.weight,
            reps,
            rpe: data.rpe
          });
        }
      }
    });
    
    return estimates;
  };

  const getCurrentWorkoutE1RMs = () => {
    if (!currentDay) return null;
    
    const e1rms = { squat: null, bench: null, deadlift: null };
    const currentWorkout = workoutProgram[currentWeek]?.days[currentDay];
    
    currentWorkout?.exercises.forEach((ex, exIdx) => {
      if (ex.lift && ['squat', 'bench', 'deadlift'].includes(ex.lift)) {
        const numSets = typeof ex.sets === 'number' ? ex.sets : 3;
        let maxE1RM = 0;
        
        for (let i = 0; i < numSets; i++) {
          const data = getSetData(exIdx, i);
          if (data) {
            const reps = typeof ex.reps === 'number' ? ex.reps : 5;
            const e1rm = calculate1RM(data.weight, reps, data.rpe);
            if (e1rm > maxE1RM) maxE1RM = e1rm;
          }
        }
        
        if (maxE1RM > 0) {
          e1rms[ex.lift] = maxE1RM;
        }
      }
    });
    
    return e1rms;
  };

  const generateChartData = () => {
    const volumeByWeek = [];
    const bigThreeProgress = { squat: [], bench: [], deadlift: [] };
    
    const weeks = currentBlock === 1 ? 7 : currentBlock === 2 ? 4 : 3;
    
    for (let week = 1; week <= weeks; week++) {
      let totalVolume = 0;
      const weekData = { squat: 0, bench: 0, deadlift: 0 };
      
      Object.entries(BLOCKS[currentBlock].weeks[week]?.days || {}).forEach(([dayNum, day]) => {
        day.exercises.forEach((ex, exIdx) => {
          if (!ex.lift) return;
          
          const numSets = typeof ex.sets === 'number' ? ex.sets : 3;
          const reps = typeof ex.reps === 'number' ? ex.reps : 10;
          
          for (let i = 0; i < numSets; i++) {
            const key = `b${currentBlock}-w${week}-d${dayNum}-e${exIdx}-s${i}`;
            const data = setData[key];
            
            if (data) {
              const volume = data.weight * reps;
              totalVolume += volume;
              weekData[ex.lift] = Math.max(weekData[ex.lift], data.weight);
            }
          }
        });
      });
      
      if (totalVolume > 0) {
        volumeByWeek.push({
          week: `W${week}`,
          volume: Math.round(totalVolume),
          isDeload: week === 7
        });
      }
      
      if (weekData.squat > 0) bigThreeProgress.squat.push({ week: `W${week}`, weight: weekData.squat });
      if (weekData.bench > 0) bigThreeProgress.bench.push({ week: `W${week}`, weight: weekData.bench });
      if (weekData.deadlift > 0) bigThreeProgress.deadlift.push({ week: `W${week}`, weight: weekData.deadlift });
    }
    
    return { volumeByWeek, bigThreeProgress };
  };

  const completeWorkout = () => {
    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
      setCurrentDay(null);
      setView('program');
    }, 2000);
  };

  const { volumeByWeek, bigThreeProgress } = generateChartData();
  const e1rmEstimates = getEstimated1RMs();

  if (view === 'stats') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white p-4 pb-24">
        <div className="max-w-md mx-auto">
          <div className="mb-6">
            <h1 className="text-2xl font-bold mb-2">Performance Analytics</h1>
            <p className="text-gray-400 text-sm">{blockName}</p>
          </div>

          <div className="bg-gray-800 rounded-2xl p-4 mb-4">
            <h3 className="font-semibold mb-3 flex items-center gap-2">
              <Zap className="w-5 h-5 text-yellow-400" />
              Estimated 1RM Progress
            </h3>
            <ResponsiveContainer width="100%" height={220}>
              <LineChart>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis 
                  dataKey="week" 
                  type="category"
                  allowDuplicatedCategory={false}
                  stroke="#9CA3AF" 
                  style={{ fontSize: '12px' }} 
                />
                <YAxis stroke="#9CA3AF" style={{ fontSize: '12px' }} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#1F2937', border: 'none', borderRadius: '8px' }}
                  labelStyle={{ color: '#fff' }}
                />
                <Legend wrapperStyle={{ fontSize: '12px' }} />
                {e1rmEstimates.squat.length > 0 && (
                  <Line 
                    data={e1rmEstimates.squat} 
                    type="monotone" 
                    dataKey="e1rm" 
                    stroke="#10B981" 
                    strokeWidth={3}
                    name="Squat e1RM"
                    dot={{ fill: '#10B981', r: 5 }}
                  />
                )}
                {e1rmEstimates.bench.length > 0 && (
                  <Line 
                    data={e1rmEstimates.bench} 
                    type="monotone" 
                    dataKey="e1rm" 
                    stroke="#06B6D4" 
                    strokeWidth={3}
                    name="Bench e1RM"
                    dot={{ fill: '#06B6D4', r: 5 }}
                  />
                )}
                {e1rmEstimates.deadlift.length > 0 && (
                  <Line 
                    data={e1rmEstimates.deadlift} 
                    type="monotone" 
                    dataKey="e1rm" 
                    stroke="#8B5CF6" 
                    strokeWidth={3}
                    name="Deadlift e1RM"
                    dot={{ fill: '#8B5CF6', r: 5 }}
                  />
                )}
              </LineChart>
            </ResponsiveContainer>
            <p className="text-xs text-gray-400 mt-2">
              Based on weight, reps, and RPE using Epley formula
            </p>
          </div>

          {volumeByWeek.length > 0 && (
            <div className="bg-gray-800 rounded-2xl p-4 mb-4">
              <h3 className="font-semibold mb-3 flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-emerald-400" />
                Barbell Volume by Week
              </h3>
              <ResponsiveContainer width="100%" height={180}>
                <BarChart data={volumeByWeek}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis dataKey="week" stroke="#9CA3AF" style={{ fontSize: '12px' }} />
                  <YAxis stroke="#9CA3AF" style={{ fontSize: '12px' }} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#1F2937', border: 'none', borderRadius: '8px' }}
                    labelStyle={{ color: '#fff' }}
                  />
                  <Bar dataKey="volume" fill="#10B981" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
              <p className="text-xs text-gray-400 mt-2">
                Only includes barbell movements (SBD + variations)
              </p>
            </div>
          )}

          {bigThreeProgress.squat.length > 0 && (
            <div className="bg-gray-800 rounded-2xl p-4 mb-4">
              <h3 className="font-semibold mb-3 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-cyan-400" />
                Top Weights per Week
              </h3>
              <ResponsiveContainer width="100%" height={180}>
                <LineChart>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis 
                    dataKey="week" 
                    type="category"
                    allowDuplicatedCategory={false}
                    stroke="#9CA3AF" 
                    style={{ fontSize: '12px' }} 
                  />
                  <YAxis stroke="#9CA3AF" style={{ fontSize: '12px' }} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#1F2937', border: 'none', borderRadius: '8px' }}
                    labelStyle={{ color: '#fff' }}
                  />
                  <Legend wrapperStyle={{ fontSize: '12px' }} />
                  {bigThreeProgress.squat.length > 0 && (
                    <Line 
                      data={bigThreeProgress.squat} 
                      type="monotone" 
                      dataKey="weight" 
                      stroke="#10B981" 
                      strokeWidth={2}
                      name="Squat"
                      dot={{ fill: '#10B981', r: 4 }}
                    />
                  )}
                  {bigThreeProgress.bench.length > 0 && (
                    <Line 
                      data={bigThreeProgress.bench} 
                      type="monotone" 
                      dataKey="weight" 
                      stroke="#06B6D4" 
                      strokeWidth={2}
                      name="Bench"
                      dot={{ fill: '#06B6D4', r: 4 }}
                    />
                  )}
                  {bigThreeProgress.deadlift.length > 0 && (
                    <Line 
                      data={bigThreeProgress.deadlift} 
                      type="monotone" 
                      dataKey="weight" 
                      stroke="#8B5CF6" 
                      strokeWidth={2}
                      name="Deadlift"
                      dot={{ fill: '#8B5CF6', r: 4 }}
                    />
                  )}
                </LineChart>
              </ResponsiveContainer>
            </div>
          )}

          <div className="grid grid-cols-2 gap-3">
            <div className="bg-gradient-to-br from-emerald-500/20 to-emerald-500/5 border border-emerald-500/30 rounded-xl p-4">
              <div className="text-2xl font-bold text-emerald-400">
                {Object.values(completedSets).filter(Boolean).length}
              </div>
              <div className="text-xs text-gray-400 mt-1">Total Sets</div>
            </div>
            <div className="bg-gradient-to-br from-cyan-500/20 to-cyan-500/5 border border-cyan-500/30 rounded-xl p-4">
              <div className="text-2xl font-bold text-cyan-400">
                {volumeByWeek.length > 0 ? Math.round(volumeByWeek.reduce((sum, w) => sum + w.volume, 0) / 1000) : 0}k
              </div>
              <div className="text-xs text-gray-400 mt-1">Total Volume (kg)</div>
            </div>
          </div>
        </div>

        <div className="fixed bottom-0 left-0 right-0 bg-gray-900 border-t border-gray-800 px-4 py-3 safe-area-bottom">
          <div className="max-w-md mx-auto flex gap-2">
            <button
              onClick={() => setView('program')}
              className="flex-1 py-3 rounded-xl bg-gray-800 hover:bg-gray-700 transition-colors flex items-center justify-center gap-2"
            >
              <Calendar className="w-5 h-5" />
              <span className="text-sm font-medium">Program</span>
            </button>
            <button
              className="flex-1 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 flex items-center justify-center gap-2"
            >
              <BarChart3 className="w-5 h-5" />
              <span className="text-sm font-medium">Stats</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (currentDay !== null) {
    const currentWorkout = workoutProgram[currentWeek]?.days[currentDay];
    const workoutProgress = getDayProgress(currentBlock, currentWeek, currentDay);
    const currentE1RMs = getCurrentWorkoutE1RMs();

    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white p-4 pb-32">
        <div className="max-w-md mx-auto">
          {showSuccess && (
            <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/50 backdrop-blur-sm">
              <div className="bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-full p-8 animate-bounce-in shadow-2xl">
                <CheckCircle className="w-16 h-16 text-white" />
              </div>
            </div>
          )}

          {editingSet && (
            <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/70 backdrop-blur-sm p-4">
              <div className="bg-gray-800 rounded-2xl p-6 w-full max-w-sm">
                <h3 className="text-lg font-bold mb-4">
                  {currentWorkout.exercises[editingSet.exerciseIdx].name}
                </h3>
                <p className="text-sm text-gray-400 mb-4">Set {editingSet.setIdx + 1}</p>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Weight (kg)</label>
                    <input
                      id="weight-input"
                      type="number"
                      step="0.5"
                      defaultValue={currentWorkout.exercises[editingSet.exerciseIdx].weight || 0}
                      className="w-full bg-gray-700 rounded-lg px-4 py-3 text-lg"
                      autoFocus
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">RPE (5-10)</label>
                    <input
                      id="rpe-input"
                      type="number"
                      step="0.5"
                      min="5"
                      max="10"
                      defaultValue={7}
                      className="w-full bg-gray-700 rounded-lg px-4 py-3 text-lg"
                    />
                  </div>
                  
                  <div className="flex gap-3 mt-6">
                    <button
                      onClick={() => setEditingSet(null)}
                      className="flex-1 py-3 bg-gray-700 rounded-xl font-medium hover:bg-gray-600"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={() => {
                        const weight = document.getElementById('weight-input').value;
                        const rpe = document.getElementById('rpe-input').value;
                        saveSetData(editingSet.exerciseIdx, editingSet.setIdx, weight, rpe);
                      }}
                      className="flex-1 py-3 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-xl font-bold"
                    >
                      Save
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className="mb-4">
            <button
              onClick={() => setCurrentDay(null)}
              className="text-emerald-400 hover:text-emerald-300 mb-3 transition-colors text-sm"
            >
              ← Back
            </button>
            <div className="flex items-center justify-between mb-3">
              <div>
                <h1 className="text-xl font-bold">{currentWorkout.name}</h1>
                <p className="text-gray-400 text-sm">Block {currentBlock} • Week {currentWeek} • Day {currentDay}</p>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                  {Math.round(workoutProgress)}%
                </div>
                <p className="text-xs text-gray-400">Complete</p>
              </div>
            </div>
            <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-emerald-500 to-cyan-500 transition-all duration-500"
                style={{ width: `${workoutProgress}%` }}
              />
            </div>
          </div>

          <div className="space-y-3 mb-4">
            {currentWorkout.exercises.map((ex, exIdx) => {
              const numSets = typeof ex.sets === 'number' ? ex.sets : 3;
              const setsCompleted = Array.from({ length: numSets }).filter((_, i) => 
                isSetComplete(exIdx, i)
              ).length;

              return (
                <div
                  key={exIdx}
                  className="bg-gray-800 rounded-xl p-4 transition-all duration-300"
                >
                  <div className="mb-3">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-base font-semibold">{ex.name}</h3>
                      {ex.isTopSet && (
                        <span className={`px-2 py-0.5 text-xs font-bold rounded-full border ${
                          ex.isPR 
                            ? 'bg-purple-500/20 text-purple-400 border-purple-500/30 animate-pulse'
                            : 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30'
                        }`}>
                          {ex.isPR ? '🏆 PR ATTEMPT' : 'TOP SET'}
                        </span>
                      )}
                    </div>
                    <div className="flex flex-wrap gap-2 text-xs">
                      {ex.rpe && (
                        <span className="px-2 py-1 bg-emerald-900/30 text-emerald-400 rounded-lg">
                          Target RPE {ex.rpe}
                        </span>
                      )}
                      <span className="px-2 py-1 bg-gray-700 rounded-lg">
                        {ex.sets} × {ex.reps}
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-5 gap-2">
                    {Array.from({ length: numSets }).map((_, setIdx) => {
                      const isComplete = isSetComplete(exIdx, setIdx);
                      const data = getSetData(exIdx, setIdx);
                      
                      return (
                        <button
                          key={setIdx}
                          onClick={() => toggleSet(exIdx, setIdx)}
                          className={`aspect-square p-2 rounded-lg font-semibold transition-all duration-300 ${
                            isComplete
                              ? 'bg-gradient-to-br from-emerald-500 to-cyan-500 shadow-lg shadow-emerald-500/30'
                              : 'bg-gray-700 hover:bg-gray-600 active:scale-95'
                          }`}
                        >
                          {isComplete ? (
                            <div className="flex flex-col items-center justify-center h-full text-xs">
                              <CheckCircle className="w-6 h-6 mb-1" />
                              {data && (
                                <>
                                  <div className="font-bold">{data.weight}kg</div>
                                  <div className="text-[10px] opacity-90">@{data.rpe}</div>
                                </>
                              )}
                            </div>
                          ) : (
                            <div className="flex flex-col items-center justify-center h-full">
                              <Circle className="w-6 h-6 text-gray-500" />
                              <div className="text-xs mt-1">{setIdx + 1}</div>
                            </div>
                          )}
                        </button>
                      );
                    })}
                  </div>

                  <div className="mt-2 text-xs text-gray-400">
                    {setsCompleted} / {numSets} complete
                  </div>
                </div>
              );
            })}
          </div>

          {workoutProgress === 100 && (
            <button
              onClick={completeWorkout}
              className="w-full py-4 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-xl font-bold shadow-lg shadow-emerald-500/50 hover:shadow-emerald-500/70 transition-all duration-300 active:scale-95 mb-4"
            >
              Complete Workout 🎉
            </button>
          )}

          {currentE1RMs && (currentE1RMs.squat || currentE1RMs.bench || currentE1RMs.deadlift) && (
            <div className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/30 rounded-xl p-4">
              <div className="flex items-center gap-2 mb-3">
                <Award className="w-5 h-5 text-yellow-400" />
                <h3 className="font-bold text-yellow-400">Today's Estimated 1RMs</h3>
              </div>
              <div className="grid grid-cols-3 gap-3">
                {currentE1RMs.squat && (
                  <div className="text-center">
                    <div className="text-2xl font-bold text-emerald-400">{currentE1RMs.squat}</div>
                    <div className="text-xs text-gray-400 mt-1">Squat</div>
                  </div>
                )}
                {currentE1RMs.bench && (
                  <div className="text-center">
                    <div className="text-2xl font-bold text-cyan-400">{currentE1RMs.bench}</div>
                    <div className="text-xs text-gray-400 mt-1">Bench</div>
                  </div>
                )}
                {currentE1RMs.deadlift && (
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-400">{currentE1RMs.deadlift}</div>
                    <div className="text-xs text-gray-400 mt-1">Deadlift</div>
                  </div>
                )}
              </div>
              <p className="text-xs text-gray-400 mt-3 text-center">
                Based on your RPE and weights lifted today
              </p>
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white p-4 pb-24">
      <div className="max-w-md mx-auto">
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-2">
            <Dumbbell className="w-7 h-7 text-emerald-400" />
            <h1 className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              Block {currentBlock}
            </h1>
          </div>
          <p className="text-gray-400 text-sm">{blockName.split(': ')[1]}</p>
        </div>

        <div className="mb-6">
          <div className="flex items-center gap-2 mb-3">
            <Target className="w-5 h-5 text-emerald-400" />
            <h2 className="text-lg font-semibold">Block</h2>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {[1, 2, 3].map(block => (
              <button
                key={block}
                onClick={() => {
                  setCurrentBlock(block);
                  setCurrentWeek(1);
                }}
                className={`p-4 rounded-xl font-bold transition-all duration-300 ${
                  currentBlock === block
                    ? 'bg-gradient-to-br from-emerald-500 to-cyan-500 shadow-lg shadow-emerald-500/50 scale-105'
                    : 'bg-gray-800 hover:bg-gray-700 active:scale-95'
                }`}
              >
                <div className="text-lg">Block {block}</div>
                <div className="text-xs opacity-80 mt-1">
                  {block === 1 ? 'Accumulation' : block === 2 ? 'Intensification' : 'Peak'}
                </div>
              </button>
            ))}
          </div>
        </div>

        <div className="mb-6">
          <div className="flex items-center gap-2 mb-3">
            <Calendar className="w-5 h-5 text-emerald-400" />
            <h2 className="text-lg font-semibold">Week</h2>
          </div>
          <div className={`grid gap-2 ${maxWeek === 7 ? 'grid-cols-7' : maxWeek === 4 ? 'grid-cols-4' : 'grid-cols-3'}`}>
            {Array.from({ length: maxWeek }, (_, i) => i + 1).map(week => (
              <button
                key={week}
                onClick={() => setCurrentWeek(week)}
                className={`aspect-square rounded-xl font-bold transition-all duration-300 ${
                  currentWeek === week
                    ? 'bg-gradient-to-br from-emerald-500 to-cyan-500 shadow-lg shadow-emerald-500/50 scale-105'
                    : 'bg-gray-800 hover:bg-gray-700 active:scale-95'
                }`}
              >
                {week}
              </button>
            ))}
          </div>
          <p className="text-xs text-gray-400 mt-2">
            {workoutProgram[currentWeek]?.name}
          </p>
        </div>

        <div>
          <div className="flex items-center gap-2 mb-3">
            <Activity className="w-5 h-5 text-emerald-400" />
            <h2 className="text-lg font-semibold">Training Days</h2>
          </div>
          <div className="space-y-2">
            {Object.entries(workoutProgram[currentWeek]?.days || {}).map(([dayNum, day]) => {
              const progress = getDayProgress(currentBlock, currentWeek, parseInt(dayNum));
              const isComplete = progress === 100;
              
              return (
                <button
                  key={dayNum}
                  onClick={() => {
                    setCurrentDay(parseInt(dayNum));
                    setView('workout');
                  }}
                  className="w-full group relative bg-gray-800 hover:bg-gray-750 rounded-xl p-4 transition-all duration-300 active:scale-98"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center font-bold ${
                        isComplete 
                          ? 'bg-gradient-to-br from-emerald-500 to-cyan-500' 
                          : 'bg-gradient-to-br from-emerald-500/50 to-cyan-500/50'
                      }`}>
                        {isComplete ? <CheckCircle className="w-6 h-6" /> : dayNum}
                      </div>
                      <div className="text-left">
                        <h3 className="font-semibold text-sm">{day.name}</h3>
                        <p className="text-xs text-gray-400">
                          {day.exercises.length} exercises
                        </p>
                      </div>
                    </div>
                    <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-emerald-400 transition-colors" />
                  </div>
                  {progress > 0 && (
                    <div className="mt-2">
                      <div className="h-1 bg-gray-700 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-emerald-500 to-cyan-500 transition-all duration-500"
                          style={{ width: `${progress}%` }}
                        />
                      </div>
                    </div>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 bg-gray-900 border-t border-gray-800 px-4 py-3 safe-area-bottom">
        <div className="max-w-md mx-auto flex gap-2">
          <button
            className="flex-1 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 flex items-center justify-center gap-2"
          >
            <Calendar className="w-5 h-5" />
            <span className="text-sm font-medium">Program</span>
          </button>
          <button
            onClick={() => setView('stats')}
            className="flex-1 py-3 rounded-xl bg-gray-800 hover:bg-gray-700 transition-colors flex items-center justify-center gap-2"
          >
            <BarChart3 className="w-5 h-5" />
            <span className="text-sm font-medium">Stats</span>
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes bounce-in {
          0% { transform: scale(0); }
          50% { transform: scale(1.2); }
          100% { transform: scale(1); }
        }
        .animate-bounce-in {
          animation: bounce-in 0.5s ease-out;
        }
        .active\\:scale-95:active {
          transform: scale(0.95);
        }
        .active\\:scale-98:active {
          transform: scale(0.98);
        }
        .safe-area-bottom {
          padding-bottom: env(safe-area-inset-bottom);
        }
      `}</style>
    </div>
  );
};

export default WorkoutTracker;