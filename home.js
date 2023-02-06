const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];

document.getElementById("button").addEventListener("click", function () {
  for (var i = 0; i < 50; i++) {
    var confetti = document.createElement("div");
    confetti.classList.add("confetti");
    confetti.style.left = Math.random() * 100 + "%";
    confetti.style.top = Math.random() * 100 + "%";
    confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    confetti.style.animationDelay = Math.random() + "s";
    document.getElementById("confetti-container").appendChild(confetti);
  }
});

