import { useState } from "react";

function Apples(){
    const [apples,setApples] =useState(0);

    return(
        <>
        <hr></hr>
        <hr></hr>
        <hr></hr>
            <h1> This is Apples Page</h1>
        <h1> Number of Apples : {apples}</h1>
        {apples===0 ?(
            <p style={{color:'red'}}>no apples left!</p>
        ):(
            <p style={{color:'green'}}>Woww You have some apples....</p>
        )}
        <button style={{color:'green'}}onClick={()=>setApples(apples + 1)}>Add One apple</button>
        <button style={{color:'red'}}onClick={()=>apples>0 && setApples(apples -1)}>Remove One apple</button>
        <button onClick={()=>setApples(0)}><b>Remove all </b></button>
        </>
    )
}
export default Apples;
