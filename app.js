const messages = [
  "Hoy es un día perfecto para sonreír 🌸",
  "Nunca olvides lo especial que eres 💗",
  "Todo lo bonito comienza contigo 🌷",
  "Mereces cosas lindas todos los días ✨",
  "Hoy es un día perfecto para ser feliz 🌸",
  "tqqq toani 🌸",
  "bañateeee 🌸",
  "come bien 🌸",
  "toma agua 🌸"
];

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("dailyMsg").innerText =
    messages[Math.floor(Math.random() * messages.length)];
  loadNotes();
  loadTasks();
});

/* NOTAS */
function saveNote() {
  const input = document.getElementById("noteInput");
  if (!input.value) return;

  let notes = JSON.parse(localStorage.getItem("notes")) || [];
  notes.push(input.value);
  localStorage.setItem("notes", JSON.stringify(notes));
  input.value = "";
  loadNotes();
}

function loadNotes() {
  const list = document.getElementById("noteList");
  list.innerHTML = "";
  let notes = JSON.parse(localStorage.getItem("notes")) || [];
  notes.forEach(n => {
    const li = document.createElement("li");
    li.textContent = n;
    list.appendChild(li);
  });
}

/* RECORDATORIOS */
function saveTask() {
  const task = document.getElementById("taskInput").value;
  const date = document.getElementById("dateInput").value;
  if (!task || !date) return;

  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.push({ task, date });
  localStorage.setItem("tasks", JSON.stringify(tasks));
  document.getElementById("taskInput").value = "";
  document.getElementById("dateInput").value = "";
  loadTasks();
}

function loadTasks() {
  const list = document.getElementById("taskList");
  list.innerHTML = "";
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.forEach((t, i) => {
    const li = document.createElement("li");
    li.innerHTML = `${t.task} - ${t.date} <button onclick="deleteTask(${i})">❌</button>`;
    list.appendChild(li);
  });
}

function deleteTask(i) {
  let tasks = JSON.parse(localStorage.getItem("tasks"));
  tasks.splice(i, 1);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  loadTasks();
}

/* MODO OSCURO */
document.getElementById("darkBtn").onclick = () =>
  document.body.classList.toggle("dark");

setTimeout(() => {
  const w = document.getElementById("welcomeScreen");
  if (w) w.style.display = "none";
}, 5000);
