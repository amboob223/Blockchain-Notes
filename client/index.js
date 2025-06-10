

document.addEventListener("DOMContentLoaded",()=>{
    let text = document.getElementById("note");
let button = document.querySelector(".mint")
let result = document.getElementById("result")

let array = ["how to build a site","how to send a phishing email","how use wireshark","how to use metasploit","how to use meterperer","how to use solidity"]


    button.addEventListener("click",()=>{
        array.push(text.value)
        console.log(array)
    })


    const genbutton = document.getElementById("gen")
    const topic = document.querySelector(".topic")

        genbutton.addEventListener("click",()=>{
            let random = Math.random()
            let index = Math.floor(random * array.length)
                topic.innerHTML = array[index]
                console.log(topic.innerHTML)
        })




})

//so to fix we added queryselectorenot get element by class as that give us a list and when we did query selector we added a .
//so innertext is good for getting the elenmnt but use .value to get the actual value 