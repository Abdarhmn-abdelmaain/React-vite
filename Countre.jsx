import { useState } from "react"

export default function Countre1() {
    const[countre,last]=useState(0);
    function run4(){
        if(countre>0){

            last(countre-5)
        }
    }
    function run3(){
        last(countre+5)
    }
    function run2(){
        if(countre>0){
            last(countre-1)
        }
    }

    function run(){
        last(countre+1)
    }
  return (
    <div>
        <p>Hllwo React:{countre}</p>
        <button  onClick={()=>{run()}}>+1</button>
        <button className="min"onClick={()=>{run2()}}>-1</button>
        <button onClick={()=>{run3()}}>+5</button>
        <button className="min" onClick={()=>{run4()}}>-5</button>
    </div>
  )
}
