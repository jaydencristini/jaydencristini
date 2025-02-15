const stickySections = [...document.querySelectorAll('.sticky')]
console.log(stickySections)
let texts = [
  'about me',
  'this is Jayden, a current student<br>interested in enhancing society through code a a a a a a a a a a a a a a a a a a a a a a',
  'about me',
  'this is Jayden, a current student<br>interested in enhancing society through code',
  'about me',
  'this is Jayden, a current student<br>interested in enhancing society through code',
  'about me',
  'this is Jayden, a current student<br>interested in enhancing society through code',
]

for (i = 0; i < texts.length - 1; i += 2) {
  stickySections.forEach(section => {
    texts[i]; // txt
    let text = document.createElement('p');
    let heading = document.createElement('h1');
    heading.innerHTML = texts[i];
    text.appendChild(heading);
    text.innerHTML += texts[i + 1];
    section.querySelector('.scrollsection').appendChild(text);
  })
}

window.addEventListener('scroll', (e) => {
  for (let i = 0; i < stickySections.length; i++) {
    transform(stickySections[i]);
  }
})

function transform(section) {
  const offsetTop = section.parentElement.offsetTop;
  const scrollSection = section.querySelector('.scrollsection');
  let percentage = ((window.scrollY - offsetTop) / window.innerHeight) * 100;
  percentage = percentage < 50 ? 50 : percentage > 640 ? 640 : percentage;
  scrollSection.style.transform = `translate3d(${-(percentage / 5)}vw, 0, 0)`;
}

//-----------------------------------------

/*

var opacity = 0;
var intervalID = 0;

function fadeIn() {
  setInterval(show(), 200);
}

function show() {
  var display = document.querySelector(".display");
  opacity = Number(window.getComputedStyle(display)
    .getPropertyValue("opacity"));
  if (opacity < 1) {
    opacity = opacity + 0.1;
    body.style.opacity = opacity
  } else {
    clearInterval(intervalID);
  }
} 
  */

//-----------------------------------------

// let face = document.querySelector(".displayimage");

// window.addEventListener('scroll', function(){
//   var value = window.scrollY;

//   face.style.top = value * 0.625 * .5 + 'rem';
// })