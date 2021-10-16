import { animals } from 'animalShelter.data';

let title = document.createElement('h1');
title.textContent = 'Adoptable Animals';
document.body.appendChild(title);

for (let animal of animals) {
  
    let animalName = document.createElement('h2');
    animalName.textContent = animal[0];
    document.body.appendChild(animalName);
    
    let picture = document.createElement('img');
    picture.src = animal[1];
    document.body.appendChild(picture);
    
    let description = document.createElement('p');
    description.textContent = animal[2];
    document.body.appendChild(description);
    
    let button = document.createElement('button');
    button.textContent = 'Like';
    document.body.appendChild(button);
}