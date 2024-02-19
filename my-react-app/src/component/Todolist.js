import React, { useState } from "react";

const Todolist = () => {
    const[activity,setActivity]=useState("")
    const[listData,setListData]=useState([])
    function addActivity(){
        setListData([...listData,activity])
        console.log(listData)
        setActivity("")
    }
  return (
    <div className="container">
      <div className="header">
        TODO LIST
        <br />
        <input type="text" value={activity} onChange={(e)=>setActivity(e.target.value)} placeholder="write your todo" />
        <button onClick={addActivity}>Add</button>
        <p className="List-heading">here is your List:{")"}</p>
        {listData!=[] && listData.map((data,i)=>{
            return(
                <>
                <p key={i}><div className="listData">{data}
                    </div></p>
                </>
            )

        })}
      </div>
    </div>
  );
};

export default Todolist;
