import { useState } from 'react';

import data from './data'


function App() {


const [text,setText]=useState([]);

const [count,setCount]=useState(0);

const [note,setNote]=useState(false)

const handleSubmit=(event)=>{
  event.preventDefault();
  let amount= parseInt(count);
  console.log('form is submitted',count,amount);

  if(count<=0 || count>8){
    setNote(true)
  }
if (count>0 && count<=8){
  setText(data.slice(0,amount));
  setNote(false);
}
  
}


  return (
    <section className="section-center">
      <h3> tired of boring lorem ipsum ?</h3>
      <p> please enter value between 1 and 8 to generate paragraphs</p>
      <form className="lorem-form" onSubmit={handleSubmit}> 
      <label htmlFor="amount" > paragraphs :</label>
      <input  type="number" name="number" id="number" value={count} onChange={(event)=>setCount(event.target.value)}/>
      <button type="submit" className="btn" >generate</button>

      </form>

      {note && <article className="lorem-text"> <p className="warning"> please enter value between 1 and 8 !</p></article>}

      {!note  &&   
      <article className="lorem-text">
        
        {text.map((item,index)=>( 
          <p key={index}>{item}  </p>
        ))}
      </article>
      }
    </section>
  );
}

export default App;
