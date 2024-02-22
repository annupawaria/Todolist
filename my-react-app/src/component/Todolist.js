import React, { useState } from "react";

const Todolist = () => {
  const [activity, setActivity] = useState();
  const [listData, setListData] = useState([]);

  function addActivity(i) {
    setListData((listData) => {
      const updatedList = [...listData, activity];
      console.log(updatedList);
      setActivity('')
      return updatedList;
    });
  }
  function Remove(i){
const updatedListData = listData.filter((id,i)=>{
 return i!=id
})
setListData(updatedListData)
  }
  function removeAll(){
setListData([])
  }
  return (
    <div className="container">
      <div className="header">
        TODO LIST
        <br />
        <input
          type="text"
          placeholder="write your activity"
          value={activity}
          onChange={(e) => setActivity(e.target.value)}
        />
        <button onClick={addActivity}>Add</button>
        <p className="List-heading">Here is your List:{")"}</p>
        {listData!= [] &&
          listData.map((data, i) => {
            return (
              <>
                <p key={i}>
                  <div>{data}</div>
                  <div><button onClick={Remove}>Remove(-)</button></div>
                </p>
              </>
            );
          })}
      {listData.length>1 &&  
        <button onClick={removeAll}> Remove All</button>}
      </div>
    </div>
  );
};

export default Todolist;
