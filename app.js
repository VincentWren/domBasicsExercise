const xMen = document.getElementById(`x-men`);
console.log(xMen);
console.dir(xMen);

const centered = document.getElementsByClassName(`center`);
console.log(centered);
console.dir(centered);

const batman = document.querySelector(`batman`);
console.log(batman);
console.dir(batman);

const h3s = document.querySelectorAll(`h3`);
console.log(h3s);
console.dir(h3s);

const hOne = document.querySelector(`h1`);
hOne.innerText = `The Best Animated Superhero TV Shows Ever!`;
console.dir(hOne);

const honorableMentions = document.getElementById(`honorable-mentions`);
console.log(honorableMentions);
console.dir(honorableMentions);

const p = document.querySelector(`body > p`);
console.dir(p);
console.log(p.innerHTML);
p.innerHTML = `OTHER GREAT SHOWS`;
console.log(p.innerHTML);

const aTag = document.getElementsByTagName(`a`);
console.dir(aTag);
aTag.href = "https://fandomwire.com/15-greatest-animated-superhero-shows-ever-made-ranked/";

h1.classList.add(`background`,`text-color`);
console.log(h1.classList);

h1.classList.remove(`background`);
console.log(h1.classList);

const h4 = document.createElement(`h4`);
console.dir(h4);
h4.innerText = `Is Avatar: The Last Airbender A Superhero Show?`;
console.log(h4.innerText);
const body = document.querySelector(`body`);
body.prepend(h4);

const h5 = document.createElement(`h5`);
console.dir(h5);
h5.innerText = `Heros in a half shell Turtle Power!`;
console.log(h5.innerText);
h5.insertAdjacentElement(`afterend`, aTag);

const liRemover = document.querySelector(`li`);
liRemover.remove();