import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import { refs } from "./js/refs";
import { addTask, deleteTask, getSavedTasks } from "./js/tasks";
import { loadTheme, toggleTheme } from "./js/theme-switcher";


document.addEventListener("DOMContentLoaded", () => {
 getSavedTasks();
  refs.form.addEventListener("submit", handleClick);
});

const handleClick = (event) => {
    event.preventDefault();
    
   const titleInput = event.target.elements.taskName.value.trim();
   const descrInput = event.target.elements.taskDescription.value.trim();

    const task = {};

   if(!titleInput || !descrInput) {
    iziToast.error({
      message: "Please fill in all fields",
      position: 'topCenter',
      backgroundColor: 'red',
      timeout: 3000,
      pauseOnHover: true
    })
    return;
   } 
     
   task.title = titleInput;
   task.description = descrInput;

   addTask(task);
   
    refs.form.reset();
}

refs.list.addEventListener("click", event => {
  // перевіряємо, куди клікаємо
if(event.target.classList.contains('task-list-item-btn')) {
  const titleElement = event.target.nextElementSibling;
 
  deleteTask(titleElement);
}
})


// loadTheme();

// refs.btn.addEventListener('click', () => {
//   toggleTheme();
// });

  
