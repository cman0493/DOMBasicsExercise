// 1
const portillos = document.getElementById('portillos');

// 2
const images = document.getElementsByTagName('img');

// 3
const center = document.getElementsByClassName('center');

// 4
const ginosEast = document.querySelector('div');

// 5
const pTags = document.querySelectorAll('p');

// 6
const h1 = document.querySelector('h1');
h1.innerText = "Matt's Favorite Places To Eat In Sweet Home Chicago!";

// 7
const others = document.querySelector('#others');
others.innerHTML = `<h3>Other favorites</h3>`;

// 8
const aTag = document.querySelector('a');
aTag.href = `https://www.choosechicago.com/articles/food-drink/5-classic-chicago-foods/`;

// 9
const h1 = document.getElementsByName(`h1`);
h1.classList.add('background', 'text-color');

// 10
h1.classList.remove('background');

// 11
const h4 = document.createElement('h4');
h4.innerText = "CHICAGO: A great place to eat!";
const body = document.querySelector('body');
body.prepend(h4);

// 12
const h5 = document.createElement('h5');
h5.innerText = "See you in the Windy City Sometime!";
aTag.insertAdjacentElement('afterend', h5);

// 13
const jaysBeef = document.querySelector('li');
jaysBeef.remove();

// 14
const divs = document.querySelectorAll('div');

for (div of divs){
  div.classList.toggle('background');
}

// 15
const hungry = [
  "Thanks",
  "A",
  "Lot",
  "Now",
  "I",
  "Am",
  "Hungry"
];

for (word of hungry){
  const span = document.createElement('span');
  span.innerText = word;
  body.append(span);
}