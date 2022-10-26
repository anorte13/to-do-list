import "../styles/styles.css";
import { openProjctForm } from "./form";
import headerIcon from "../img/list.png";
import inboxIcon from "../img/email.png";
import weekIcon from "../img/calendar.png";
import todayIcon from "../img/today.png"
import { openTaskForm, tasks } from "../js/taskForm";
import { Project } from "./task";
import { addHeader, addTasks, createBody, removeCurrentInfo, taskArray } from "./load";


export let projects = [];
export function userInterface() {
    const body = document.getElementById('content');

    const header = document.createElement('div');
    header.id = 'header';
    body.appendChild(header);
    
        const logoContainer = document.createElement('div');
        logoContainer.id = 'logo';
        header.appendChild(logoContainer);

            const headIcon = document.createElement('img');
            headIcon.src = headerIcon;
            headIcon.id = 'img';
            logoContainer.appendChild(headIcon);

            const headerTitle = document.createElement('div');
            headerTitle.id = 'header-title';
            headerTitle.textContent = 'ListTrack';
            logoContainer.appendChild(headerTitle);

        const add = document.createElement('button');
        add.id = 'add-task';
        add.textContent = '+';
        add.onclick = function() {
            openTaskForm();
        }
        header.appendChild(add);

    const container = document.createElement('div');
    container.id = 'container';
    body.appendChild(container);

        const sidebar = document.createElement('div');
        sidebar.id = 'sidebar';
        container.appendChild(sidebar);
        
            const buttonContainer = document.createElement('div');
            buttonContainer.id = 'button-container';
            sidebar.appendChild(buttonContainer);

                const inboxContainer = document.createElement('div');
                inboxContainer.id = 'inbox-box';
                buttonContainer.appendChild(inboxContainer);

                    const inbox = document.createElement('img');
                    inbox.id = 'icon';
                    inbox.src = inboxIcon;
                    inboxContainer.appendChild(inbox);

                    const btn = document.createElement('button');
                    btn.id = 'inbox';
                    btn.textContent = 'Inbox';
                    const inboxObject = new Project(btn.textContent);
                    projects.push(inboxObject);
                    btn.addEventListener('click', function(){
                        removeCurrentInfo()
                        createBody(inboxObject);
                        addHeader(inboxObject.title);
                    })
                    inboxContainer.appendChild(btn);

                const todayContainer = document.createElement('div');
                todayContainer.id = 'today-box';
                buttonContainer.appendChild(todayContainer);

                    const today = document.createElement('img');
                    today.id = 'icon';
                    today.src = todayIcon;
                    todayContainer.appendChild(today);

                    const btn2 = document.createElement('button');
                    btn2.id = 'today';
                    btn2.textContent = 'Today';
                    const todayObject = new Project(btn2.textContent)
                    projects.push(todayObject);
                    btn2.addEventListener('click', function(){
                       removeCurrentInfo()
                       createBody(todayObject)
                       addHeader(todayObject.title);
                    });
                    todayContainer.appendChild(btn2);
                    

                const thisWeekContainer = document.createElement('div');
                thisWeekContainer.id = 'week-box';
                buttonContainer.appendChild(thisWeekContainer);
                    
                    const week = document.createElement('img');
                    week.id = 'icon';
                    week.src = weekIcon;
                    thisWeekContainer.appendChild(week);

                    const btn3 = document.createElement('button');
                    btn3.id = 'this-week';
                    btn3.textContent = 'This Week';
                    const weekObject = new Project(btn3.textContent);
                    projects.push(weekObject);
                    btn3.addEventListener('click', function(){
                        removeCurrentInfo()
                        createBody(weekObject)
                        addHeader(weekObject.title);
                    })
                    thisWeekContainer.appendChild(btn3);
                    

            const projectsContainer  = document.createElement('div');
            projectsContainer.id = 'project-container';
            sidebar.appendChild(projectsContainer);

                const projectHeader = document.createElement('div');
                projectHeader.id = 'projects-header';
                projectHeader.textContent = 'Projects';
                projectsContainer.appendChild(projectHeader);
                const btn4 = document.createElement('button');
                btn4.id = 'add-project';
                btn4.textContent = '+ Add Project';
                btn4.onclick = function(){
                    openProjctForm();
                    }
                projectsContainer.appendChild(btn4);
        const mainBody = document.createElement('div');
        mainBody.id = 'main-body';
        container.appendChild(mainBody);
    createBody(todayObject);
    addHeader(todayObject.title);
}
export function addProject(name) {
    const projectButton = document.createElement('button');
    const projectHolder = document.getElementById('project-container');
    projectButton.textContent = name.title;
    projectButton.id = 'project-name';
    projectButton.onclick = function(){
        removeCurrentInfo();
        createBody();
        addHeader(name.title);
    }
    projectHolder.appendChild(projectButton);
}