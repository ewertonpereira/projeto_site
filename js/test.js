/*multiplies each array item by 2 and adds to the final value*/
function sumArray(array) {
  var sum = 0;

  for (let i = 0; i < array.length; i++) {
    sum += parseInt(array[i]) * 2;
  }
  console.log(sum);
  return sum;
}

/*get values by class name and returns an array*/
function getArray(className) {
  const array = [];
  let number = document.getElementsByClassName(className);

  for (let i = 0; i < number.length; i++) {
    if (number[i].checked) {
      array.push(number[i].value);
    }
  }
  console.log(array);
  return array;
}

var results = [];
console.log(results);

/*sum values ​​from each array */
function arraySum(analytical, friendly, authoritarian, expressive) {
  while (results.length) {
    results.pop();
  }

  for (let i = 0; i < 1; i++) {
    let analyticalSum = sumArray(getArray(analytical));
    results.push(analyticalSum);
    let friendlySum = sumArray(getArray(friendly));
    results.push(friendlySum);
    let authoritarianSum = sumArray(getArray(authoritarian));
    results.push(authoritarianSum);
    let expressiveSum = sumArray(getArray(expressive));
    results.push(expressiveSum);
  }
  console.log(results);

  return validate();
}

/*Chart details */
const personalities = ["Analytical", "Friendly", "Authoritarian", "Expressive"];
const answers = results;

var config = {
  type: "bar",

  data: {
    labels: personalities,
    datasets: [
      {
        label: "Points",
        data: answers,
        backgroundColor: [
          "rgba(255, 255, 0, 0.98)", // Yellow
          "rgba(0, 255, 0, 0.98)", // Green
          "rgba(227, 0, 208, 1)", // Pink
          "rgba(255, 151, 0, 1)", // Orange
        ],
        borderColor: [
          "rgba(255, 255, 0, 0.98)", // Yellow
          "rgba(0, 255, 0, 0.98)", // Green
          "rgba(227, 0, 208, 1)", // Pink
          "rgba(255, 151, 0, 1)", // Orange
        ],
        borderWidth: 1,
      },
    ],
  },
  options: {
    plugins: {
      title: {
        display: true,
        fontSize: 20,
        text: "RELATÓRIO DE  PERSONALIDADE",
        color: "rgba(1, 1, 1, 1)",
      },
    },
  },
};

/* create a chart with the answers*/
function showResult() {
  var container = document.getElementById("container");
  var canvasElement = document.createElement("CANVAS");
  var graphic = new Chart(canvasElement, config);
  container.appendChild(canvasElement);
  canvasElement.setAttribute("class", "container");

  const form = document.querySelector("#myform");
  form.remove();
  const finish = document.querySelector("#finish");
  finish.remove();

  var btn = document.createElement("BUTTON");
  var lbl = document.createTextNode("Refazer teste");
  btn.appendChild(lbl);
  btn.setAttribute("class", "buttons");

  btn.onclick = function () {
    window.location.href = "../html/test.html";
  };
  container.appendChild(btn);
}

function fullVector(array, question) {
  for (let i = 0; i < question.length; i++) {
    if (question[i].checked) {
      array.push(question[i].value);
    }
  }
}
const fullArray = [];
function getValues() {
  let analytical = document.querySelectorAll(".analytical:checked");
  let friendly = document.querySelectorAll(".friendly:checked");
  let authoritarian = document.querySelectorAll(".authoritarian:checked");
  let expressive = document.querySelectorAll(".expressive:checked");

  fullVector(fullArray, analytical);
  fullVector(fullArray, friendly);
  fullVector(fullArray, authoritarian);
  fullVector(fullArray, expressive);

  console.log(fullArray);
  return fullArray;
}

function validate() {
  let analyticalTest = false;
  let friendlyTest = false;
  let authoritarianTest = false;
  let expressiveTest = false;

  const analytical = document.querySelectorAll(".analytical");
  analyticalTest = checkArrays(analytical);
  console.log(analyticalTest);

  const friendly = document.querySelectorAll(".friendly");
  friendlyTest = checkArrays(friendly);
  console.log(friendlyTest);

  const authoritarian = document.querySelectorAll(".authoritarian");
  authoritarianTest = checkArrays(authoritarian);
  console.log(authoritarianTest);

  const expressive = document.querySelectorAll(".expressive");
  expressiveTest = checkArrays(expressive);
  console.log(expressiveTest);

  if (
    !analyticalTest ||
    !friendlyTest ||
    !authoritarianTest ||
    !expressiveTest
  ) {
    alert("Marque todas as perguntas.");
  } else {
    return showResult();
  }
}

function checkArrays(array) {
  const element = array;
  let answer = false;
  let adder = 0;

  for (let i = 0; i < element.length; i++) {
    if (element[i].checked) {
      adder++;
    }

    if (adder == 5) {
      answer = true;
    }
  }
  return answer;
  console.log(friendlyTest);
}
