export const runners = {
    dog: {
        name: "dog",
        id: "dog",
        voice: "woof",
        img: "dog.png",
        step: 50,
    },
    horse: {
        name: "horse",
        id: "horse",
        voice: "neigh",
        img: "horse.png",
        step: 70,
    },
    duck: {
        name: "duck",
        id: "duck",
        voice: "quack",
        img: "duck.png",
        step: 40,
    },
    chick: {
        name: "chick",
        id: "chick",
        voice: "cheap",
        img: "chick.png",
        step: 30,
    },
};

//השקעה - משפר מהימנות של הטיפוסים - אם נקבל אובייקט לא תקין נקבל שגיאה
export interface AnimalType {
    name: string;
    id: string;
    voice: string;
    img: string;
    step: number;
}

export class Animal implements AnimalType {
    name: string;
    id: string;
    voice: string;
    img: string;
    step: number;
    //the user selects an animal
    isChosen: boolean;
    //for css transform (move)
    translateX: number;

    constructor(
        name: string,
        id: string,
        voice: string,
        img: string,
        step: number,
        isChosen: boolean,
        translateX: number
    ) {
        this.name = name;
        this.id = id;
        this.voice = voice;
        this.img = img;
        this.step = step;
        this.isChosen = isChosen;
        this.translateX = translateX;
    }
}

export let animalArray: Animal[] = [];

for (let k in runners) {
    let key = k as keyof typeof runners;

    let animal = runners[key];
    animalArray.push(
        new Animal(
            animal.name,
            animal.id,
            animal.voice,
            animal.img,
            animal.step,
            false,
            0));
}
