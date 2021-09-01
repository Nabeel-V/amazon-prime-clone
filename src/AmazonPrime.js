import React from 'react'
import Slider from './Components/Banner/Slider'
import RowPost from './Components/RowPost/RowPost'
import { Action,Originals,ComedyMovies,HorrorMovies,RomanceMovies,Documentaries  } from './urls'


function AmazonPrime() {
    return (
      <div>
        <Slider />
        <RowPost url={Originals} title="Watch Next TV and Movies" />
        <RowPost url={Action} isSmall title="Action" />
        <RowPost url={RomanceMovies} isSmall title="Romance Movies" />
        <RowPost url={ComedyMovies} isSmall title="Comedy Movies" />
        <RowPost url={HorrorMovies} isSmall title="HorrorMovies" />
        <RowPost url={Documentaries} isSmall title="Documentaries" />
      </div>
    );
}

export default AmazonPrime
