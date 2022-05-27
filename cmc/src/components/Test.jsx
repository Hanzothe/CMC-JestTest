import React, {useState} from 'react'
import '../global.css'

export default function Index() {

const [nInit, setnInit]=useState(null);
const [print, setPrint]=useState(false);

function getnInit(val)
{
  setnInit(val.target.value)
  setPrint(false);
  console.warn(val.target.value)
}
  return (
    
    <div>
       
       <input
        type="Number"
        id="numeroinicial"
        name="numeroinicial"
        className="border-solid border-zinc-500 border-2 h-20 w-96"
        onChange={getnInit}
      />
      <button className="border-solid border-2 bg-zinc-500 border-white text-white h-20 w-60" onClick={()=> setPrint(true)}   >
        Convert
      </button>
    {
    print?
    <span id="resposta" className="text-white">
        { nInit }
      </span>
      :null
    }

      
    </div>
  )
}




