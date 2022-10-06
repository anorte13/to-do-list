import "../styles/styles.css";
import headerIcon from "../img/list.png";
import inboxIcon from "../img/email.png";
import weekIcon from "../img/calendar.png";
import todayIcon from "../img/today.png"

export function userInterface() {
    const body = document.getElementById('content');

    const header = document.createElement('div');
    header.id = 'header';
    body.appendChild(header);

        const headIcon = document.createElement('img');
        headIcon.src = headerIcon;
        headIcon.id = 'img';
        header.appendChild(headIcon);

        const headerTitle = document.createElement('div');
        headerTitle.id = 'header-title';
        headerTitle.textContent = 'ListTrack';
        header.appendChild(headerTitle);

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
                projectsContainer.appendChild(btn4);

                

        const mainBody = document.createElement('div');
        mainBody.id = 'main-body';
        mainBody.textContent = 'Main Body'
        container.appendChild(mainBody);
}