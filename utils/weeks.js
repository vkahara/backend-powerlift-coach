const { squatMax, benchMax, deadliftMax } = maxLifts;

const weeks = {
    week1: {
        day1: {
            exercise1: {
                name: "Competition Squat",
                sets: 4,
                reps: 7,
                intensity: 0.67,
                load: Math.round(squatMax * 0.67),
            },
            exercise2: {
                name: "Paused Bench",
                sets: 4,
                reps: 7,
                intensity: 0.67,
                load: null,
            },
            exercise3: {
                name: "Overhead Press",
                sets: 3,
                reps: 8,
                intensity: null,
                load: null,
            },
            exercise4: {
                name: "Bent Over Row"
            }
        },
    },

}
