import React, {useState} from "react";
import Item from "./Item";
import InputArea from "./InputArea";

function List(props){
    
    const [items, setItems]=useState([]);
    const [name, setName]= useState("Todolist");
    // function handleClick(){
    //     props.onDelete(props.id);
    // }
    function addName(inputText){
        setName(inputText);
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
  

return (

        <div className="list-style">
        <div className="topic">{name}{props.id}</div>
        <div className='input-style'>
          <InputArea
            onAdd={addItem}
            onAddName={addName}
          />
        </div>
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
        {/* <button className="list-button-style" onClick={addName}>Change Title</button>         */}
        {/* <button className="list-button-style" onClick={handleClick}>Delete</button> */}
        <button
         className="list-button-style"
          onClick={()=>{
            props.onChecked(props.id)
          }}>
          Delete
          </button>
    </div>
)}
export default List;