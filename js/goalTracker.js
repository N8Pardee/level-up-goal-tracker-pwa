const goalText = "";
const goalPriority = 0;
const goalsInProgress = [];
const completedGoals = [];

class Goal{

    constructor(goalString, priorityLevel){
        goalText = this.goalString;
        goalPriority = this.priorityLevel;
    }
}

//
function obtainInput(){
    
}
function storeUserGoal(currentGoal){

    if(currentGoal.goalText || currentGoal.priorityLevel == 0){
        throw new Error("Make sure goal has text and priority level")
    }
    else{goalsInProgress.push(currentGoal);}  
}

//create function to clear completed goals after certain time