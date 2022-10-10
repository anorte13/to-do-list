import "../styles/styles.css";
import { openProjctForm } from "./form";
import { Project } from "./task";
import headerIcon from "../img/list.png";
import inboxIcon from "../img/email.png";
import weekIcon from "../img/calendar.png";
import todayIcon from "../img/today.png"

let formCalled = false;
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
                    btn.addEventListener('click', function(){

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
                    btn2.addEventListener('click', function(){

                    })
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
                    btn3.addEventListener('click', function(){

                    })
                    thisWeekContainer.appendChild(btn3);

            const projectsContainer  = document.createElement('div');
            projectsContainer.id = 'project-container';
            sidebar.appendChild(projectsContainer);

                const projectHeader = document.createElement('div');
                projectHeader.id = 'project-header';
                projectHeader.textContent = 'Projects';
                projectsContainer.appendChild(projectHeader);
                const btn4 = document.createElement('button');
                btn4.id = 'add-project';
                btn4.textContent = '+ Add Project';
                btn4.onclick = function(){
                    if(formCalled === false) {
                        formCalled = true;
                        openProjctForm();
                        return;
                    }
                    else if(formCalled === true) {
                        formCalled = false;
                        console.log('Form is aleady open');
                    }
                }
                projectsContainer.appendChild(btn4);

        const mainBody = document.createElement('div');
        mainBody.id = 'main-body';
        container.appendChild(mainBody);
}
export function showClass(name) {
    const project = new Project(name);
    console.log(project);
}
