// =======================
// ELEMENT
// =======================
const boxLetter = document.getElementById("boxLetter");
const boxCake = document.getElementById("boxCake");

const content = document.querySelector(".content");
const pageLetter = document.getElementById("pageLetter");
const pageCake = document.getElementById("pageCake");

const flowerContainer = document.getElementById("flowerContainer");


// =======================
// TYPEWRITER
// =======================
function typeWriter(element, text, speed = 100) {
  element.innerHTML = "";
  let i = 0;

  function typing() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(typing, speed);
    }
  }

  typing();
}


// =======================
// FLOWER FROM BOTTOM
// =======================
function scatterFlowers() {
  const flowers = ["🌸","🌷","🌹","💮"];

  for (let i = 0; i < 25; i++) {
    const flower = document.createElement("div");
    flower.classList.add("flower");

    flower.innerHTML = flowers[Math.floor(Math.random() * flowers.length)];

    flower.style.left = Math.random() * 100 + "vw";
    flower.style.animationDuration = (3 + Math.random() * 3) + "s";
    flower.style.fontSize = (18 + Math.random() * 25) + "px";

    flowerContainer.appendChild(flower);

    setTimeout(() => {
      flower.remove();
    }, 6000);
  }
}


// =======================
// LETTER CLICK
// =======================
boxLetter.addEventListener("click", function () {

  content.style.display = "none";
  pageLetter.classList.remove("hidden");

  scatterFlowers();

  const title = pageLetter.querySelector("h1");
  title.classList.remove("slide-up"); // reset
  void title.offsetWidth;             // trigger reflow
  title.classList.add("slide-up");

  const message =
  "Happy Valentine’s Day, my most cherished and beloved heart. 💌 Verily, thou art the fairest blossom in the garden of mine affection, radiant as the dawn and gentle as twilight’s hush. May our fond devotion flourish everlasting.";

  const letterText = document.getElementById("letterText");

  setTimeout(() => {
    typeWriter(letterText, message, 100);
  }, 800);

});


// =======================
// CAKE CLICK
// =======================
boxCake.addEventListener("click", function () {

  content.style.display = "none";
  pageCake.classList.remove("hidden");

  scatterFlowers();

  const title = pageCake.querySelector("h1");
  title.classList.remove("slide-up");
  void title.offsetWidth;
  title.classList.add("slide-up");

  const message =
  "Happy Valentine’s Day once more, my sweetest soul. 🌹 In sooth, thy smile outshineth the radiant morn, and thy tender spirit doth kindle warmth within my weary heart. Bound by devotion most ardent and sincere, I remain ever thine.";

  const cakeText = document.getElementById("cakeText");

  setTimeout(() => {
    typeWriter(cakeText, message, 100);
  }, 800);

});
