
import { quizData } from "./data.js";

// console.log(quizData)

const quizContainer = document.querySelector(".quiz-container")

quizData.forEach((questionObj, index) => {
    const form = document.createElement("form")
    const h3 = document.createElement("h3")
    const button = document.createElement("button")

    button.type = "submit"
    button.innerHTML = "Submit"

    form.id = `qn-${index}`
    h3.innerHTML = `${index + 1}. ${questionObj.question}`

    const radiosHolder = []
    const labelHolder = []
    const radiosVal = ["a", "b", "c", "d"]

    for (let i = 0; i < 4; i++) {
        const radio = document.createElement("input")
        const label = document.createElement("label")

        radio.type = 'radio'
        radio.required = "true"
        radio.id = `opt-${index}-${i + 1}`
        radio.name = `question${index}`
        radio.value = radiosVal[i]

        label.htmlFor = radio.id
        label.innerHTML = questionObj[radiosVal[i]]

        labelHolder.push(label)
        radiosHolder.push(radio)
    }

    // Appending of all elements to the form
    form.appendChild(h3)
    for (let i = 0; i < radiosHolder.length; i++) {
        const div = document.createElement("div")
        div.classList += "option-conta"
        div.append(radiosHolder[i], labelHolder[i])
        form.appendChild(div)
    }
    // console.log(form)
    form.appendChild(button)
    quizContainer.appendChild(form)

})

// Add a final summary element after all forms
const summaryDiv = document.createElement("div")
summaryDiv.id = "summary"
summaryDiv.style.display = "none"
summaryDiv.innerHTML = "<h3> Quiz Summary</h3> <p id='result'> </p> <button id='reload'> Reload </button>"
quizContainer.appendChild(summaryDiv)

const questionsList = document.querySelectorAll("form")
const resultParagraph = document.getElementById("result")

let currentFormIndex = 0
let totCorrectAns = 0

// Show the first form initially
if (questionsList.length > 0) {
    questionsList[0].classList.add('active');
}

// Show summary after last question
function showSummary() {
    summaryDiv.style.display = "block"
    resultParagraph.innerHTML = `You answered ${totCorrectAns} out of ${quizData.length} questions correctly.`
}


// function to show next question or summary in case of last question
function showNextForm() {
    if (currentFormIndex < questionsList.length - 1) {
        questionsList[currentFormIndex].classList.remove("active")
        currentFormIndex++
        questionsList[currentFormIndex].classList.add("active")
    } else {
        questionsList[currentFormIndex].classList.remove("active")
        showSummary()
    }
}

questionsList.forEach((form, index) => {
    form.addEventListener("submit", (e) => {
        e.preventDefault()

        const radios = e.target.elements
        let selectedValue = ''
        console.log(radios)
        if (radios[4].innerHTML === "Submit") {
        for (let i = 0; i < radios.length; i++) {
            if (radios[i].checked) {
                selectedValue = radios[i].value;
                break;
            }
        }
    }

        if (selectedValue === quizData[index].correct) {
            totCorrectAns++
        }

        // showNextForm()
        showCorrectAns(quizData[index].correct)
        // console.log(selectedValue)
    })
})

const reloadBtn = document.getElementById("reload")

reloadBtn.addEventListener("click", () => {
    location.reload(true)
})

function showCorrectAns(correctAns) {
    const currentForm = questionsList[currentFormIndex]
    // alert(currentFormIndex)
    const ansDiv = document.createElement("div")
    ansDiv.id = "correctAnsDiv"
    ansDiv.innerHTML = `<p>The Correct ans is "<b>${correctAns}</b>"</p>`

    const button = currentForm.querySelector('button')

    currentForm.insertBefore(ansDiv, button)
    button.innerHTML = "Next Question"
    button.type = "button" 

    button.onclick = function () {
        showNextForm()
        // console.log("onclick working on buttons")
        ansDiv.remove();
        button.innerHTML = "Submit"
        button.type = "submit" 
    }
}
