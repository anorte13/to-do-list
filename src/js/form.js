import { Project } from "./task";
import { addProject, projects } from "./ui";

export function openProjctForm() {
    const container = document.getElementById('content');

    const head = document.getElementById('header');
    head.classList.remove('form-removed');
    head.classList.add('form-pop');
    const contain = document.getElementById('container');
    contain.classList.remove('form-removed');
    contain.classList.add('form-pop');

    const formBox = document.createElement('div');
    formBox.id = 'form-box';
    formBox.classList.add('task-popup');
    container.appendChild(formBox);

        const form = document.createElement('form');
        form.id = 'form-container'
        form.setAttribute('action', '');
        form.setAttribute('method', 'get');
        formBox.appendChild(form);

            const title = document.createElement('div');
            title.textContent = 'New Project';  
            title.id = "form-title";
            form.appendChild(title);

            const error = document.createElement('div');
            error.id = 'error'

            const projectName = document.createElement('input');
            projectName.id = 'projectName';
            projectName.setAttribute('type', 'text');
            projectName.setAttribute('name', 'projectName');
            projectName.setAttribute('required', 'required');

            const submit = document.createElement("input");
            submit.setAttribute('type', 'button');
            submit.id = 'submitButton';
            submit.value = 'Submit';
            submit.onclick = function(){
                valiateProject(projectName.value);       
            }
            form.appendChild(projectName);
            form.appendChild(submit);

            const close = document.createElement('input');
            close.setAttribute('type', 'button');
            close.id = 'close-form';
            close.value = 'Cancel';
            close.onclick = function(){
                head.classList.remove('form-pop');
                contain.classList.remove('form-pop');
                head.classList.add('form-removed');
                contain.classList.add('form-removed');
                removeForm(formBox);
            }
            form.appendChild(close);
    }
    export function removeForm(form){
        form.remove();
    }
    function valiateProject(project){
        let projectName = document.getElementById('projectName');
        const head = document.getElementById('header');
        const contain = document.getElementById('container');
        const box = document.getElementById('form-box');

        if(projectName.value === ''){
            alert('Please enter a project name');
        }
        else if(projectName !== ''){
            const projectObject = new Project(project);
            projects.push(projectObject);
            addProject(projectObject);
            head.classList.remove('form-pop');
            contain.classList.remove('form-pop');
            head.classList.add('form-removed');
            contain.classList.add('form-removed');
            removeForm(box);

        }
    }
    