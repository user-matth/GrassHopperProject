import { animals } from 'animalShelter.data';

let title = document.createElement('h1');
title.textContent = 'Adoptable Animals';
document.body.appendChild(title);

for (var animal of animals) {
    let animalName = document.createElement('h2')
    animalName.textContent = animal[0]
    
    document.body.appendChild(animalName)
}

