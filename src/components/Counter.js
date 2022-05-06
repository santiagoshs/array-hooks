import React, { useState } from 'react'

const Counter = () => {
    const[count, setCount]= useState(0)
    return (

        <div>
            
            <h1>veces que has hecho click {count}</h1>
            <button onClick={() => setCount(count + 1)}>Incrementar</button>
            <button onClick={() => setCount(count - 1)}>Decrementar</button>
        </div>
  )
}

export default Counter