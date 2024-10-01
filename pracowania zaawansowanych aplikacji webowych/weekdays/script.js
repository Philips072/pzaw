const currentDay = document.querySelector('.current-day')
const funFact = document.querySelector('.fun-fact')


const facts = [
    'Zabawny fakt 1', 
    'Zabawny fakt 2',
    'Zabawny fakt 3',
    'Zabawny fakt 4',
    'Zabawny fakt 5',
    'Zabawny fakt 6',
    'Zabawny fakt 7',
]


var day = new Date();
// console.log(day);

currentDay.textContent = day.toLocaleString("pl", {weekday: "long"})

const ShowRandomFact = () => {
    const number = Math.floor(Math.random() * (facts.length ))
    funFact.textContent = facts[number]
}
ShowRandomFact()
