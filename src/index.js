import {Task} from './js/task.js';
import { userInterface } from './js/ui.js';

userInterface();
const taskOne = new Task('Clean attic', 'Attic is dirty and needs some deep cleaing'
,'10/21/2022', 'High');
console.log(taskOne);