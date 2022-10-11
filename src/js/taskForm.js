import { removeForm } from "./form";

export function openTaskForm() {
    const container = document.getElementById('content');
    
    const formBox = document.createElement('div');
    formBox.id = 'task-box';
    formBox.classList.add('task-popup');
    container.appendChild(formBox);

        const form = document.createElement('form');
        form.id = 'form-container'
        form.setAttribute('action', '')
        form.setAttribute('method', 'get');
        formBox.appendChild(form);

            const title = document.createElement('div');
            title.textContent = 'New Task';  
            title.id = "task-title";
            form.appendChild(title);

            const taskTitle = document.createElement('label');
            taskTitle.textContent = 'Title:'
            form.appendChild(taskTitle);

            const taskName = document.createElement('input');
            taskName.id = 'taskName';
            taskName.setAttribute('type', 'text');
            taskName.setAttribute('name', 'projectName');
            taskName.setAttribute('placeholder', 'Project Name');
            form.appendChild(taskName);
            
            const taskDescription = document.createElement('input');
            taskDescription.id = 'description';
            taskDescription.setAttribute('type', 'text');
            taskDescription.setAttribute('name', 'taskDescription');
            form.appendChild(taskDescription);

            const priority = document.createElement('input');
            priority.id = 'priority';
            priority.setAttribute('type', 'text');
            priority.setAttribute('name', 'taskPriority');
            form.appendChild(priority);

            const submit = document.createElement("input");
            submit.setAttribute('type', 'button');
            submit.id = 'submitButton';
            submit.value = 'Submit';
            submit.onclick = function(){
                addProject(projectName.value);
                removeForm(formBox);
            }
            form.appendChild(taskName);
            form.appendChild(submit);

            const close = document.createElement('input');
            close.setAttribute('type', 'button');
            close.id = 'close-form';
            close.value = 'Cancel';
            close.onclick = function(){
                removeForm(formBox);
            }
            form.appendChild(close);
    }