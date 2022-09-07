const form = document.getElementById('form');
const input = document.getElementById('input');
const goalsUL= document.getElementById('goals');

const goals = JSON.parse(localStorage.getItem('goals'));

if(goals){
    goalsUL.forEach(goal => addGoal(goal))
}

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
            goalEl.classList.toggle('completed');
        })
        
        goalEl.addEventListener('contextmenu', (e)=> {
            e.preventDefault();
            goalEl.remove();
        })
        goalsUL.appendChild(goalEl);
        input.value='';
    }
}


// localStorage.setItem('name', JSON.stringify(obj));
// JSON.parse(localStorage.getItem('obj'));