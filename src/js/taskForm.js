import { removeForm } from "./form";
import { addTasks } from "./load";
import { Task } from "./task";
import { projects } from "./ui";
import { format } from "date-fns";
export let tasks = [];
export function openTaskForm() {
    const head = document.getElementById('header');
    head.classList.remove('form-removed');
    head.classList.add('form-pop');
    const contain = document.getElementById('container');
    contain.classList.remove('form-removed');
    contain.classList.add('form-pop');

    const container = document.getElementById('content');
    
    const formBox = document.createElement('div');
    formBox.id = 'task-box';
    formBox.classList.add('task-popup');
    container.appendChild(formBox);

        const form = document.createElement('form');
        form.id = 'task-container'
        formBox.appendChild(form);

            const title = document.createElement('div');
            title.textContent = 'New Task';  
            title.id = "task-title";
            form.appendChild(title);

            const bodyContainer = document.createElement('div');
            bodyContainer.id = 'task-body';
            form.appendChild(bodyContainer);

            const formBody = document.createElement('div');
            formBody.id = 'form-body';
            bodyContainer.appendChild(formBody);

                const titleContainer = document.createElement('div');
                titleContainer.id = 'title-container';
                formBody.appendChild(titleContainer);

                    const taskTitle = document.createElement('div');
                    taskTitle.textContent = 'Title:'
                    titleContainer.appendChild(taskTitle);

                    const task = document.createElement('input');
                    task.id = 'task';
                    task.setAttribute('type', 'text');
                    task.setAttribute('name', 'task');
                    titleContainer.appendChild(task)

                const descriptionContainer = document.createElement('div');
                descriptionContainer.id = 'description-container';
                formBody.appendChild(descriptionContainer);

                    const descriptionTitle = document.createElement('label');
                    descriptionTitle.textContent = 'Description:';
                    descriptionContainer.appendChild(descriptionTitle);
                    
                    const description = document.createElement('textarea');
                    description.id = 'description';
                    description.setAttribute('type', 'text');
                    description.setAttribute('name', 'description');
                    descriptionContainer.appendChild(description);

            const formBody2 = document.createElement('div');
            formBody2.id = 'form-body'
            bodyContainer.appendChild(formBody2);

            const priorityContainer = document.createElement('div');
            priorityContainer.id = 'priority-container';
            formBody2.appendChild(priorityContainer);

                const priorityTitle = document.createElement('label');
                priorityTitle.textContent = 'Priority: ';
                priorityContainer.appendChild(priorityTitle);
                
                let priorityList = ['High', 'Medium', 'Low'];
    
                const priority = document.createElement('select');
                priority.id = 'priority';
                priorityContainer.appendChild(priority);

                for (let i = 0; i < priorityList.length; i++){
                    let option = document.createElement('option');
                    option.value = priorityList[i];
                    option.text = priorityList[i];
                    priority.appendChild(option);
                }
                let selected = document.getElementById('priority');
                function onChange() {
                    let value = selected.value;
                    return value;
                }
                selected.onchange = onChange;
                onChange();

            const dateContainer = document.createElement('div');
            dateContainer.id = 'date-container';
            formBody2.appendChild(dateContainer);
                
                const dateTitle = document.createElement('label');
                dateTitle.textContent = 'Due Date: ';
                dateContainer.appendChild(dateTitle);

                const date = document.createElement('input');
                date.id = 'date';
                date.setAttribute('type', 'text');
                date.setAttribute('name', 'date');
                dateContainer.appendChild(date);

            const projectsContainer = document.createElement('div');
            projectsContainer.id = 'projects-container';
            formBody2.appendChild(projectsContainer);
                const project = document.createElement('label');
                project.textContent = 'Project: ';
                projectsContainer.appendChild(project);
                const projectList = document.createElement('select');
                projectList.id = 'projects';
                projectsContainer.appendChild(projectList);

                for (let i = 0; i < projects.length; i++){
                    let projectSelect = document.createElement('option');
                    projectSelect.value = projects[i].title;
                    projectSelect.text = projects[i].title;
                    projectList.appendChild(projectSelect);
                }
                let selectedProject = document.getElementById('projects');
                function onChangeProjects(){
                    let value2 = selectedProject.value;
                    return value2;
                }
                selectedProject.onchange = onChangeProjects;
                onChangeProjects();

            const submitContainer = document.createElement('div');
            submitContainer.id = 'submit-container';
            formBody2.appendChild(submitContainer);
                
            const submit = document.createElement("input");
            submit.setAttribute('type', 'button');
            submit.id = 'submitButton';
            submit.value = 'Submit';
            submit.onclick = function(){
                validateForm(task.value, description.value, date.value, onChange(), onChangeProjects());
            }
            submitContainer.appendChild(submit);
            
        const closeContatiner = document.createElement('div');
        closeContatiner.id = 'close-container';
        formBody2.appendChild(closeContatiner)

            const close = document.createElement('input');
            close.setAttribute('type', 'button');
            close.id = 'close-form';
            close.value = 'Cancel';
            close.onclick = function(){
                head.classList.remove('form-pop');
                contain.classList.remove('form-pop');
                head.classList.add('form-removed');
                contain.classList.add('form-removed');
                formBox.classList.add('task-popin');
                removeForm(formBox);
            }
            closeContatiner.appendChild(close);
}
let parsedTitle;

export function addToProject(title, description, date, priority, project){
    for(let i = 0; i < projects.length; i++){
        if(projects[i].title === `${project}`){
            parsedTitle = project;
            parsedTitle = parsedTitle.replace(/\s/g, '');
            const newTask = new Task(title, description, date, priority, project);
            tasks.push(newTask);
            addTasks(projects[i], newTask, parsedTitle);
        }
    }
}
function validateForm(task, description, date, priority, project) {
    let userInput = document.getElementById('task');
    let userDate = document.getElementById('date');
    const head = document.getElementById('header');
    const contain = document.getElementById('container');
    const box = document.getElementById('task-box');
    if(userInput.value == ''){
        alert('Please enter task title');
        return;
    }
    if(userDate.value === ''){
        alert('Please enter a date for task');
        return;
    }
    else if(userInput.value !== '' && userDate.value !== ''){
        const selectedDate = new Date(`${date}`);
        const formattedDate = format(selectedDate, 'MM/dd/yyyy');
        addToProject(task, description, formattedDate, priority, project);
        head.classList.remove('form-pop');
        contain.classList.remove('form-pop');
        head.classList.add('form-removed');
        contain.classList.add('form-removed');
        box.classList.add('task-popin');
        removeForm(box);
    }
}



//(task, description, date, priority, project){
    //const head = document.getElementById('header');
    //const contain = document.getElementById('container');
   // const formBox = document.createElement('div');

    //let x = document.forms["myForm"]["task"].value;

   // if(x === ""){
        //console.log('Please enter information in the fields.')
        //return false;
   // } else {
        //console.log('Everything looks good!');
       // 
    //}
