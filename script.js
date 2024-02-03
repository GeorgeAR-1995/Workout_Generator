const bodyPart = 
["chest", "legs", "back", "arms", "rest", "stretch/cardio"]

const days = 
["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]

const exercise =
["bench press", "flys", "incline bench", "press ups", 
"squats", "box jumps","romanian deadlift", "deadlift", 
"barbell rows", "dumbell rows", "pullups", "deadlift", 
"chinups", "barbell curls", "hammer curls", "dumbell curls",
"upper body stretch","lower body stretch", "sprints", "10km", "5km"]

//get body part to work out
const bodyPartRandom = () => {       
    return bodyPart[(Math.floor(Math.random() * bodyPart.length))]
}

// Call the function to get a random body part
let workoutPlan = [];
    for (let dayIndex = [0]; dayIndex < days.length; dayIndex++){
        const randomBodyPart = bodyPartRandom();
            //get random exercises to do based on body part
            switch (randomBodyPart) {
                case "chest":
                // Code to execute if expression === value1
                let selectedChestExercises = [];
                for (let i = 0; i < 3; i++) {
                    let randomExercise;
                    do {
                    randomExercise = exercise[Math.floor(Math.random() * 4)]; // Randomly select an exercise
                    } while (selectedChestExercises.includes(randomExercise)); // Check if it's already included
                    selectedChestExercises.push(randomExercise); // Add it to the array
                }
                workoutPlan.push(selectedChestExercises);
                break;

                case "legs":
                let selectedLegExercises = [];
                for (let i = 0; i < 3; i++) {
                    let randomExercise;
                    do {
                    randomExercise = exercise[4 + Math.floor(Math.random() * 4)]; // Randomly select an exercise
                    } while (selectedLegExercises.includes(randomExercise)); // Check if it's already included
                    selectedLegExercises.push(randomExercise); // Add it to the array
                }
                workoutPlan.push(selectedLegExercises);
                break;

                case "back":
                // Code to execute if expression === value1
                let selectedBackExercises = [];
                for (let i = 0; i < 3; i++) {
                    let randomExercise;
                    do {
                    randomExercise = exercise[8 + Math.floor(Math.random() * 4)]; // Randomly select an exercise
                    } while (selectedBackExercises.includes(randomExercise)); // Check if it's already included
                    selectedBackExercises.push(randomExercise); // Add it to the array
                }
                workoutPlan.push(selectedBackExercises);
                break;

                case "arms":
                // Code to execute if expression === value2
                let selectedArmExercises = [];
                for (let i = 0; i < 3; i++) {
                    let randomExercise;
                    do {
                    randomExercise = exercise[12 + Math.floor(Math.random() * 4)]; // Randomly select an exercise
                    } while (selectedArmExercises.includes(randomExercise)); // Check if it's already included
                    selectedArmExercises.push(randomExercise); // Add it to the array
                }
                workoutPlan.push(selectedArmExercises);
                break;

                case "rest":
                //code
                workoutPlan.push("Have a day off to recover.")
                break;

                case "stretch/cardio":
                //code
                let selectedStretchCardioExercises = [];
                for (let i = 0; i < 2; i++) {
                    let randomExercise;
                    do {
                    randomExercise = exercise[16 + Math.floor(Math.random() * 5)]; // Randomly select an exercise
                    } while (selectedStretchCardioExercises.includes(randomExercise)); // Check if it's already included
                    selectedStretchCardioExercises.push(randomExercise); // Add it to the array
                }
                workoutPlan.push(selectedStretchCardioExercises);
                break;

                default:
                // Code to execute if expression doesn't match any case
                console.log("Something went wrong. We are trying to fix it.")
            }
        }

        
//get number of sets
const setFunction = () => {
    const minCeiled = Math.ceil(3);
    const maxFloored = Math.floor(7);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
}

//get number of reps
const repFunction = () => {
    const minCeiled = Math.ceil(5);
    const maxFloored = Math.floor(13);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
}

//loop to print Day: Exercises
for (k = 0; k < days.length; k++){
    if (workoutPlan[k] === "Have a day off to recover.")
     {
        console.log(days[k] + ": " + workoutPlan [k])
     } else {
    console.log(days[k] + ": " + workoutPlan[k] + " - " + setFunction() + " x " + repFunction() 
    + ", " + setFunction() + " x " + repFunction() + ", " + setFunction() + " x " + repFunction())
    }
}



