const form = document.getElementById('form');
const input = document.getElementById('input');
const goalsUL= document.getElementById('goals');

const goals = JSON.parse(localStorage.getItem('goals'));

if(goals){
    goals.forEach(goal => addGoal(goal))
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

    updateLocalStorage();
}

function updateLocalStorage() {
    goalsElements = document.querySelectorAll('li');
    const goals= [];

    goalsElements.forEach(goalEl =>{
        goals.push({
            text: goalEl.innerText,
            completed: goalEl.classList.contains('completed')
        })
    })
    localStorage.setItem('goals', JSON.stringify(goals));
}

    // Clear the localstorage
    const btnDelete = document.getElementById('clear');
    btnDelete.addEventListener("click", function(){
    e.preventDefault();
    localStorage.clear();
    location.reload();
    });

// localStorage.setItem('name', JSON.stringify(obj));
// JSON.parse(localStorage.getItem('obj'));

