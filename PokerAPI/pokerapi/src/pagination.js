import React from "react";

const MAX_ITEMS=9;
const MAX_LEFT=(MAX_ITEMS-1)/2;
const Pagination=({limit,total,offset,setOffset})=>{
    const current= offset ? (offset/limit)+ 1 : 1;
    const pages=Math.ceil(total/limit); //valor minimo que quero
    const first= Math.max(current-MAX_LEFT,1); //valor maximo que quero
    return (
        <ul>
            {Array.from({length:MAX_ITEMS}).map((_,index)=>index+first)
            .map((pages)=>(
                <li key={pages}>
                    <button onClick={()=>setOffset((pages-1)*limit)}>{pages}</button>
                    
                    </li>
            ))}
        </ul>
    )
}
export default Pagination;