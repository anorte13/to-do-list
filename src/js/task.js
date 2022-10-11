export class Task {
    constructor(title, description, dueDate, priority, notes, project){
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.notes = notes;
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
    constructor(title,task) {
        this.title = title;
        this.task = task;
    }

}
