import React,{useState}from "react";

function InputArea(props){
    const [inputText, setInput] = useState("");
    function handleChange(event){
        const newValue = event.target.value;
        setInput(newValue);
    }
    return(
        <div className="input-field">
            <input 
                className="input-style"
                onChange={handleChange}
                type="text"
                value={inputText}
             />
             <button
                className="button-style"
                onClick={()=>{
                props.onAdd(inputText);
                setInput("");
             }}>
             <span>Add</span>
             </button>
            <button
                className="button-style"
                onClick={()=>{
                props.onAddName(inputText);
                setInput("");
             }}>
             <span>Change Title</span>
             </button>

        </div>

    )
}
export default InputArea;