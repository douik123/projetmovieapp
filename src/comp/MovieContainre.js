import React  from 'react';
import imagelogan from './../logan.png'
import imageevades from './../evades.png'
import imageteen from './../Teen.png'
import imageDisaster from './../Disaster.png'
import MovieCard from './MovieCard.js'

  
function App() {
    const produit = [
        {image : <img src={imageevades} alt="camera" className='cardimage' /> , 
        name: "Les Évadés",
        description:"Le banquier Andy Dufresne est arrêté pour avoir tué sa femme et son amant. Après une dure adaptation, il tente d'améliorer les conditions de la prison et de redonner de l'espoir à ses compagnons.",
        rate:5
        },
        {image : <img src={imagelogan} alt="camera" className='cardimage' /> , 
        name: "Logan",
        description:"Dans un avenir proche, Logan, épuisé, s'occupe du professeur X souffrant, dans un recoin de la frontière mexicaine. Cependant, les tentatives de Logan pour se cacher du monde et son héritage sont bouleversés lorsqu'une jeune mutante arrive, poursuivie par les forces du mal.",
        rate:4
        },
        {image : <img src={imageteen} alt="camera" className='cardimage' /> , 
        name: "Teen Wolf Too",
        description:"Todd Howard is a struggling college student. Nothing seems to be going very well for him, until he turns into a wolf.",
        rate:2
        },
        {image : <img src={imageDisaster} alt="camera" className='cardimage' /> , 
        name: "Disaster Movie",
        description:"Trois filles belles mais sombres d'esprit affrontent la nuit de l'enfer alors que chaque catastrophe naturelle possible se produit l'une après l'autre.",
        rate:1
        },
        
      ];
  return (
    <div className='allbas'>
    {
    produit.map(element=>(
   
      <MovieCard data={element}/>
      
      

      
    ))
  }
    </div>
  
    )
}

export default App;