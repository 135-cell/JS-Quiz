let questions = [
  {
    id: 1,
    question: "What is the full form of RAM ?",
    answer: "Random Access Memory",
    options: [
      "Random Access Memory",
      "Randomely Access Memory",
      "Run Aceapt Memory",
      "None of these"
    ]
  },
  {
    id: 2,
    question: "What is the full form of CPU?",
    answer: "Central Processing Unit",
    options: [
      "Central Program Unit",
      "Central Processing Unit",
      "Central Preload Unit",
      "None of these"
    ]
  },
  {
    id: 3,
    question: "What is the full form of E-mail",
    answer: "Electronic Mail",
    options: [
      "Electronic Mail",
      "Electric Mail",
      "Engine Mail",
      "None of these"
    ]
  }
];

let questionCount = 0;
let quizPoint = 0;

window.onload = function () {
  show(questionCount);
};

function next() {

  //if the question is last then redirect to final page
  if (questionCount == questions.length - 1) {
    location.href = "end.html";
    return;
  }
  console.log(questionCount);

  let userAnswer = document.querySelector("li.option.active").innerHTML;
  //check userAnswer
  if (userAnswer == questions[questionCount].answer) {
    quizPoint += 10;
    sessionStorage.setItem("points", quizPoint);
  }
  console.log(quizPoint);

  questionCount++;
  show(questionCount);
}

function show(count) {
  let question = document.getElementById("questions");
  let [first, second, third, fourth] = questions[count].options;

  question.innerHTML = `<h2>Q${count + 1}. ${questions[count].question} </h2>
  <ul class="optionGroup">
<li class="option ">${first}</li>
<li class="option ">${second}</li>
<li class="option ">${third}</li>
<li class="option ">${fourth}</li>
</ul> `;

toggleActive();
}
  function toggleActive() {
    let option = document.querySelectorAll("li.option");

    for (let i = 0; i < option.length; i++) {
      option[i].onclick = function () {
        for (let j = 0; j < option.length; j++) {
          if (option[j].classList.contains("active")) {
            option[j].classList.remove("active");
          }
        }
        option[i].classList.add("active");
      }
    }
  } 