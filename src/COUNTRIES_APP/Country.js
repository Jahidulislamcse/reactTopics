import React from 'react'
import style from './country.module.css'

const Country = (props) => {

    const handleRemoveCountry = (name)=> {
        props.onRemoveCountry(name);
    }

    const {name, flags, capital, population, area} = props.country;

  return <article className={style.country}>
            <div>
                <img src={flags.png} 
                    alt={name.common} 
                    className={style.flag}/>

                <h4>{name.common}</h4>
                <h5>Population: {population}</h5>
                <h5>Capital: {capital}</h5>
                <h5>Area: {area} km*2</h5>

                <button  className={style.btn} 
                onClick={()=>{
                    handleRemoveCountry(name.common)
                }}> Remove </button>
            </div>
  </article>
    
  
}

export default Country
