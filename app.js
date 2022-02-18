import { animals } from './animals';

import React from 'react';
import ReactDOM from 'react-dom';
const background = <img class="background" alt="ocean" src="/images/ocean.jpg"/>
const title = <h1>Click an animal for a fun fact</h1>;
const images = []

for (let i=0;i<animals.length;i++){
  images.push(<img src={animals[i].image}/>);
}


const animalFacts = (
  <div>
    {title}
    {images}
  </div>
)

const test = animals[1].image
ReactDOM.render(images, document.getElementById('root'));
