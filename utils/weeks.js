const getWeeks = ({ squatMax, benchMax, deadliftMax }) => ({
  week1: {
    day1: {
      exercise1: {
        name: "Competition Squat",
        sets: 4,
        reps: 7,
        intensity: 0.67,
        load: Math.round(squatMax * 0.67),
        rpe: null
      },
      exercise2: {
        name: "Paused Bench",
        sets: 4,
        reps: 7,
        intensity: 0.67,
        load: Math.round(benchMax * 0.67),
        rpe: null
      },
      exercise3: {
        name: "Overhead Press",
        sets: 3,
        reps: 8,
        intensity: null,
        load: null,
        rpe: null
      },
      exercise4: {
        name: "Bent Over Row",
        sets: 3,
        reps: 12,
        intensity: null,
        load: null,
        rpe: null
      },
      exercise5: {
        name: "GHR Back Extensions",
        sets: 4,
        reps: 12,
        intensity: null,
        load: null,
        rpe: null
      }
    },
    day2: {
      exercise1: {
        name: "Competition Deadlift",
        sets: 4,
        reps: 7,
        intensity: 0.67,
        load: Math.round(deadliftMax * 0.67),
        rpe: null
      },
      exercise2: {
        name: "3ct Pause Bench",
        sets: 3,
        reps: 5,
        intensity: 0.6,
        load: Math.round(benchMax * 0.6),
        rpe: null
      },
      exercise3: {
        name: "SSB or Front or High Bar Pause Squat",
        sets: 3,
        reps: 5,
        intensity: null,
        load: null,
        rpe: 8
      },
      exercise4: {
        name: "Wide Grip Seated Row",
        sets: 5,
        reps: 8,
        intensity: null,
        load: null,
        rpe: null
      }
    },
    day3: {
      exercise1: {
        name: "Pin Squat",
        sets: 3,
        reps: 6,
        intensity: 0.65,
        load: Math.round(squatMax * 0.65),
        rpe: null
      },
      exercise2: {
        name: "2Board Press",
        sets: 3,
        reps: 6,
        intensity: null,
        load: null,
        rpe: 8
      },
      exercise3: {
        name: "1-Arm DB Rows",
        sets: 5,
        reps: 10,
        intensity: null,
        load: null,
        rpe: null
      },
      exercise4: {
        name: "Birddogs",
        sets: 3,
        reps: 6,
        intensity: null,
        load: null,
        rpe: null
      }
    },
    day4: {
      exercise1: {
        name: "2ct Pause Deadlift",
        sets: 3,
        reps: 6,
        intensity: 0.63,
        load: Math.round(deadliftMax * 0.63),
        rpe: null
      },
      exercise2: {
        name: "Rep Bench (Touch and Go)",
        sets: 4,
        reps: 10,
        intensity: 0.63,
        load: Math.round(benchMax * 0.63),
        rpe: null
      },
      exercise3: {
        name: "SLDL",
        sets: 3,
        reps: 8,
        intensity: 0.4,
        load: Math.round(deadliftMax * 0.4),
        rpe: null
      },
      exercise4: {
        name: "Vertical Pull of choice",
        sets: 4,
        reps: 10,
        intensity: null,
        load: null,
        rpe: null
      },
      exercise5: {
        name: "Tricep movement of choice",
        sets: 4,
        reps: 10,
        intensity: null,
        load: null,
        rpe: null
      }
    }
  },
  week2: {
    day1: {
      exercise1: {
        name: "Competition Squat",
        sets: 4,
        reps: 6,
        intensity: 0.7,
        load: Math.round(squatMax * 0.7),
        rpe: null
      },
      exercise2: {
        name: "Paused Bench",
        sets: 4,
        reps: 6,
        intensity: 0.7,
        load: Math.round(benchMax * 0.7),
        rpe: null
      },
      exercise3: {
        name: "Overhead Press",
        sets: 3,
        reps: 8,
        intensity: null,
        load: null,
        rpe: null
      },
      exercise4: {
        name: "Bent Over Row",
        sets: 3,
        reps: 12,
        intensity: null,
        load: null,
        rpe: null
      },
      exercise5: {
        name: "GHR Back Extensions",
        sets: 4,
        reps: 12,
        intensity: null,
        load: null,
        rpe: null
      }
    },
    day2: {
      exercise1: {
        name: "Competition Deadlift",
        sets: 4,
        reps: 6,
        intensity: 0.7,
        load: Math.round(deadliftMax * 0.7),
        rpe: null
      },
      exercise2: {
        name: "3ct Pause Bench",
        sets: 3,
        reps: 6,
        intensity: 0.6,
        load: Math.round(benchMax * 0.6),
        rpe: null
      },
      exercise3: {
        name: "SSB or Front or High Bar Pause Squat",
        sets: 3,
        reps: 6,
        intensity: null,
        load: null,
        rpe: 8
      },
      exercise4: {
        name: "Wide Grip Seated Row",
        sets: 5,
        reps: 8,
        intensity: null,
        load: null,
        rpe: null
      }
    },
    day3: {
      exercise1: {
        name: "Pin Squat",
        sets: 3,
        reps: 5,
        intensity: 0.7,
        load: Math.round(squatMax * 0.7),
        rpe: null
      },
      exercise2: {
        name: "2Board Press",
        sets: 3,
        reps: 5,
        intensity: null,
        load: null,
        rpe: 8
      },
      exercise3: {
        name: "1-Arm DB Rows",
        sets: 5,
        reps: 10,
        intensity: null,
        load: null,
        rpe: null
      },
      exercise4: {
        name: "Birddogs",
        sets: 3,
        reps: 6,
        intensity: null,
        load: null,
        rpe: null
      }
    },
    day4: {
      exercise1: {
        name: "2ct Pause Deadlift",
        sets: 3,
        reps: 5,
        intensity: 0.65,
        load: Math.round(deadliftMax * 0.65),
        rpe: null
      },
      exercise2: {
        name: "Rep Bench (Touch and Go)",
        sets: 4,
        reps: 10,
        intensity: 0.65,
        load: Math.round(benchMax * 0.65),
        rpe: null
      },
      exercise3: {
        name: "SLDL",
        sets: 3,
        reps: 8,
        intensity: 0.43,
        load: Math.round(deadliftMax * 0.43),
        rpe: null
      },
      exercise4: {
        name: "Vertical Pull of choice",
        sets: 4,
        reps: 10,
        intensity: null,
        load: null,
        rpe: null
      },
      exercise5: {
        name: "Tricep movement of choice",
        sets: 4,
        reps: 10,
        intensity: null,
        load: null,
        rpe: null
      }
    }
  },
  week3: {
    day1: {
      exercise1: {
        name: "Competition Squat",
        sets: 4,
        reps: 6,
        intensity: 0.73,
        load: Math.round(squatMax * 0.73),
        rpe: null
      },
      exercise2: {
        name: "Paused Bench",
        sets: 4,
        reps: 6,
        intensity: 0.73,
        load: Math.round(benchMax * 0.73),
        rpe: null
      },
      exercise3: {
        name: "Overhead Press",
        sets: 3,
        reps: 7,
        intensity: null,
        load: null,
        rpe: null
      },
      exercise4: {
        name: "Bent Over Row",
        sets: 3,
        reps: 8,
        intensity: null,
        load: null,
        rpe: null
      },
      exercise5: {
        name: "GHR Back Extensions",
        sets: 5,
        reps: 10,
        intensity: null,
        load: null,
        rpe: null
      }
    },
    day2: {
      exercise1: {
        name: "Competition Deadlift",
        sets: 4,
        reps: 6,
        intensity: 0.73,
        load: Math.round(deadliftMax * 0.73),
        rpe: null
      },
      exercise2: {
        name: "3ct Pause Bench",
        sets: 3,
        reps: 4,
        intensity: 0.65,
        load: Math.round(benchMax * 0.65),
        rpe: null
      },
      exercise3: {
        name: "SSB or Front or High Bar Pause Squat",
        sets: 3,
        reps: 4,
        intensity: null,
        load: null,
        rpe: 8
      },
      exercise4: {
        name: "Wide Grip Seated Row",
        sets: 5,
        reps: 8,
        intensity: null,
        load: null,
        rpe: null
      }
    },
    day3: {
      exercise1: {
        name: "Pin Squat",
        sets: 3,
        reps: 6,
        intensity: 0.68,
        load: Math.round(squatMax * 0.68),
        rpe: null
      },
      exercise2: {
        name: "2Board Press",
        sets: 3,
        reps: 4,
        intensity: null,
        load: null,
        rpe: 8
      },
      exercise3: {
        name: "1-Arm DB Rows",
        sets: 5,
        reps: 8,
        intensity: null,
        load: null,
        rpe: null
      },
      exercise4: {
        name: "Birddogs",
        sets: 3,
        reps: 8,
        intensity: null,
        load: null,
        rpe: null
      }
    },
    day4: {
      exercise1: {
        name: "2ct Pause Deadlift",
        sets: 3,
        reps: 6,
        intensity: 0.68,
        load: Math.round(deadliftMax * 0.68),
        rpe: null
      },
      exercise2: {
        name: "Rep Bench (Touch and Go)",
        sets: 4,
        reps: 10,
        intensity: 0.68,
        load: Math.round(benchMax * 0.68),
        rpe: null
      },
      exercise3: {
        name: "SLDL",
        sets: 3,
        reps: 6,
        intensity: 0.45,
        load: Math.round(deadliftMax * 0.45),
        rpe: null
      },
      exercise4: {
        name: "Vertical Pull of choice",
        sets: 4,
        reps: 8,
        intensity: null,
        load: null,
        rpe: null
      },
      exercise5: {
        name: "Tricep movement of choice",
        sets: 4,
        reps: 8,
        intensity: null,
        load: null,
        rpe: null
      }
    }
  },
  week4: {
    day1: {
      exercise1: {
        name: "Competition Squat",
        sets: 5,
        reps: 5,
        intensity: 0.75,
        load: Math.round(squatMax * 0.75),
        rpe: null
      },
      exercise2: {
        name: "Paused Bench",
        sets: 5,
        reps: 5,
        intensity: 0.75,
        load: Math.round(benchMax * 0.75),
        rpe: null
      },
      exercise3: {
        name: "Overhead Press",
        sets: 3,
        reps: 7,
        intensity: null,
        load: null,
        rpe: null
      },
      exercise4: {
        name: "Bent Over Row",
        sets: 3,
        reps: 8,
        intensity: null,
        load: null,
        rpe: null
      },
      exercise5: {
        name: "GHR Back Extensions",
        sets: 5,
        reps: 10,
        intensity: null,
        load: null,
        rpe: null
      }
    },
    day2: {
      exercise1: {
        name: "Competition Deadlift",
        sets: 5,
        reps: 5,
        intensity: 0.75,
        load: Math.round(deadliftMax * 0.75),
        rpe: null
      },
      exercise2: {
        name: "3ct Pause Bench",
        sets: 3,
        reps: 3,
        intensity: 0.7,
        load: Math.round(benchMax * 0.7),
        rpe: null
      },
      exercise3: {
        name: "SSB or Front or High Bar Pause Squat",
        sets: 3,
        reps: 5,
        intensity: null,
        load: null,
        rpe: 8
      },
      exercise4: {
        name: "Wide Grip Seated Row",
        sets: 4,
        reps: 8,
        intensity: null,
        load: null,
        rpe: null
      }
    },
    day3: {
      exercise1: {
        name: "Pin Squat",
        sets: 3,
        reps: 5,
        intensity: 0.73,
        load: Math.round(squatMax * 0.73),
        rpe: null
      },
      exercise2: {
        name: "2Board Press",
        sets: 3,
        reps: 6,
        intensity: null,
        load: null,
        rpe: 8
      },
      exercise3: {
        name: "1-Arm DB Rows",
        sets: 5,
        reps: 8,
        intensity: null,
        load: null,
        rpe: null
      },
      exercise4: {
        name: "Birddogs",
        sets: 4,
        reps: 8,
        intensity: null,
        load: null,
        rpe: null
      }
    },
    day4: {
      exercise1: {
        name: "2ct Pause Deadlift",
        sets: 3,
        reps: 5,
        intensity: 0.73,
        load: Math.round(deadliftMax * 0.73),
        rpe: null
      },
      exercise2: {
        name: "Rep Bench (Touch and Go)",
        sets: 4,
        reps: 8,
        intensity: 0.7,
        load: Math.round(benchMax * 0.7),
        rpe: null
      },
      exercise3: {
        name: "SLDL",
        sets: 3,
        reps: 6,
        intensity: 0.48,
        load: Math.round(deadliftMax * 0.48),
        rpe: null
      },
      exercise4: {
        name: "Vertical Pull of choice",
        sets: 4,
        reps: 8,
        intensity: null,
        load: null,
        rpe: null
      },
      exercise5: {
        name: "Tricep movement of choice",
        sets: 4,
        reps: 8,
        intensity: null,
        load: null,
        rpe: null
      }
    }
  },
  week5: {
    day1: {
      exercise1: {
        name: "Competition Squat",
        sets: 3,
        reps: 3,
        intensity: 0.8,
        load: Math.round(squatMax * 0.8),
        rpe: null
      },
      exercise2: {
        name: "Competition Squat",
        sets: 2,
        reps: 5,
        intensity: 0.68,
        load: Math.round(squatMax * 0.68),
        rpe: null
      },
      exercise3: {
        name: "Competition Pause Bench",
        sets: 4,
        reps: 3,
        intensity: 0.8,
        load: Math.round(benchMax * 0.8),
        rpe: null
      },
      exercise4: {
        name: "Competition Pause Bench",
        sets: 2,
        reps: 5,
        intensity: 0.68,
        load: Math.round(benchMax * 0.68),
        rpe: null
      },
      exercise5: {
        name: "SLDL",
        sets: 4,
        reps: 9,
        intensity: null,
        load: null,
        rpe: 8
      },
      exercise6: {
        name: "Side Planks (seconds per side)",
        sets: 3,
        reps: "30s",
        intensity: null,
        load: null,
        rpe: null
      }
    },
    day2: {
      exercise1: {
        name: "Competition Deadlift",
        sets: 3,
        reps: 3,
        intensity: 0.8,
        load: Math.round(deadliftMax * 0.8),
        rpe: null
      },
      exercise2: {
        name: "Competition Deadlift",
        sets: 2,
        reps: 5,
        intensity: 0.68,
        load: Math.round(deadliftMax * 0.68),
        rpe: null
      },
      exercise3: {
        name: "2ct Pause Bench",
        sets: 3,
        reps: 4,
        intensity: null,
        load: null,
        rpe: 8
      },
      exercise4: {
        name: "Competition Squat",
        sets: 2,
        reps: 5,
        intensity: 0.65,
        load: Math.round(squatMax * 0.65),
        rpe: null
      },
      exercise5: {
        name: "Wide Grip Seated Row",
        sets: 4,
        reps: 10,
        intensity: null,
        load: null,
        rpe: null
      }
    },
    day3: {
      exercise1: {
        name: "2ct Pause Squat",
        sets: 4,
        reps: 4,
        intensity: null,
        load: null,
        rpe: 8
      },
      exercise2: {
        name: "Competition Pause Bench",
        sets: 6,
        reps: 5,
        intensity: 0.7,
        load: Math.round(benchMax * 0.7),
        rpe: null
      },
      exercise3: {
        name: "Feet Up Bench",
        sets: 4,
        reps: 5,
        intensity: null,
        load: null,
        rpe: 8
      },
      exercise4: {
        name: "Competition Deadlift",
        sets: 2,
        reps: 5,
        intensity: 0.65,
        load: Math.round(deadliftMax * 0.65),
        rpe: null
      },
      exercise5: {
        name: "Vertical Pull of choice",
        sets: 4,
        reps: 10,
        intensity: null,
        load: null,
        rpe: null
      }
    },
    day4: {
      exercise1: {
        name: "2ct Pause Deadlifts",
        sets: 4,
        reps: 4,
        intensity: null,
        load: null,
        rpe: 8
      },
      exercise2: {
        name: "Touch and Go Bench",
        sets: 3,
        reps: 6,
        intensity: null,
        load: null,
        rpe: 9
      },
      exercise3: {
        name: "Close Grip Incline Press",
        sets: 4,
        reps: 8,
        intensity: null,
        load: null,
        rpe: null
      },
      exercise4: {
        name: "1-Arm DB Rows",
        sets: 6,
        reps: 10,
        intensity: null,
        load: null,
        rpe: null
      }
    }
  },
  week6: {
    day1: {
      exercise1: {
        name: "Competition Squat",
        sets: 4,
        reps: 3,
        intensity: 0.82,
        load: Math.round(squatMax * 0.82),
        rpe: null
      },
      exercise2: {
        name: "Competition Squat",
        sets: 2,
        reps: 5,
        intensity: 0.7,
        load: Math.round(squatMax * 0.7),
        rpe: null
      },
      exercise3: {
        name: "Competition Pause Bench",
        sets: 5,
        reps: 3,
        intensity: 0.82,
        load: Math.round(benchMax * 0.82),
        rpe: null
      },
      exercise4: {
        name: "Competition Pause Bench",
        sets: 3,
        reps: 5,
        intensity: 0.7,
        load: Math.round(benchMax * 0.7),
        rpe: null
      },
      exercise5: {
        name: "SLDL",
        sets: 4,
        reps: 8,
        intensity: null,
        load: null,
        rpe: 8
      },
      exercise6: {
        name: "Side Planks (seconds per side)",
        sets: 4,
        reps: "30s",
        intensity: null,
        load: null,
        rpe: null
      }
    },
    day2: {
      exercise1: {
        name: "Competition Deadlift",
        sets: 4,
        reps: 3,
        intensity: 0.82,
        load: Math.round(deadliftMax * 0.82),
        rpe: null
      },
      exercise2: {
        name: "Competition Deadlift",
        sets: 2,
        reps: 5,
        intensity: 0.7,
        load: Math.round(deadliftMax * 0.7),
        rpe: null
      },
      exercise3: {
        name: "2ct Pause Bench",
        sets: 4,
        reps: 3,
        intensity: null,
        load: null,
        rpe: 8
      },
      exercise4: {
        name: "Competition Squat",
        sets: 3,
        reps: 5,
        intensity: 0.68,
        load: Math.round(squatMax * 0.68),
        rpe: null
      },
      exercise5: {
        name: "Wide Grip Seated Row",
        sets: 4,
        reps: 10,
        intensity: null,
        load: null,
        rpe: null
      }
    },
    day3: {
      exercise1: {
        name: "2ct Pause Squat",
        sets: 5,
        reps: 3,
        intensity: null,
        load: null,
        rpe: 8
      },
      exercise2: {
        name: "Competition Pause Bench",
        sets: 6,
        reps: 4,
        intensity: 0.73,
        load: Math.round(benchMax * 0.73),
        rpe: null
      },
      exercise3: {
        name: "Feet Up Bench",
        sets: 3,
        reps: 4,
        intensity: null,
        load: null,
        rpe: 8
      },
      exercise4: {
        name: "Competition Deadlift",
        sets: 3,
        reps: 5,
        intensity: 0.68,
        load: Math.round(deadliftMax * 0.68),
        rpe: null
      },
      exercise5: {
        name: "Vertical Pull of choice",
        sets: 4,
        reps: 10,
        intensity: null,
        load: null,
        rpe: null
      }
    },
    day4: {
      exercise1: {
        name: "2ct Pause Deadlifts",
        sets: 5,
        reps: 3,
        intensity: null,
        load: null,
        rpe: 8
      },
      exercise2: {
        name: "Touch and Go Bench",
        sets: 3,
        reps: 12,
        intensity: null,
        load: null,
        rpe: 10
      },
      exercise3: {
        name: "Close Grip Incline Press",
        sets: 4,
        reps: 7,
        intensity: null,
        load: null,
        rpe: null
      },
      exercise4: {
        name: "1-Arm DB Rows",
        sets: 6,
        reps: 10,
        intensity: null,
        load: null,
        rpe: null
      }
    }
  },
  week7: {
    day1: {
      exercise1: {
        name: "Competition Squat",
        sets: 5,
        reps: 2,
        intensity: 0.86,
        load: Math.round(squatMax * 0.86),
        rpe: null
      },
      exercise2: {
        name: "Competition Squat",
        sets: 2,
        reps: 4,
        intensity: 0.72,
        load: Math.round(squatMax * 0.72),
        rpe: null
      },
      exercise3: {
        name: "Competition Pause Bench",
        sets: 5,
        reps: 2,
        intensity: 0.86,
        load: Math.round(benchMax * 0.86),
        rpe: null
      },
      exercise4: {
        name: "Competition Pause Bench",
        sets: 2,
        reps: 4,
        intensity: 0.72,
        load: Math.round(benchMax * 0.72),
        rpe: null
      },
      exercise5: {
        name: "SLDL",
        sets: 4,
        reps: 8,
        intensity: null,
        load: null,
        rpe: 8
      },
      exercise6: {
        name: "Side Planks (seconds per side)",
        sets: 4,
        reps: "45s",
        intensity: null,
        load: null,
        rpe: null
      }
    },
    day2: {
      exercise1: {
        name: "Competition Deadlift",
        sets: 5,
        reps: 2,
        intensity: 0.86,
        load: Math.round(deadliftMax * 0.86),
        rpe: null
      },
      exercise2: {
        name: "Competition Deadlift",
        sets: 2,
        reps: 4,
        intensity: 0.72,
        load: Math.round(deadliftMax * 0.72),
        rpe: null
      },
      exercise3: {
        name: "2ct Pause Bench",
        sets: 3,
        reps: 3,
        intensity: null,
        load: null,
        rpe: 8
      },
      exercise4: {
        name: "Competition Squat",
        sets: 2,
        reps: 5,
        intensity: 0.71,
        load: Math.round(squatMax * 0.71),
        rpe: null
      },
      exercise5: {
        name: "Wide Grip Seated Row",
        sets: 4,
        reps: 8,
        intensity: null,
        load: null,
        rpe: null
      }
    },
    day3: {
      exercise1: {
        name: "2ct Pause Squat",
        sets: 4,
        reps: 5,
        intensity: null,
        load: null,
        rpe: 9
      },
      exercise2: {
        name: "Competition Pause Bench",
        sets: 6,
        reps: 3,
        intensity: 0.75,
        load: Math.round(benchMax * 0.75),
        rpe: null
      },
      exercise3: {
        name: "Feet Up Bench",
        sets: 4,
        reps: 3,
        intensity: null,
        load: null,
        rpe: 8
      },
      exercise4: {
        name: "Competition Deadlift",
        sets: 2,
        reps: 5,
        intensity: 0.71,
        load: Math.round(deadliftMax * 0.71),
        rpe: null
      },
      exercise5: {
        name: "Vertical Pull of choice",
        sets: 4,
        reps: 8,
        intensity: null,
        load: null,
        rpe: null
      }
    },
    day4: {
      exercise1: {
        name: "2ct Pause Deadlifts",
        sets: 4,
        reps: 5,
        intensity: null,
        load: null,
        rpe: 8
      },
      exercise2: {
        name: "Touch and Go Bench",
        sets: 4,
        reps: 7,
        intensity: null,
        load: null,
        rpe: 8
      },
      exercise3: {
        name: "Close Grip Incline Press",
        sets: 5,
        reps: 6,
        intensity: null,
        load: null,
        rpe: null
      },
      exercise4: {
        name: "1-Arm DB Rows",
        sets: 6,
        reps: 8,
        intensity: null,
        load: null,
        rpe: null
      }
    }
  },
  week8: {
    day1: {
      exercise1: {
        name: "Competition Squat",
        sets: 4,
        reps: 3,
        intensity: 0.85,
        load: Math.round(squatMax * 0.85),
        rpe: null
      },
      exercise2: {
        name: "Competition Squat",
        sets: 3,
        reps: 4,
        intensity: 0.75,
        load: Math.round(squatMax * 0.75),
        rpe: null
      },
      exercise3: {
        name: "Competition Pause Bench",
        sets: 5,
        reps: 3,
        intensity: 0.85,
        load: Math.round(benchMax * 0.85),
        rpe: null
      },
      exercise4: {
        name: "Competition Pause Bench",
        sets: 3,
        reps: 4,
        intensity: 0.75,
        load: Math.round(benchMax * 0.75),
        rpe: null
      },
      exercise5: {
        name: "SLDL",
        sets: 4,
        reps: 7,
        intensity: null,
        load: null,
        rpe: 8
      },
      exercise6: {
        name: "Side Planks (seconds per side)",
        sets: 4,
        reps: "45s",
        intensity: null,
        load: null,
        rpe: null
      }
    },
    day2: {
      exercise1: {
        name: "Competition Deadlift",
        sets: 4,
        reps: 3,
        intensity: 0.85,
        load: Math.round(deadliftMax * 0.85),
        rpe: null
      },
      exercise2: {
        name: "Competition Deadlift",
        sets: 3,
        reps: 4,
        intensity: 0.75,
        load: Math.round(deadliftMax * 0.75),
        rpe: null
      },
      exercise3: {
        name: "2ct Pause Bench",
        sets: 4,
        reps: 4,
        intensity: null,
        load: null,
        rpe: 8
      },
      exercise4: {
        name: "Competition Squat",
        sets: 2,
        reps: 4,
        intensity: 0.74,
        load: Math.round(squatMax * 0.74),
        rpe: null
      },
      exercise5: {
        name: "Wide Grip Seated Row",
        sets: 4,
        reps: 8,
        intensity: null,
        load: null,
        rpe: null
      }
    },
    day3: {
      exercise1: {
        name: "2ct Pause Squat",
        sets: 4,
        reps: 2,
        intensity: null,
        load: null,
        rpe: 9
      },
      exercise2: {
        name: "Competition Pause Bench",
        sets: 6,
        reps: 5,
        intensity: 0.68,
        load: Math.round(benchMax * 0.68),
        rpe: null
      },
      exercise3: {
        name: "Feet Up Bench",
        sets: 4,
        reps: 4,
        intensity: null,
        load: null,
        rpe: 8
      },
      exercise4: {
        name: "Competition Deadlift",
        sets: 2,
        reps: 4,
        intensity: 0.74,
        load: Math.round(deadliftMax * 0.74),
        rpe: null
      },
      exercise5: {
        name: "Vertical Pull of choice",
        sets: 4,
        reps: 8,
        intensity: null,
        load: null,
        rpe: null
      }
    },
    day4: {
      exercise1: {
        name: "2ct Pause Deadlifts",
        sets: 4,
        reps: 2,
        intensity: null,
        load: null,
        rpe: 9
      },
      exercise2: {
        name: "Touch and Go Bench",
        sets: 4,
        reps: 5,
        intensity: null,
        load: null,
        rpe: 8
      },
      exercise3: {
        name: "Close Grip Incline Press",
        sets: 4,
        reps: 10,
        intensity: null,
        load: null,
        rpe: null
      },
      exercise4: {
        name: "1-Arm DB Rows",
        sets: 6,
        reps: 8,
        intensity: null,
        load: null,
        rpe: null
      }
    }
  },
  week9: {
    day1: {
      exercise1: {
        name: "Competition Squat",
        sets: 5,
        reps: 4,
        intensity: 0.82,
        load: Math.round(squatMax * 0.82),
        rpe: null
      },
      exercise2: {
        name: "Competition Squat",
        sets: 2,
        reps: 4,
        intensity: 0.71,
        load: Math.round(squatMax * 0.71),
        rpe: null
      },
      exercise3: {
        name: "Competition Pause Bench",
        sets: 6,
        reps: 4,
        intensity: 0.82,
        load: Math.round(benchMax * 0.82),
        rpe: null
      },
      exercise4: {
        name: "Competition Pause Bench",
        sets: 2,
        reps: 4,
        intensity: 0.71,
        load: Math.round(benchMax * 0.71),
        rpe: null
      },
      exercise5: {
        name: "Bent Over Row",
        sets: 4,
        reps: 8,
        intensity: null,
        load: null,
        rpe: 8
      },
      exercise6: {
        name: "Rolling Planks",
        sets: 3,
        reps: 20,
        intensity: null,
        load: null,
        rpe: null
      }
    },
    day2: {
      exercise1: {
        name: "Competition Deadlift",
        sets: 4,
        reps: 4,
        intensity: 0.82,
        load: Math.round(deadliftMax * 0.82),
        rpe: null
      },
      exercise2: {
        name: "Competition Deadlift",
        sets: 2,
        reps: 4,
        intensity: 0.71,
        load: Math.round(deadliftMax * 0.71),
        rpe: null
      },
      exercise3: {
        name: "Pin Press (chest level)",
        sets: 4,
        reps: 4,
        intensity: null,
        load: null,
        rpe: 8
      },
      exercise4: {
        name: "Competition Squat",
        sets: 3,
        reps: 5,
        intensity: 0.68,
        load: Math.round(squatMax * 0.68),
        rpe: null
      },
      exercise5: {
        name: "Wide Grip Seated Row",
        sets: 4,
        reps: 8,
        intensity: null,
        load: null,
        rpe: null
      }
    },
    day3: {
      exercise1: {
        name: "2ct Pause Squats",
        sets: 3,
        reps: 4,
        intensity: null,
        load: null,
        rpe: 9
      },
      exercise2: {
        name: "Competition Pause Bench",
        sets: 6,
        reps: 5,
        intensity: 0.72,
        load: Math.round(benchMax * 0.72),
        rpe: null
      },
      exercise3: {
        name: "Close Grip Bench Press",
        sets: 3,
        reps: 4,
        intensity: null,
        load: null,
        rpe: 8
      },
      exercise4: {
        name: "Competition Deadlift",
        sets: 2,
        reps: 5,
        intensity: 0.68,
        load: Math.round(deadliftMax * 0.68),
        rpe: null
      },
      exercise5: {
        name: "Vertical Pull of choice",
        sets: 4,
        reps: 8,
        intensity: null,
        load: null,
        rpe: null
      }
    },
    day4: {
      exercise1: {
        name: "2ct Pause Deadlifts",
        sets: 3,
        reps: 4,
        intensity: null,
        load: null,
        rpe: 9
      },
      exercise2: {
        name: "Bench + mini bands",
        sets: 2,
        reps: 8,
        intensity: null,
        load: null,
        rpe: 9
      },
      exercise3: {
        name: "Barbell Overhead Press",
        sets: 4,
        reps: 7,
        intensity: null,
        load: null,
        rpe: 8
      },
      exercise4: {
        name: "1-Arm DB Rows",
        sets: 5,
        reps: 8,
        intensity: null,
        load: null,
        rpe: null
      }
    }
  },
  week10: {
    day1: {
      exercise1: {
        name: "Competition Squat",
        sets: 6,
        reps: 3,
        intensity: 0.85,
        load: Math.round(squatMax * 0.85),
        rpe: null
      },
      exercise2: {
        name: "Competition Squat",
        sets: 2,
        reps: 4,
        intensity: 0.74,
        load: Math.round(squatMax * 0.74),
        rpe: null
      },
      exercise3: {
        name: "Competition Pause Bench",
        sets: 7,
        reps: 4,
        intensity: 0.85,
        load: Math.round(benchMax * 0.85),
        rpe: null
      },
      exercise4: {
        name: "Competition Pause Bench",
        sets: 2,
        reps: 4,
        intensity: 0.74,
        load: Math.round(benchMax * 0.74),
        rpe: null
      },
      exercise5: {
        name: "Bent Over Row",
        sets: 4,
        reps: 6,
        intensity: null,
        load: null,
        rpe: 8
      },
      exercise6: {
        name: "Rolling Planks",
        sets: 4,
        reps: 20,
        intensity: null,
        load: null,
        rpe: null
      }
    },
    day2: {
      exercise1: {
        name: "Competition Deadlift",
        sets: 5,
        reps: 3,
        intensity: 0.85,
        load: Math.round(deadliftMax * 0.85),
        rpe: null
      },
      exercise2: {
        name: "Competition Deadlift",
        sets: 2,
        reps: 4,
        intensity: 0.74,
        load: Math.round(deadliftMax * 0.74),
        rpe: null
      },
      exercise3: {
        name: "Pin Press (chest level)",
        sets: 4,
        reps: 5,
        intensity: null,
        load: null,
        rpe: 8
      },
      exercise4: {
        name: "Competition Squat",
        sets: 3,
        reps: 5,
        intensity: 0.71,
        load: Math.round(squatMax * 0.71),
        rpe: null
      },
      exercise5: {
        name: "Wide Grip Seated Row",
        sets: 4,
        reps: 8,
        intensity: null,
        load: null,
        rpe: null
      }
    },
    day3: {
      exercise1: {
        name: "2ct Pause Squats",
        sets: 4,
        reps: 2,
        intensity: null,
        load: null,
        rpe: 9
      },
      exercise2: {
        name: "Competition Pause Bench",
        sets: 6,
        reps: 4,
        intensity: 0.75,
        load: Math.round(benchMax * 0.75),
        rpe: null
      },
      exercise3: {
        name: "Close Grip Bench Press",
        sets: 2,
        reps: 3,
        intensity: null,
        load: null,
        rpe: 9
      },
      exercise4: {
        name: "Competition Deadlift",
        sets: 3,
        reps: 5,
        intensity: 0.71,
        load: Math.round(deadliftMax * 0.71),
        rpe: null
      },
      exercise5: {
        name: "Vertical Pull of choice",
        sets: 4,
        reps: 8,
        intensity: null,
        load: null,
        rpe: null
      }
    },
    day4: {
      exercise1: {
        name: "2ct Pause Deadlifts",
        sets: 4,
        reps: 2,
        intensity: null,
        load: null,
        rpe: 9
      },
      exercise2: {
        name: "Bench + mini bands",
        sets: 2,
        reps: 7,
        intensity: null,
        load: null,
        rpe: 9
      },
      exercise3: {
        name: "Barbell Overhead Press",
        sets: 3,
        reps: 8,
        intensity: null,
        load: null,
        rpe: 8
      },
      exercise4: {
        name: "1-Arm DB Rows",
        sets: 5,
        reps: 8,
        intensity: null,
        load: null,
        rpe: null
      }
    }
  },
  week11: {
    day1: {
      exercise1: {
        name: "Competition Squat",
        sets: 3,
        reps: 3,
        intensity: 0.83,
        load: Math.round(squatMax * 0.83),
        rpe: null
      },
      exercise2: {
        name: "Competition Squat",
        sets: 2,
        reps: 4,
        intensity: 0.76,
        load: Math.round(squatMax * 0.76),
        rpe: null
      },
      exercise3: {
        name: "Competition Pause Bench",
        sets: 3,
        reps: 3,
        intensity: 0.83,
        load: Math.round(benchMax * 0.83),
        rpe: null
      },
      exercise4: {
        name: "Competition Pause Bench",
        sets: 2,
        reps: 4,
        intensity: 0.76,
        load: Math.round(benchMax * 0.76),
        rpe: null
      },
      exercise5: {
        name: "Bent Over Row",
        sets: 4,
        reps: 5,
        intensity: null,
        load: null,
        rpe: 8
      },
      exercise6: {
        name: "Rolling Planks",
        sets: 4,
        reps: 24,
        intensity: null,
        load: null,
        rpe: null
      }
    },
    day2: {
      exercise1: {
        name: "Competition Deadlift",
        sets: 3,
        reps: 3,
        intensity: 0.83,
        load: Math.round(deadliftMax * 0.83),
        rpe: null
      },
      exercise2: {
        name: "Competition Deadlift",
        sets: 2,
        reps: 4,
        intensity: 0.76,
        load: Math.round(deadliftMax * 0.76),
        rpe: null
      },
      exercise3: {
        name: "Pin Press (chest level)",
        sets: 4,
        reps: 3,
        intensity: null,
        load: null,
        rpe: 8
      },
      exercise4: {
        name: "Competition Squat",
        sets: 3,
        reps: 4,
        intensity: 0.74,
        load: Math.round(squatMax * 0.74),
        rpe: null
      },
      exercise5: {
        name: "Wide Grip Seated Row",
        sets: 4,
        reps: 8,
        intensity: null,
        load: null,
        rpe: null
      }
    },
    day3: {
      exercise1: {
        name: "2ct Pause Squats",
        sets: 2,
        reps: 3,
        intensity: null,
        load: null,
        rpe: 8
      },
      exercise2: {
        name: "Competition Pause Bench",
        sets: 5,
        reps: 3,
        intensity: 0.78,
        load: Math.round(benchMax * 0.78),
        rpe: null
      },
      exercise3: {
        name: "Close Grip Bench Press",
        sets: 2,
        reps: 2,
        intensity: null,
        load: null,
        rpe: 8
      },
      exercise4: {
        name: "Competition Deadlift",
        sets: 3,
        reps: 4,
        intensity: 0.74,
        load: Math.round(deadliftMax * 0.74),
        rpe: null
      },
      exercise5: {
        name: "Vertical Pull of choice",
        sets: 4,
        reps: 8,
        intensity: null,
        load: null,
        rpe: null
      }
    },
    day4: {
      exercise1: {
        name: "2ct Pause Deadlifts",
        sets: 2,
        reps: 3,
        intensity: null,
        load: null,
        rpe: 8
      },
      exercise2: {
        name: "Bench + mini bands",
        sets: 2,
        reps: 6,
        intensity: null,
        load: null,
        rpe: 9
      },
      exercise3: {
        name: "Barbell Overhead Press",
        sets: 2,
        reps: 5,
        intensity: null,
        load: null,
        rpe: 8
      },
      exercise4: {
        name: "1-Arm DB Rows",
        sets: 5,
        reps: 8,
        intensity: null,
        load: null,
        rpe: null
      }
    }
  },
  week12: {
    day1: {
      exercise1: {
        name: "Competition Squat",
        sets: 3,
        reps: 8,
        intensity: null,
        load: null,
        rpe: 8
      },
      exercise2: {
        name: "Competition Squat (% of E1RM)",
        sets: 6,
        reps: 5,
        intensity: 0.65,
        load: Math.round(squatMax * 0.65),
        rpe: null
      },
      exercise3: {
        name: "Competition Pause Bench",
        sets: 3,
        reps: 8,
        intensity: null,
        load: null,
        rpe: 8
      },
      exercise4: {
        name: "Competition Pause Bench (% of E1RM)",
        sets: 7,
        reps: 5,
        intensity: 0.65,
        load: Math.round(benchMax * 0.65),
        rpe: null
      },
      exercise5: {
        name: "Overhead Press",
        sets: 8,
        reps: 6,
        intensity: null,
        load: null,
        rpe: 9
      }
    },
    day2: {
      exercise1: {
        name: "Competition Deadlift",
        sets: 3,
        reps: 8,
        intensity: null,
        load: null,
        rpe: 8
      },
      exercise2: {
        name: "Competition Deadlift (% of E1RM)",
        sets: 6,
        reps: 5,
        intensity: 0.65,
        load: Math.round(deadliftMax * 0.65),
        rpe: null
      },
      exercise3: {
        name: "2ct Pause Bench",
        sets: 6,
        reps: 4,
        intensity: null,
        load: null,
        rpe: 9
      },
      exercise4: {
        name: "High Bar Squat",
        sets: 6,
        reps: 4,
        intensity: null,
        load: null,
        rpe: 8
      }
    },
    day3: {
      exercise1: {
        name: "Pin Squat",
        sets: 3,
        reps: 8,
        intensity: null,
        load: null,
        rpe: 8
      },
      exercise2: {
        name: "Pin Squat",
        sets: 6,
        reps: 4,
        intensity: null,
        load: null,
        rpe: 9
      },
      exercise3: {
        name: "Close Grip Bench",
        sets: 5,
        reps: 3,
        intensity: null,
        load: null,
        rpe: 9
      },
      exercise4: {
        name: "Feet Up Bench",
        sets: 6,
        reps: 5,
        intensity: null,
        load: null,
        rpe: 9
      }
    },
    day4: {
      exercise1: {
        name: "2ct Pause Deadlifts",
        sets: 3,
        reps: 8,
        intensity: null,
        load: null,
        rpe: 8
      },
      exercise2: {
        name: "2ct Pause Deadlifts",
        sets: 7,
        reps: 5,
        intensity: null,
        load: null,
        rpe: 9
      },
      exercise3: {
        name: "Touch and Go Bench",
        sets: 8,
        reps: 5,
        intensity: null,
        load: null,
        rpe: 8
      }
    }
  },
  week13: {
    day1: {
      exercise1: {
        name: "Competition Squat",
        sets: 3,
        reps: 8,
        intensity: null,
        load: null,
        rpe: 8
      },
      exercise2: {
        name: "Competition Squat (% of E1RM)",
        sets: 6,
        reps: 5,
        intensity: 0.68,
        load: Math.round(squatMax * 0.68),
        rpe: null
      },
      exercise3: {
        name: "Competition Pause Bench",
        sets: 2,
        reps: 8,
        intensity: null,
        load: null,
        rpe: 8
      },
      exercise4: {
        name: "Competition Pause Bench (% of E1RM)",
        sets: 7,
        reps: 5,
        intensity: 0.68,
        load: Math.round(benchMax * 0.68),
        rpe: null
      },
      exercise5: {
        name: "Overhead Press",
        sets: 8,
        reps: 7,
        intensity: null,
        load: null,
        rpe: 9
      }
    },
    day2: {
      exercise1: {
        name: "Competition Deadlift",
        sets: 3,
        reps: 8,
        intensity: null,
        load: null,
        rpe: 8
      },
      exercise2: {
        name: "Competition Deadlift (% of E1RM)",
        sets: 6,
        reps: 5,
        intensity: 0.68,
        load: Math.round(deadliftMax * 0.68),
        rpe: null
      },
      exercise3: {
        name: "2ct Pause Bench",
        sets: 8,
        reps: 4,
        intensity: null,
        load: null,
        rpe: 8
      },
      exercise4: {
        name: "High Bar Squat",
        sets: 4,
        reps: 9,
        intensity: null,
        load: null,
        rpe: 8
      }
    },
    day3: {
      exercise1: {
        name: "Pin Squat",
        sets: 3,
        reps: 8,
        intensity: null,
        load: null,
        rpe: 8
      },
      exercise2: {
        name: "Pin Squat",
        sets: 6,
        reps: 5,
        intensity: null,
        load: null,
        rpe: 9
      },
      exercise3: {
        name: "Close Grip Bench",
        sets: 3,
        reps: 2,
        intensity: null,
        load: null,
        rpe: 9
      },
      exercise4: {
        name: "Feet Up Bench",
        sets: 7,
        reps: 6,
        intensity: null,
        load: null,
        rpe: 9
      }
    },
    day4: {
      exercise1: {
        name: "2ct Pause Deadlifts",
        sets: 3,
        reps: 8,
        intensity: null,
        load: null,
        rpe: 8
      },
      exercise2: {
        name: "2ct Pause Deadlifts",
        sets: 6,
        reps: 4,
        intensity: null,
        load: null,
        rpe: 8
      },
      exercise3: {
        name: "Touch and Go Bench",
        sets: 8,
        reps: 4,
        intensity: null,
        load: null,
        rpe: 8
      }
    }
  },
  week14: {
    day1: {
      exercise1: {
        name: "Competition Squat",
        sets: 1,
        reps: 8,
        intensity: null,
        load: null,
        rpe: 8
      },
      exercise2: {
        name: "Competition Squat (% of E1RM)",
        sets: 4,
        reps: 4,
        intensity: 0.72,
        load: Math.round(squatMax * 0.72),
        rpe: null
      },
      exercise3: {
        name: "Competition Pause Bench",
        sets: 1,
        reps: 9,
        intensity: null,
        load: null,
        rpe: 9
      },
      exercise4: {
        name: "Competition Pause Bench (% of E1RM)",
        sets: 5,
        reps: 4,
        intensity: 0.72,
        load: Math.round(benchMax * 0.72),
        rpe: null
      },
      exercise5: {
        name: "Overhead Press",
        sets: 8,
        reps: 6,
        intensity: null,
        load: null,
        rpe: 8
      }
    },
    day2: {
      exercise1: {
        name: "Competition Deadlift",
        sets: 1,
        reps: 8,
        intensity: null,
        load: null,
        rpe: 8
      },
      exercise2: {
        name: "Competition Deadlift (% of E1RM)",
        sets: 4,
        reps: 4,
        intensity: 0.72,
        load: Math.round(deadliftMax * 0.72),
        rpe: null
      },
      exercise3: {
        name: "2ct Pause Bench",
        sets: 3,
        reps: 2,
        intensity: null,
        load: null,
        rpe: 9
      },
      exercise4: {
        name: "High Bar Squat",
        sets: 6,
        reps: 4,
        intensity: null,
        load: null,
        rpe: 9
      }
    },
    day3: {
      exercise1: {
        name: "Pin Squat",
        sets: 1,
        reps: 8,
        intensity: null,
        load: null,
        rpe: 8
      },
      exercise2: {
        name: "Pin Squat",
        sets: 3,
        reps: 2,
        intensity: null,
        load: null,
        rpe: 9
      },
      exercise3: {
        name: "Close Grip Bench",
        sets: 5,
        reps: 3,
        intensity: null,
        load: null,
        rpe: 8
      },
      exercise4: {
        name: "Feet Up Bench",
        sets: 3,
        reps: 9,
        intensity: null,
        load: null,
        rpe: 9
      }
    },
    day4: {
      exercise1: {
        name: "2ct Pause Deadlifts",
        sets: 1,
        reps: 8,
        intensity: null,
        load: null,
        rpe: 8
      },
      exercise2: {
        name: "2ct Pause Deadlifts",
        sets: 4,
        reps: 2,
        intensity: null,
        load: null,
        rpe: 9
      },
      exercise3: {
        name: "Touch and Go Bench",
        sets: 4,
        reps: 3,
        intensity: null,
        load: null,
        rpe: 9
      }
    }
  },
  week15: {
    day1: {
      exercise1: {
        name: "Competition Squat",
        sets: 1,
        reps: 8,
        intensity: null,
        load: null,
        rpe: 8
      },
      exercise2: {
        name: "Competition Squat (% of E1RM)",
        sets: 3,
        reps: 3,
        intensity: 0.76,
        load: Math.round(squatMax * 0.76),
        rpe: null
      },
      exercise3: {
        name: "Competition Pause Bench",
        sets: 1,
        reps: 9,
        intensity: null,
        load: null,
        rpe: 9
      },
      exercise4: {
        name: "Competition Pause Bench (% of E1RM)",
        sets: 4,
        reps: 3,
        intensity: 0.76,
        load: Math.round(benchMax * 0.76),
        rpe: null
      },
      exercise5: {
        name: "Overhead Press",
        sets: 6,
        reps: 5,
        intensity: null,
        load: null,
        rpe: 9
      }
    },
    day2: {
      exercise1: {
        name: "Competition Deadlift",
        sets: 1,
        reps: 8,
        intensity: null,
        load: null,
        rpe: 8
      },
      exercise2: {
        name: "Competition Deadlift (% of E1RM)",
        sets: 3,
        reps: 3,
        intensity: 0.76,
        load: Math.round(deadliftMax * 0.76),
        rpe: null
      },
      exercise3: {
        name: "2ct Pause Bench",
        sets: 6,
        reps: 4,
        intensity: null,
        load: null,
        rpe: 8
      },
      exercise4: {
        name: "High Bar Squat",
        sets: 3,
        reps: 2,
        intensity: null,
        load: null,
        rpe: 8
      }
    },
    day3: {
      exercise1: {
        name: "Pin Squat",
        sets: 1,
        reps: 8,
        intensity: null,
        load: null,
        rpe: 8
      },
      exercise2: {
        name: "Pin Squat",
        sets: 6,
        reps: 4,
        intensity: null,
        load: null,
        rpe: 9
      },
      exercise3: {
        name: "Close Grip Bench",
        sets: 5,
        reps: 4,
        intensity: null,
        load: null,
        rpe: 9
      },
      exercise4: {
        name: "Feet Up Bench",
        sets: 5,
        reps: 4,
        intensity: null,
        load: null,
        rpe: 9
      }
    },
    day4: {
      exercise1: {
        name: "2ct Pause Deadlifts",
        sets: 2,
        reps: 1,
        intensity: null,
        load: null,
        rpe: 8
      },
      exercise2: {
        name: "2ct Pause Deadlifts",
        sets: 6,
        reps: 4,
        intensity: null,
        load: null,
        rpe: 9
      },
      exercise3: {
        name: "Touch and Go Bench",
        sets: 5,
        reps: 3,
        intensity: null,
        load: null,
        rpe: 9
      }
    }
  },
  week16: {
    day1: {
      exercise1: {
        name: "Competition Squat",
        sets: 1,
        reps: 1,
        intensity: null,
        load: "Opener",
        rpe: null
      },
      exercise2: {
        name: "Competition Squat",
        sets: 3,
        reps: 2,
        intensity: 0.82,
        load: 148,
        rpe: null
      },
      exercise3: {
        name: "Competition Pause Bench",
        sets: 1,
        reps: 1,
        intensity: null,
        load: "Opener",
        rpe: null
      },
      exercise4: {
        name: "Competition Pause Bench",
        sets: 3,
        reps: 2,
        intensity: 0.84,
        load: 80,
        rpe: null
      }
    },
    day2: {
      exercise1: {
        name: "Competition Deadlift",
        sets: 1,
        reps: 1,
        intensity: null,
        load: "Opener",
        rpe: null
      },
      exercise2: {
        name: "Competition Deadlift",
        sets: 2,
        reps: 2,
        intensity: 0.82,
        load: 165,
        rpe: null
      },
      exercise3: {
        name: "Competition Pause Bench",
        sets: 4,
        reps: 1,
        intensity: 0.85,
        load: 80,
        rpe: null
      }
    },
    day3: {
      exercise1: {
        name: "Competition Squat",
        sets: 1,
        reps: 1,
        intensity: 0.85,
        load: 153,
        rpe: null
      },
      exercise2: {
        name: "Competition Squat",
        sets: 2,
        reps: 2,
        intensity: 0.78,
        load: 140,
        rpe: null
      },
      exercise3: {
        name: "Competition Pause Bench",
        sets: 1,
        reps: 1,
        intensity: 0.85,
        load: 80,
        rpe: null
      },
      exercise4: {
        name: "Competition Pause Bench",
        sets: 3,
        reps: 2,
        intensity: 0.78,
        load: 75,
        rpe: null
      },
      exercise5: {
        name: "Competition Deadlift",
        sets: 1,
        reps: 1,
        intensity: 0.82,
        load: 165,
        rpe: null
      },
      exercise6: {
        name: "Competition Deadlift",
        sets: 2,
        reps: 2,
        intensity: 0.75,
        load: 150,
        rpe: null
      }
    },
    day4: {
      exercise1: {
        name: "Competition Squat",
        sets: 2,
        reps: 3,
        intensity: 0.75,
        load: 135,
        rpe: null
      },
      exercise2: {
        name: "Competition Pause Bench",
        sets: 3,
        reps: 3,
        intensity: 0.78,
        load: 75,
        rpe: null
      },
      exercise3: {
        name: "Competition Deadlift",
        sets: 1,
        reps: 3,
        intensity: 0.75,
        load: 150,
        rpe: null
      }
    }
  }
});

module.exports = getWeeks;
