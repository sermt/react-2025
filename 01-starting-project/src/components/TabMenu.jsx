export default function TabButton({label, onSelect, isSelected}){
    return (
        <li>
            <button  className={isSelected ? "active" : ""} onClick={(event)=>onSelect(event)}>{label}</button>
        </li>
    )
}