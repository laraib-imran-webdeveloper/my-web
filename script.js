let num = prompt("Enter you birthday date")
        num = Number(num);
        if( num % 30 === 0){
            console.log("")
            alert("its your birthday🥳🎊 HAPPY BIRTHDAY🎇✨")
        }
        else{
            console.log("odd")
            alert("Odd")
        }
        let step = 0;

let messages = [
  "Have a look at it,mister coder ✨",
  "This page is made for you 💖",
  "Happy Birthday 🎉🎂"
];

function openPopup() {
  document.getElementById("popup").style.display = "flex";
  step = 0;
  updateMessage();
}

function nextMessage() {
  step++;
  if (step >= messages.length) {
    document.getElementById("popup").style.display = "none";
    return;
  }
  updateMessage();
}

function updateMessage() {
  document.getElementById("message").innerText = messages[step];

  let dots = document.querySelectorAll(".dot");
  dots.forEach((dot, i) => {
    dot.classList.toggle("active", i === step);
  });
}


