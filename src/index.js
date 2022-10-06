import {Task} from './js/task.js';
import { userInterface } from './js/ui.js';

userInterface();
const taskOne = new Task('Clean attic', 'Attic is dirty and needs some deep cleaing'
,'10/21/2022', 'High', 'Use mop in the bathroom and grab cleaner from the store.');
taskOne.getTitle();
taskOne.getDescription();
taskOne.getDueDate();
taskOne.getPriority();
taskOne.getNotes();