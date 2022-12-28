import { Utils } from "./utils.js";
import { animalArray } from "./runners.js";
const animalShowCase = document.getElementById("animal-show-case");
const btnStart = document.getElementById("btn-start");
const btnPick = document.getElementById("btn-pick");
let id;
btnPick.addEventListener('click', () => {
    // cleaning
    animalArray.forEach((currentAnimal) => {
        currentAnimal.isChosen = false;
        currentAnimal.translateX = 0;
        let img = document.getElementById(currentAnimal.id);
        img.style.transform = `translateX(${currentAnimal.translateX}px)`;
        img.classList.remove("chosen-animal");
    });
    //pick the random animal
    const random = Utils.random(0, 4);
    const chosenAnimal = animalArray[random];
    chosenAnimal.isChosen = true;
    const img = document.getElementById(chosenAnimal.id);
    img.classList.add("chosen-animal");
});
btnStart.addEventListener("click", () => {
    const chosenAnimal = animalArray.filter((e) => e.isChosen)[0];
    if (chosenAnimal) {
        // alert(`YES ${chosenAnimal}`)
        // sound
        setTimeout(() => {
            const audio = new Audio(`./media/${chosenAnimal.voice}.wav`);
            audio.play();
        }, 1000);
        // movement
        for (let i = 0; i < 5; i++) {
            setTimeout(() => {
                animalArray.map((currentAnimal) => {
                    currentAnimal.translateX = i * currentAnimal.step;
                    let img = document.getElementById(currentAnimal.id);
                    img.style.transform = `translateX(${currentAnimal.translateX}px)`;
                });
            }, i * 1000);
        }
    }
    else {
        // alert(`NO ${chosenAnimal}`)
        alert('Pick an Animal!');
    }
});
// add images maybe
animalArray
    .sort((a, b) => (Math.random() > 0.5 ? 1 : -1))
    .map((animal) => {
    const image = document.createElement("img");
    image.src = `images/${animal.img}`;
    image.classList.add("col", "image-fluid");
    image.id = animal.id;
    //image.addEventListener('click', ()=>{})
    return image;
})
    .forEach((img) => {
    animalShowCase.appendChild(img);
});
