document.addEventListener("DOMContentLoaded", () => {
    let text = document.getElementById("note");
    let button = document.querySelector(".mint");
    let result = document.getElementById("result");
    let genbutton = document.getElementById("gen");
    let topic = document.querySelector(".topic");

    let array = [];

    button.addEventListener("click", () => {
        const input = text.value.trim();

        if (!input) {
            console.log("Input is empty");
            result.innerHTML = "Please type something first";
            return;
        }

        if (array.includes(input)) {
            console.log("NO Duplicates");
            result.innerHTML = "No duplicates";
            return;
        }

        array.push(input);
        console.log(array);

        text.value = "";
        result.innerHTML = "Note added!";
    });

    genbutton.addEventListener("click", () => {
        if (array.length === 0) {
            topic.innerHTML = "No topics yet!";
            return;
        }

        let index = Math.floor(Math.random() * array.length);
        topic.innerHTML = array[index];
        console.log(topic.innerHTML);
    });
});
