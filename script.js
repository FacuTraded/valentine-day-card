const card = document.querySelector('.card');
const card2 = document.getElementById('card');
const container = document.querySelector('.container');
const buttonContainer = document.querySelector('.buttonContainer');
const yesButton = document.querySelector('.yesButton');
const noButton = document.querySelector('.noButton');


container.addEventListener('mouseenter', () => {
  card.style.top = '-90px';
  buttonContainer.style.opacity = '1';
});

let catSadArray = ['cat-sad', 'cat-sad2', 'cat-sad3', 'cat-sad4', 'cat-sad5', 'cat-sad6', 'cat-sad7', 'cat-sad8', 'cat-sad9', 'cat-sad10', 'cat-sad11', 'cat-sad12', 'cat-sad13', 'cat-sad14', 'cat-sad15', 'cat-sad16', 'cat-sad17', 'cat-sad18', 'cat-sad19', 'cat-sad20']
let catLoveArray = ['love1', 'love2', 'love3', 'love4', 'love5', 'love6', 'love7', 'love8', 'love9', 'love10', 'love11', 'love12', 'love13', 'love14', 'love15', 'love16', 'love17', 'love18', 'love19', 'love20']
let number = 0;
function preloadImage(url) {
  var img=new Image();
  img.src=url;
}

for (let i = 0; i < catSadArray.length; i++) {
  preloadImage(`images/sad/${catSadArray[i]}.jpg`);
}
for (let i = 0; i < catLoveArray.length; i++) {
  preloadImage(`images/love/${catLoveArray[i]}.jpg`);
}

noButton.addEventListener('click', () => {
  card.style.top = '-160px';
  card.style.height = '280px';
  card.innerHTML = `<img src="images/sad/${catSadArray[number]}.jpg" alt="gato con un arma" style="width: 100%;z-index: 1; position: relative;">`;
  number++;
  if (number === catSadArray.length) {
    number = 0;
  }
});

yesButton.addEventListener('click', () => {
  card.style.top = '-160px';
  card.style.height = '280px';
  card.innerHTML = `<img src="images/love/${catLoveArray[number]}.jpg" alt="gato con un arma" style="width: 100%;z-index: 1; position: relative;">`;
  number++;
  if (number === catSadArray.length) {
    number = 0;
  }
});
