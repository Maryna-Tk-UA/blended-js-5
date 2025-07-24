//  тут будуть функції додавання, видалення, отримання тасок

import { getFromLS, saveInLS } from "./local-storage-api";
import { refs } from "./refs";
import { createMarkup } from "./render-tasks";

let tasks = getFromLS('tasks') || [];

export const addTask = task => {
    // 1. додати таску до масиву
    tasks.push(task);
    
    //  2. зарендирити таски   з render-task
    createMarkup(tasks);

    //  3. перезберігти ЛС  saveInLS
    saveInLS('tasks', tasks);
}

export const getSavedTasks = () => {
    createMarkup(tasks);
}

export const deleteTask = (titleElement) => {
    // фільтрація масива перезаписати tasks на відфільтрований масив 
    const taskTitle = titleElement.textContent;
    // лишаємо у масиві лише ті title's, які не містять цей текстовий контент
    tasks = tasks.filter(task => task.title !== taskTitle);

    saveInLS('tasks', tasks);


     createMarkup(tasks); 
}