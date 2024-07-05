const THUMBNAILS = ["pink", "purple", "red", "white", "yellow"];

const ULElement = document.querySelector('ul');

THUMBNAILS.forEach(thumbnail => {
  const LIElement = document.createElement('li');
  const IMGElement = document.createElement('img');
  IMGElement.src = "images/flowers-" + thumbnail + "-small.jpg";
  IMGElement.alt = thumbnail + " flowers";
  LIElement.appendChild(IMGElement);
  ULElement.appendChild(LIElement);
});

const LIElements = document.querySelectorAll('li');

const featuredImage = document.querySelector('figure').children[0];

const FIGCAPTIONElement = document.querySelector('figcaption');

LIElements.forEach(li => {
  li.children[0].addEventListener('click', (event) => {
    featuredImage.src = "images/flowers-" + event.target.src.split('/')[event.target.src.split('/').length - 1].split('-')[1] + "-large.jpg";
    FIGCAPTIONElement.textContent = event.target.alt;
    
    li.classList.remove('inactive');
    Array.from(LIElements).filter(el => el !== li).forEach(el => el.classList.add('inactive'));
  });
});