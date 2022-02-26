import { animals } from './animals';
import React from 'react';
import ReactDOM from 'react-dom';

const showBackground = false;
const background = <img className='background' alt='ocean' src='/images/ocean.jpg' />;

const title = '';


const images = [];
for (const animal in animals) {
  images.push(<img
    key={animal}
    className='animal'
    alt={animal}
    src={animals[animal].image}
    aria-label={animal}
    role='button' 
    onClick={displayFact()}
    />)
};


function displayFact(e){
  let randInt = Math.floor(Math.random() * 3);
  let daAnimal = animals[e.target.alt];
  let fact = daAnimal.facts[randInt];
  //document.getElementById('fact').innerHTML = selectedfact;
}
const animalFacts = (
  <div>
    <h1>{ title === '' ? 'Click an animal for a fun fact' : title }</h1>
    {(showBackground === true) && background}
    <p id="fact">hello</p>
    <img 
    className='background'
    alt='ocean'
    src='/images/ocean.jpg' 
    />
    <div className='animals'>{images}</div>
  </div>
);

ReactDOM.render(animalFacts, document.getElementById('root'))
