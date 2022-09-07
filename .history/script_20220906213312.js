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

    if(goalText){
        const goalEl = document.createElement('li');
        if(goal && goal.completed){
            goalEl.classList.add('completed');
        }
        goalEl.innerText= goalText;

        goalEl.addEventListener('click', ()=> {
            goalEl.classList.remove('completed');
        })
        goalsUL.appendChild(goalEl);
        input.value='';
    }
}