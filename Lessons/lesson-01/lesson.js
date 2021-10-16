import { puppyProfile } from 'animals.data';

let title = document.createElement('h1');
title.textContent = 'Pet of the Month';

let dogName = document.createElement('h2');
dogName.textContent = puppyProfile[0];

let img = document.createElement('img');
img.src = puppyProfile[1];

let description = document.createElement('p');
description.textContent = puppyProfile[2];

let button = document.createElement('button');
button.textContent = 'vote';
button.addEventListener( 'click', () => {
button.textContent = 'voted';
});
document.body.appendChild(title);
document.body.appendChild(dogName);
document.body.appendChild(img);
document.body.appendChild(description);
document.body.appendChild(button);