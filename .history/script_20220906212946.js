const form = document.getElementById('form');
const input = document.getElementById('input');
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
    console.log(goalText);
    if(goalText){
        const goalEl = document.createElement('li');
        if(goal && goal.completed){
            goalEl.classList.add('completed');
        }
        goalEl.innerText= goalText;
        goalsUL.appendChild(goalEl);
        input.value='';
    }
}