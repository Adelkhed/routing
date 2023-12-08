import React from 'react'
import { useParams } from 'react-router-dom'
const StyledPage = () => {
    const {word, textColor,color}= useParams();

    const styles ={
        color:textColor,
        backgroundColor:color,
           }
  return (
    <div>
        <h1 style={styles}>The word is : {word}</h1>
    </div>
  )
}

export default StyledPage