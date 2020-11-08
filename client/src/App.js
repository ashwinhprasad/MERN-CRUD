import './App.css';
import AddItem from "./components/AddItem";
import DisplayItems from "./components/DisplayItems";
import React , { useState, useEffect } from "react";
import axios from "axios";

function App() {
  
  const [items,setItems] = useState([])

  useEffect(() => {
    axios.get("/item")
     .then(res => { 
       setItems(res.data)
      })
     .catch(err => console.log(err))
  
    },[items])




  const onSubmit = (itemName) => {

    if (itemName === "") return console.log("empty")

    axios.post("/item",{
      name:itemName
    })
     .then(item => {
       setItems([...items,{ _id:item.data.item._id, name:item.data.item.name }])
      })
     .catch(err => console.log(err))
  }

  const onClickButton =(name) => {
    axios.delete("http://localhost:5000/item",{
      data:{
        name:name
      }
    })
     .then(res => console.log(res))
     .catch((err) => console.log(err))

    let newItemList = [];

    items.forEach((item) => {
      if(item.name !== name){
        newItemList.push(item);
      }
    })

    setItems([...newItemList])


  }

  return (
    <div className="App">
      <h1>Item Cart</h1>
      <AddItem onSubmit={onSubmit}/>
      <DisplayItems items={items} onClickButton = {onClickButton} />
    </div>
  );
}

export default App;
