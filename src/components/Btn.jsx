import "./Btn.css"
const Btn = ({ text, type, onClick }) => {
    return <button onClick={onClick} className={`Button Button_${type}`}
    
    >
        {text}
    </button>
}

export default Btn;