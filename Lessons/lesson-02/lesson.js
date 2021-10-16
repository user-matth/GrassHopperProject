import { animals } from 'cuteAnimals.data';

let title = document.createElement('h1');
title.textContent = 'Cute Animals';
document.body.appendChild(title);

for (let animal of animals) {
    
    let name = document.createElement('h2');
    name.textContent = animal[0];
    
    let img = document.createElement('img');
    img.src = animal[1];
    
    let description = document.createElement('p');
    description.textContent = animal[2];
    
    document.body.appendChild(name);
    document.body.appendChild(img);
    document.body.appendChild(description);
}

