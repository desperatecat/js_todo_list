const addForm = document.querySelector('.add');
const list = document.querySelector('.todos');
const search = document.querySelector('.search input');


const generateTemplate = todo => {

    const html = `
        <li class="list-group-item d-flex justify-content-between align-items-center">
            <span>${todo}</span>
            <i class="far fa-trash-alt delete"></i>
        </li>
    `;

    list.innerHTML += html;

};

const filterTodos = term => {
    //for those who don't match the term, we want to add a 'filtered' class in it, so that we can hide that class
    Array.from(list.children)
        .filter(todo => !todo.textContent.toLowerCase().includes(term))
        .forEach(todo => todo.classList.add('filtered'));

    //for those who match the term, we want to remove that existed 'filtered' class
    Array.from(list.children)
        .filter(todo => todo.textContent.toLowerCase().includes(term))
        .forEach(todo => todo.classList.remove('filtered'));
};


//add todos
addForm.addEventListener('submit', e => {
    e.preventDefault();
    const todo = addForm.add.value.trim();

    if(todo.length){
        generateTemplate(todo);
        addForm.reset();

    } else {
        alert('Todo item cannot be empty or blank!');
    }

});


//delete todos
list.addEventListener('click', e => {
    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove();
    }
});


//search todos
search.addEventListener('keyup', () => {
    const term = search.value.trim().toLowerCase();
    filterTodos(term);
})