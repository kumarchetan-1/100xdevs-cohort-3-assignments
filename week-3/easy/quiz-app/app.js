
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
    h3.innerHTML = questionObj.question
    const radiosHolder = []
    const labelHolder = []
    const radiosVal = ["a", "b", "c", "d"]
    for (let i = 0; i < 4; i++) {
        const radio = document.createElement("input")
        const label = document.createElement("label")
        radio.type = 'radio'
        radio.id = `opt-${index}-${i + 1}`
        radio.name = `question${index}`
        radio.value = radiosVal[i]
        label.htmlFor = radio.id
        labelHolder.push(label)
        radiosHolder.push(radio)
    }

    // Injecting the values of all options to the labels of radios
    // console.log(radiosHolder)
    labelHolder.forEach((label, index) => {
        label.innerHTML = questionObj[radiosVal[index]]
        //   console.log(label.innerHTML)
    })

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
    // const options = [questionObj.a, questionObj.b, questionObj.c, questionObj.d]
    const correctAns = questionObj.correct

})


const questionsList = document.querySelectorAll("form")

questionsList.forEach((ques) => {

    ques.addEventListener("submit", (e) => {
        e.preventDefault()
        const radios = e.target.elements
        //  console.log(radios)
        let selectedValue = ''
        for (let i = 0; i < radios.length; i++) {
            if (radios[i].checked) {
                selectedValue = radios[i].value;
                showNextForm()
                break;
            }
        }
        console.log(selectedValue)
    })
})

let currentFormIndex = 0

function showNextForm() {
    if (currentFormIndex < questionsList.length - 1) {
        questionsList[currentFormIndex].classList.remove("active")
        currentFormIndex++
        questionsList[currentFormIndex].classList.add("active")
    } else {
        console.log("You have reached the last form")
    }
}

// Show the first form initially
if (questionsList.length > 0) {
    questionsList[0].classList.add('active');
}