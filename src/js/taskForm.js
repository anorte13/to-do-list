import { removeForm } from "./form";
import { createNewTask } from "./ui";
export function openTaskForm() {
    const container = document.getElementById('content');
    
    const formBox = document.createElement('div');
    formBox.id = 'task-box';
    formBox.classList.add('task-popup');
    container.appendChild(formBox);

        const form = document.createElement('form');
        form.id = 'task-container'
        form.setAttribute('action', '')
        form.setAttribute('method', 'get');
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

            const formBody2 = document.createElement('div')
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

                

            const projectsContainer = document.createElement('div');
            projectsContainer.id = 'projects-container';
            formBody2.appendChild(projectsContainer);

                const project = document.createElement('label');
                project.textContent = 'Project: ';
                projectsContainer.appendChild(project);
                
                const projectList = document.createElement('select');
                projectList.id = 'projects';
                projectsContainer.appendChild(projectList);

                let projectArray = ['Hello', 'Clean attic', 'Clean house'];

                for (let i = 0; i < projectArray.length; i++){
                    let projectSelect = document.createElement('option');
                    projectSelect.value = projectArray[i];
                    projectSelect.text = projectArray[i];
                    projectList.appendChild(projectSelect);
                }
            
            const submitContainer = document.createElement('div');
            submitContainer.id = 'submit-container';
            formBody2.appendChild(submitContainer);
                
            const submit = document.createElement("input");
            submit.setAttribute('type', 'button');
            submit.id = 'submitButton';
            submit.value = 'Submit';
            submit.onclick = function(){
                createNewTask(task.value, description.value, '10/28/2022', onChange(), 'Clean the attic');
                removeForm(formBox);
            }
            submitContainer.appendChild(submit);
}



                