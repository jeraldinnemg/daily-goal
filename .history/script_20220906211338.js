const form = document.getElementById('form');
const input = document.getElementById('goal');
const goalsUL= document.getElementById('goals');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    addGoal();
});

function addGoal(goal) {
    let goalText= input.value;

    if(goal){
        goalText= goal.text;
    }
}