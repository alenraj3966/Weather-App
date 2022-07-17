import "./input.css"


const Input = ({text, submit, func,}) => {
  return (
    
    <form className="input" onSubmit={submit}>
        <input type={"text"} placeholder="Please enter location" className="input_value" onChange={text}/>
        <span className="input_icon" onClick={func}>
          
        </span>
    </form>
  );
}

export default Input;