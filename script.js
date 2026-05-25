document.addEventListener("DOMContentLoaded", function() {
    const container = document.querySelector(".container");
    const button = document.querySelector(".button");
    const input = document.querySelector("input");

    const crySound = new Audio("./sad.mp3");
    const smileSound = new Audio("./happy.mp3");

    const animateStart = () => {
        container.classList.add("told-stan");
    }

    const inputChangeHandler = (event) => {
        const value = event.target.value;

        if (value.includes("Mico's")) {
            container.classList.add("eye-squint");
        } else {
            container.classList.remove("eye-squint");
        }

        if (value === "Mico's jokes are corny!") {
            container.classList.add("animating-tear");

            crySound.currentTime = 0;
            crySound.play();
        } else if (container.classList.value.includes("animating-tear")) {
            container.classList.remove("animating-tear");
        }

        if (value === "Mico's jokes makes me smile!") {
            container.classList.add("animating-smile");

            smileSound.currentTime = 0;
            smileSound.play();
        } else if (container.classList.value.includes("animating-smile")) {
            container.classList.remove("animating-smile");
        }
    }

    button.addEventListener("click", animateStart);

    input.addEventListener("input", (event) =>
        inputChangeHandler(event)
    );
});