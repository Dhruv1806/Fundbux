import React, { useState } from 'react'
import ScrollTrigger from 'react-scroll-trigger';
export const Try1 = () => {
  const [width, setWidth] = useState(0);

  

  return (
    <>
   <h1>{width}</h1>
   <button onClick={()=>setWidth(width+1)}> click</button>
    </>
  );
}
