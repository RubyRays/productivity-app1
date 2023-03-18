import React, {useState} from "react";
import './App.css';
import InputArea from "./Components/InputArea";
import Item from "./Components/Item";
import List from "./Components/List";

function App() {
  const [items, setItems]=useState([]);
  const [list, setList]= useState([{
    title:"",
  }]);
  function addList(index){
    setList(prevLists =>{
      return[...prevLists, index];
    })
  }
  function addItem(inputText){
    setItems(prevItems=>{
      return [...prevItems, inputText];
    })
    
  }
  function deleteItem(id){
    setItems(prevItems =>{
      return prevItems.filter((items, index)=>{
        return index !==id;
      })
    })
  }
  function deleteList(id){
    setList(prevLists=>{
      return prevLists.filter((list,index1)=>{
        console.log(index1);
        console.log("adafdafadf");
        return index1 !== id;
      })
    })
  }
  return (
    <div>
    <div className="App">
      <header className="App-header">
        <div className='topic'>To Do List</div>
        
        <div className='input-style'>
          <InputArea
            onAdd={addItem}
            // addTitle={changeTitle}
          />
        </div>
        <div>
          <ul>
            {items.map((todo, index)=>(
              <Item
                key={index}
                id={index}
                text={todo}
                onChecked={deleteItem}
              />
            ))}
          </ul>
        </div>
        <div >
            <button className="list-button-style" onClick={addList}><span>NewList</span></button>
            
          </div>
      </header> 
      
      
    </div>
    
     
      <div className="list-area">
        {list.map((listItem, index)=>(
          <List
            key={index}
            id={index}
            onChecked={deleteList}
            // onAddTitle={changeTitle}

            // onItemdelete={deleteItem}
          />
        ))}       
    </div>
      
      </div>
    
    
  );
}

export default App;
