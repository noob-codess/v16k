const typingText = document.getElementById('typing-text');
const text = "Experienced DevOps System Engineer with a focus on results who has worked in the fields of software configuration management, quality assurance, DevOps, build and release management for many years. Significant proficiency with Amazon Web Services (AWS), and Azure Infrastructure, Devops engineering, development and configuration, scripting tools, and system development tools are among the core competencies. Excellent technical troubleshooting abilities with system software and web platforms, experience previously assisting and working with system monitoring teams, DevOps engineers, and software development teams.";
let index = 0;

function type() {
  if (index < text.length) {
    typingText.innerHTML += text.charAt(index);
    index++;
    setTimeout(type, 50);
  }
}

type();



function updateDateTime() {
  console.log("updateDateTime function called");
  var today = new Date();
  var date = today.toLocaleDateString();
  var time = today.toLocaleTimeString();
  var dateTime = date + " " + time;
  document.getElementById("datetime").innerHTML = dateTime;
}

setInterval(updateDateTime, 1000);


function displayDay() {
  var daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  var currentDate = new Date();
  var currentDay = daysOfWeek[currentDate.getDay()];
  document.getElementById("current-day").innerHTML = currentDay;
}


function copyCode() {
  var code = document.querySelector('code');
  var range = document.createRange();
  range.selectNode(code);
  window.getSelection().removeAllRanges();
  window.getSelection().addRange(range);
  document.execCommand('copy');
  window.getSelection().removeAllRanges();
}


function goBack() {
  window.location.href = "projects.html";
}


// Get a reference to the container element
const container = document.getElementById('terminal-container');

// Create a new Terminal object
const term = new Terminal();

// Attach the terminal to the container element
term.open(container);

// Write some text to the terminal
term.write('Hello, world!');