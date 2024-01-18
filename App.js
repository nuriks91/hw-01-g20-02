import Home from "./Home"
import Nur from "./Nurs"
import { useState } from "react";
import minuse from './img/minus.jpg'
import firth from './img/first.jpg'
import second from './img/second.jpg'
import third from './img/third.jpg'
import forth from './img/forth.jpg'
import fifth from './img/fifth.jpg'
import sixth from './img/sixth.jpg'
import seventh from './img/seventh.jpg'
import eith from './img/eith.jpg'
import ninth from './img/ninth.jpg'
import tenth from './img/tenth.jpg'
import eleventh from './img/11.jpg'


function App() {
  const [num, setNum] = useState(0)

  return (
    <div>
      <h1>adadad</h1>
      <h1>{num}</h1> 
      <div className="buttons">
        <button onClick={()=>{
          if(num < 15)setNum(num + 1)
        }}>+</button>
        <button onClick={()=>{
          if(num > -1)setNum(num - 1)
        }}>-</button>

        <button onClick={()=>{
          setNum(0)
        }}>reset</button>

        <button onClick={()=>{
          setNum(15)
        }}>max</button>

        <button onClick={() => setNum(Math.min(num + 5, 15))}>+5</button>

        <button onClick={() => setNum(Math.max(num - 5, 0))}>-5</button>
        
      </div>
<br/>
<img className="img" src={
        num < 0
        ? minuse
        : num < 0
        ? firth
        : num < 1
        ? second
        : num < 2
        ? third
        : num < 3
        ? forth
        : num < 4
        ? fifth
        : num < 5
        ? sixth
        : num < 6
        ? seventh
        : num < 7
        ? eith
        : num < 8
        ? ninth
        : num < 9
        ? tenth
        : num < 10
        ? eleventh
        : num < 11
      } alt="" />
       </div>
  );
}

export default App;


