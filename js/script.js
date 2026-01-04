const inputValue = document.querySelector('#task-input');
const addTaskButton = document.querySelector('#add-task-button');
const tasksContainer = document.querySelector('#tasks-ul');

addTaskButton.addEventListener('click', (e) => {
    e.preventDefault();

    const taskText = inputValue.value.trim();
    if (taskText === '') return;

    // cria o li
    const taskItem = document.createElement('li');

    // span para o texto da task
    const taskSpan = document.createElement('span');
    taskSpan.innerText = taskText;
    taskItem.appendChild(taskSpan);

    // botão concluir
    const concluirBtn = document.createElement('button');
    concluirBtn.innerText = 'Concluir';
    concluirBtn.classList.add('concluir-btn');
    concluirBtn.addEventListener('click', () => {
        taskSpan.style.textDecoration =
            taskSpan.style.textDecoration === 'line-through'
                ? 'none'
                : 'line-through';
    });

    // botão alterar
    const alterarBtn = document.createElement('button');
    alterarBtn.innerText = 'Alterar';
    alterarBtn.classList.add('alterar-btn');
    alterarBtn.addEventListener('click', () => {
        const novoTexto = prompt('Insira o novo texto da tarefa:', taskSpan.innerText);
        if (novoTexto !== null && novoTexto.trim() !== '') {
            taskSpan.innerText = novoTexto.trim();
        }
    });

    // botão deletar
    const deleteBtn = document.createElement('button');
    deleteBtn.innerText = 'Deletar';
    deleteBtn.classList.add('delete-btn');
    deleteBtn.addEventListener('click', () => {
        tasksContainer.removeChild(taskItem);
    });

    // adiciona botões ao li
    taskItem.appendChild(concluirBtn);
    taskItem.appendChild(alterarBtn);
    taskItem.appendChild(deleteBtn);

    // adiciona li na lista
    tasksContainer.appendChild(taskItem);

    // limpa input
    inputValue.value = '';
});
