import React from 'react'
import { useEffect, useState } from 'react'

const FetchData = () => {
 const[datas, setData] = useState([]);
 useEffect(() => {
   const fetchData=async()=>{
    const response = await fetch("https://jsonplaceholder.typicode.com/photos");
    const data = await response.json();
    setData(data);
    console.log(response.status);
   }
   fetchData();

   
 
 }, [])
 

  return (
    <div>
      <h1>Data Fetching through Api</h1>
      {datas.map((item)=><div key={item.albumId}>
          <img src={item.thumbnailUrl.replace('via.placeholder.com', 'placehold.co')}></img>
          <p>{item.title}</p>
      </div>)}

    </div>
  )
}

export default FetchData
