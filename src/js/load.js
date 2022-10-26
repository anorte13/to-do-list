
export function createBody(){
    const main = document.getElementById('main-body');

    const headerContainer = document.createElement('div');
    headerContainer.id = 'header-container';
    main.appendChild(headerContainer);

    const taskContainer = document.createElement('div');
    taskContainer.id = 'task-containers';
    main.appendChild(taskContainer);
}
export function addHeader(obj){
    const main = document.getElementById('header-container');
    const projectHeader = document.createElement('div');
    projectHeader.classList.add('projectHeader');
    let projectTitle = obj
    projectTitle = projectTitle.replace(/\s/g, '');
    projectHeader.id = projectTitle;
    projectHeader.textContent = obj;
    main.appendChild(projectHeader);
}
export let taskArray = [];
export function addTasks(projectItem, tasks, project){
   const taskContainer = document.getElementById('task-containers');
   const title = document.getElementById(`${project}`);
   
   if(title){
    const wrapper = document.createElement('div');
    wrapper.id = 'wrapper';
    taskContainer.appendChild(wrapper);

        const task = document.createElement('div');
        task.id = 'container_';
        task.addEventListener('click', function(){
            if(collapseContainer.classList.contains('collapse-container-hidden')){
                collapseContainer.classList.remove('collapse-container-hidden');
                collapseContainer.classList.add('collapse-container-show');
            }
            else if(collapseContainer.classList.contains('collapse-container-show')){
                collapseContainer.classList.remove('collapse-container-show');
                collapseContainer.classList.add('collapse-container-hidden');
            }
        });
        wrapper.appendChild(task);

            const taskContainerLeft = document.createElement('div');
            taskContainerLeft.id = 'container-left';
            task.appendChild(taskContainerLeft);

                const taskContainerLeftInputs = document.createElement('div');
                taskContainerLeftInputs.id = 'form-check';
                taskContainerLeft.appendChild(taskContainerLeftInputs);

                    const input = document.createElement('input');
                    input.setAttribute('type', 'checkbox');
                    input.id = 'checkbox';
                    taskContainerLeftInputs.appendChild(input);
                    
                    const label = document.createElement('label');
                    label.textContent = tasks.title;
                    label.id = 'title';
                    taskContainerLeftInputs.appendChild(label);

                const taskControls = document.createElement('div');
                taskControls.id = 'task-controls';
                task.appendChild(taskControls);

                    const deleteButton = document.createElement('button');
                    deleteButton.id = 'delete-button';
                    deleteButton.textContent = 'Delete'
                    deleteButton.addEventListener('click', function(){
                        console.log('Button was pressed')
                        removeFromList(wrapper);
                    })
                    taskControls.appendChild(deleteButton);

        const collapseContainer = document.createElement('div');
        collapseContainer.id = 'collapse-container';
        collapseContainer.classList.add('collapse-container-hidden');
        wrapper.appendChild(collapseContainer);

            const collapseWrapper = document.createElement('div');
            collapseWrapper.id = 'collapse-wrapper';
            collapseContainer.appendChild(collapseWrapper);

                const collapseInfoLeft = document.createElement('div');
                collapseInfoLeft.id = 'left-collapse-container';
                collapseWrapper.appendChild(collapseInfoLeft);

                    const collapseTitleContainer = document.createElement('div');
                    collapseTitleContainer.id = 'collapse-title-container';
                    collapseInfoLeft.appendChild(collapseTitleContainer);

                        const collapseLabel = document.createElement('div');
                        collapseLabel.id = 'left-collapse';
                        collapseLabel.textContent = 'Title: '
                        collapseTitleContainer.appendChild(collapseLabel);

                        const collapseTitle = document.createElement('div');
                        collapseTitle.id = 'left-collapse'
                        collapseTitle.textContent = tasks.title;
                        collapseTitleContainer.appendChild(collapseTitle);

                    const collapseDueDateContainer = document.createElement('div');
                    collapseDueDateContainer.id = 'collapse-due-date-container';
                    collapseInfoLeft.appendChild(collapseDueDateContainer);

                        const collapseDate = document.createElement('div');
                        collapseDate.id = 'left-collapse';
                        collapseDate.textContent = 'Due Date: ';
                        collapseDueDateContainer.appendChild(collapseDate);

                        const collapseDateInfo = document.createElement('div');
                        collapseDateInfo.id = 'left-collapse';
                        collapseDateInfo.textContent = tasks.dueDate;
                        collapseDueDateContainer.appendChild(collapseDateInfo);


                const collapseInfoRight = document.createElement('div');
                collapseInfoRight.id = 'right-collapse-container';
                collapseWrapper.appendChild(collapseInfoRight);

                    const collapseRightContainer = document.createElement('div');
                    collapseRightContainer.id = 'collapse-priority-container';
                    collapseInfoRight.appendChild(collapseRightContainer);

                        const priorityLabel = document.createElement('div');
                        priorityLabel.id = 'right-collapse';
                        priorityLabel.textContent = 'Priority: '
                        collapseRightContainer.appendChild(priorityLabel);

                        const priorityText = document.createElement('div');
                        priorityText.id = 'right-collapse';
                        priorityText.textContent = tasks.priority;
                        collapseRightContainer.appendChild(priorityText);

                    const collapseDescriptionContainer = document.createElement('div');
                    collapseDescriptionContainer.id = 'collapse-description-container';
                    collapseInfoRight.appendChild(collapseDescriptionContainer);

                        const descriptionLabel = document.createElement('div');
                        descriptionLabel.id = 'right-collapse';
                        descriptionLabel.textContent = 'Description: '
                        collapseDescriptionContainer.appendChild(descriptionLabel);

                        const descriptionText = document.createElement('div');
                        descriptionText.id = 'right-collapse';
                        descriptionText.textContent = tasks.description;
                        collapseDescriptionContainer.appendChild(descriptionText);

                    const collapseContainerProject = document.createElement('div');
                    collapseContainerProject.id = 'project-collapse-container';
                    collapseInfoRight.appendChild(collapseContainerProject);

                        const projectLabel = document.createElement('div');
                        projectLabel.id = 'right-collapse';
                        projectLabel.textContent = 'Project: ';
                        collapseContainerProject.appendChild(projectLabel);

                        const projectText = document.createElement('div');
                        projectText.id = 'right-collapse';
                        projectText.textContent = tasks.project;
                        collapseContainerProject.appendChild(projectText);

    taskArray.push(wrapper);
   }
   else 
    console.log('Element doesnt exist');
}
function removeFromList(task) {
        let index = taskArray.indexOf(task);
        taskArray.splice(index, 1);
        task.remove();
}
export function removeCurrentInfo(element){
    saveCurrentPage(element)
    const taskContainer = document.getElementById('task-containers');
    const main = document.getElementById('header-container');
    main.remove()
    taskContainer.remove();
}
function saveCurrentPage(element){
    console.log(element);
}
