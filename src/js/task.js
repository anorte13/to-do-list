export class Task {
    constructor(title, description, dueDate, priority, project){
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.project = project;
    }
    projects = [];

    addToProject(obj){
        this.projects.push(obj);
    }
    getProjects() {
        return this.projects;
    }
}
export class Project {
    constructor(title, task) {
        this.title = title;
        this.task = task;
    }
    taskList = [];

    addTasks(task){
        this.taskList.push(task);
    }
    getTaskList() {
        return this.taskList;
    }
}
