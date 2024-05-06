import "./Button.css"
const Btn = ({text, type, onClick}) => {
    return(
    <div>
   <button onClick={onClick} className="Button">
    {text}
    </button>
    </div>
    )
    
}

export default Btn