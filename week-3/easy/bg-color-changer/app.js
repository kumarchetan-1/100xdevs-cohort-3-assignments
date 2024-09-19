


const allBtns = document.querySelectorAll("ul>li")
const body  = document.querySelector("body")
const ul = document.querySelector("#buttonsContainer")

// allBtns.forEach(btn => {
    ul.addEventListener("click", (e)=>{
        const btn = e.target.closest("li")
        let color = btn.getAttribute("id")
      if (btn && btn.id !== "addMoreColor") {
        if (btn.hasAttribute("data-color")) {
             color = btn.getAttribute("data-color")
        }
        console.log(btn.getAttribute("data-color"))
        if (CSS.supports('color', color)) {
          body.style.backgroundColor = color
        } else{
          body.style.backgroundColor = "white"
        }
      }
    })
      

// });

const addMoreBtn = document.getElementById("addMoreColor")
const colorPickerContainer = document.querySelector("#colorPickerConta")
addMoreBtn.addEventListener("click", (e)=>{
    colorPickerContainer.style.display = "block"
})


const colorPicker = document.querySelector("#colorPicker")
const submit = document.querySelector("form")

submit.addEventListener("submit", (e)=>{
    e.preventDefault();
    let li = document.createElement("li")
    const color = colorPicker.value
    console.log(color)
    li.innerHTML = `Color : ${color}`
    li.setAttribute("data-color", color)
    li.style.backgroundColor = color
    if(color === "#000000"){
        li.style.color = "#ffffff"
    }
    const addMoreLi = document.querySelector("#addMoreColor")
    ul.insertBefore(li, addMoreLi)
    colorPickerContainer.style.display = "none"
})
