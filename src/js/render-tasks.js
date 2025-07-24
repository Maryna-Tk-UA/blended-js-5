// тут функції розмітки і рендеру

import { refs } from "./refs";

export const createMarkup = (infoLS) => {
   const markup = infoLS.map(({ title, description }) => `
        <li class="task-list-item">
        <button class="task-list-item-btn">Delete</button>
        <h3>${title}</h3>
        <p>${description}</p>
      </li>
    `).join("");

refs.list.innerHTML = markup;
}