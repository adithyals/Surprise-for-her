
/* ==================================
   BIRTHDAY WEBSITE - INTERACTIONS
================================== */

// 1. GET WEBSITE ELEMENTS

const surpriseBtn = document.getElementById("surpriseBtn");
const letterSection = document.getElementById("letter");
const floatingElements = document.getElementById("floatingElements");


// 2. FLOATING DECORATIONS

const decorations = [
    "❤️",
    "💕",
    "🌸",
    "✨",
    "⭐",
    "🌷",
    "💖"
];

function createFloatingDecoration() {

    const decoration = document.createElement("span");

    decoration.innerHTML =
        decorations[Math.floor(Math.random() * decorations.length)];

    decoration.style.position = "absolute";
    decoration.style.left = Math.random() * 100 + "vw";
    decoration.style.bottom = "-40px";

    decoration.style.fontSize =
        (Math.random() * 15 + 15) + "px";

    decoration.style.opacity =
        Math.random() * 0.5 + 0.4;

    decoration.style.animation =
        `floatUp ${Math.random() * 5 + 6}s linear forwards`;

    floatingElements.appendChild(decoration);

    setTimeout(() => {
        decoration.remove();
    }, 11000);
}


// 3. CREATE FLOATING ANIMATION

const animationStyle = document.createElement("style");

animationStyle.innerHTML = `
@keyframes floatUp {

    0% {
        transform: translateY(0) rotate(0deg);
        opacity: 0;
    }

    15% {
        opacity: 0.8;
    }

    100% {
        transform: translateY(-110vh) rotate(360deg);
        opacity: 0;
    }

}
`;

document.head.appendChild(animationStyle);


// 4. AUTOMATIC FLOATING DECORATIONS

createFloatingDecoration();

setInterval(() => {

    createFloatingDecoration();

}, 700);


// 5. SURPRISE BUTTON

surpriseBtn.addEventListener("click", function() {

    // Scroll to birthday letter

    letterSection.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });

    // Change button message

    surpriseBtn.innerHTML = "Surprise Opened! 🎉";

    // Create extra decorations

    for (let i = 0; i < 25; i++) {

        setTimeout(() => {

            createFloatingDecoration();

        }, i * 100);

    }

});


// 6. CONSOLE MESSAGE

console.log("Birthday surprise website is ready! ❤️");
