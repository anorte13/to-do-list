export class Task {
    constructor(title, description, dueDate, priority, project){
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.project = project;
    }
    getTitle() {
        console.log('Task: ', this.title);
    }
    getDescription() {
        console.log('Description: ', this.description);
    }
    getDueDate() {
        console.log('Due: ', this.dueDate);
    }
    getPriority() {
        console.log('Priority: ', this.priority);
    }
    getNotes() {
        console.log('Notes: ', this.notes);
    }
    getProject() {
        console.log('Hello');
    }
}
export class Project {
    constructor(title) {
        this.title = title;
    }
}
