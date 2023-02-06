Sim, é possível! Aqui está o código para fazer a ação ocorrer após o clique em um botão:

HTML:

<div class="container">
</div>
<button id="startConfetti">Iniciar Confetes</button>

CSS:

.container {
height: 100vh;
width: 100%;
position: relative;
overflow: hidden;
}

.confetti {
height: 10px;
width: 10px;
border-radius: 50%;
position: absolute;
animation: jump 2s linear infinite;
display: none;
}

@keyframes jump {
0% {
top: 0;
left: 0;
}
100% {
top: calc(100vh - 10px);
left: calc(100% - 10px);
}
}

JS:

const colors = ['#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#00FFFF', '#FF00FF'];

document.querySelector("#startConfetti").addEventListener("click", function() {
for (let i = 0; i < 100; i++) {
let confetti = document.createElement("div");
confetti.classList.add("confetti");
confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
confetti.style.top = ${Math.floor(Math.random() * 100)}vh;
confetti.style.left = ${Math.floor(Math.random() * 100)}%;
confetti.style.display = "block";
document.querySelector(".container").appendChild(confetti);
}
});