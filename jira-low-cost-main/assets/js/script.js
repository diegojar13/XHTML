// VARIABLES:
var inputContainer = document.getElementById("inp-tasks-container");
var inputProjectName = document.getElementById("inp-project-name");
var inputTaskName = document.getElementById("inp-task-name");
var inputTaskDescription = document.getElementById("inp-task-description");
var inputButton = document.getElementById("btn-create-task");
var notDoneTask = document.getElementById("not-done-task-container");
var inProgressTask = document.getElementById("in-progress-task-container");
var doneTask = document.getElementById("done-task-container");

//EVENTOS:
inputButton.addEventListener("click", addTask);
inputContainer.addEventListener("keypress", function (event) { /*¿¿¿Por qué funciona???*/
    if (event.key === "Enter") {
        event.preventDefault();
        addTask();
    }
});

// FUNCIONES:
// Función principal --> añadir tarea al contenedor de las tareas no hechas.
function addTask() {
    if (inputProjectName.value.trim().length > 0 && 
        inputTaskName.value.trim().length > 0 &&
        inputTaskDescription.value.trim().length > 0) {
            if (document.getElementById("error-span") != null) {
                document.getElementById("error-span").remove();
            }
            //Creamos el contenedor global de la tarea:
            let taskDiv = document.createElement("div");
            taskDiv.className = "task";
            notDoneTask.appendChild(taskDiv);

            //Creamos el contenedor con el nombre del proyecto:
            let projectNameDiv = document.createElement("div");
            projectNameDiv.className = "project-name-task";
            projectNameDiv.innerText = inputProjectName.value;
            taskDiv.appendChild(projectNameDiv);

            //Creamos el contenedor con el nombre de la tarea:
            let taskNameDiv = document.createElement("div");
            taskNameDiv.className = "task-name-task";
            taskNameDiv.innerText = inputTaskName.value;
            taskDiv.appendChild(taskNameDiv);

            //Creamos el contenedor con la descripción de la tarea:
            let taskDescDiv = document.createElement("div");
            taskDescDiv.className = "task-desc-task";
            taskDescDiv.innerText = inputTaskDescription.value;
            taskDiv.appendChild(taskDescDiv);

            //Creamos el botón de la flecha a la izquierda:
            let leftArrow = document.createElement("img");
            leftArrow.className = "left-arrow";
            leftArrow.setAttribute("src", "assets/images/arrow_left.svg")
            taskDiv.appendChild(leftArrow);
            leftArrow.addEventListener("click", () => {
                if(taskDiv.parentNode === doneTask) {
                    inProgressTask.appendChild(taskDiv);
                } else if (taskDiv.parentNode === inProgressTask) {
                    notDoneTask.appendChild(taskDiv);
                    // leftArrow.remove();
                }
            });
            
            //Creamos el botón de "basura":
            let remove = document.createElement("img");
            remove.className = "trash";
            remove.setAttribute("src", "assets/images/trash.svg")
            taskDiv.appendChild(remove);
            remove.addEventListener("click", () => {
                taskDiv.remove();
            });

            //Creamos el botón de la flecha a la derecha:
            let rightArrow = document.createElement("img");
            rightArrow.className = "right-arrow";
            rightArrow.setAttribute("src", "assets/images/arrow_right.svg")
            taskDiv.appendChild(rightArrow);
            rightArrow.addEventListener("click", () => {
                if(taskDiv.parentNode === notDoneTask) {
                    inProgressTask.appendChild(taskDiv);
                } else if (taskDiv.parentNode === inProgressTask) {
                    doneTask.appendChild(taskDiv);
                    // rightArrow.remove();
                }
            });
            





            //Reestablecemos los inputs a su valor predeterminado (vacío):
            inputProjectName.value = "";
            inputTaskName.value = "";
            inputTaskDescription.value = "";
    } else {
        if (document.getElementById("error-span") === null) {
            let errorSpan = document.createElement("span");
            errorSpan.id = "error-span";
            errorSpan.innerText = "  ¡Faltan campos por rellenar!  ";
            inputContainer.appendChild(errorSpan);
        }
    }
}