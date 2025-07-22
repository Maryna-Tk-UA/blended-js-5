//  тут будуть функції додавання, видалення, отримання тасок

import { getFromLS, saveInLS } from "./local-storage-api";

const tasks = getFromLS('tasks') || [];