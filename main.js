

// let form = document.querySelector(".form")
// let input = document.querySelector(".input")
// let button = document.querySelector(".button")

// form.addEventListener("submit" ,(evt) =>{
//     evt.preventDefault()
//     let value = input.value
//     let newText = document.createElement("h1")
//     newText.textContent = value
//     document.body.appendChild(newText)
//     input.value = ""
//     newText.style.color = "red"
//     document.body.style.backgroundColor =value
// }
// )


const numbers = [25,45,12, 100, 12, 43, 83, 98, 67, 49, 50, 77];


numbers.forEach(item =>{
    let newText = document.createElement("h1")
    newText.textContent = item
    if(item >= 50 ){
        newText.style.backgroundColor = "red"  
    }else{
        newText.style.backgroundColor = "green"
       newText.style.color = "white"
    }
    
    document.body.append(newText)
}

)