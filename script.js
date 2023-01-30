const { ipcRenderer } = require('electron');

let list = document.getElementById("list");
let newTask = document.getElementById("newTask");


document.getElementById("addNewTask").addEventListener('click', () => {
    list.insertAdjacentHTML('beforeend', `<li class="list-group-item">${newTask.value}</li>`)
    ipcRenderer.invoke('show-notification', newTask.value);
    newTask.value = '';
});

document.getElementById('toggle-dark-mode').addEventListener('click', async () => {
    const isDarkMode = await window.darkMode.toggle()
    document.getElementById('theme-source').innerHTML = isDarkMode ? 'Dark' : 'Light'
})

document.getElementById('reset-to-system').addEventListener('click', async () => {
    await window.darkMode.system()
    document.getElementById('theme-source').innerHTML = 'System'
})