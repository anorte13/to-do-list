import { addProject } from "./ui";
import { createNewForm } from "./ui";
export function openProjctForm() {
    const container = document.getElementById('content');
    
    const formBox = document.createElement('div');
    formBox.id = 'form-box';
    formBox.classList.add('form-popup');
    container.appendChild(formBox);

        const form = document.createElement('form');
        form.id = 'form-container'
        form.setAttribute('action', '')
        form.setAttribute('method', 'get');
        formBox.appendChild(form);

            const title = document.createElement('div');
            title.textContent = 'New Project';  
            title.id = "form-title";
            form.appendChild(title);

            const projectName = document.createElement('input');
            projectName.id = 'projectName';
            projectName.setAttribute('type', 'text');
            projectName.setAttribute('name', 'projectName');
            projectName.setAttribute('placeholder', 'Project Name');

            const submit = document.createElement("input");
            submit.setAttribute('type', 'button');
            submit.id = 'submitButton';
            submit.value = 'Submit';
            submit.onclick = function(){
                addProject(projectName.value);
                createNewForm(projectName.value);
                removeForm(formBox);
            }
            form.appendChild(projectName);
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
    export function removeForm(form){
        form.remove();
    }