import './styles.css';

export default function Button({ handleClick, icon, text }) {
    return (
        <button onClick={handleClick}>
            <div className='container'>
               <div className='icon'>{icon}</div>
               <div className='text'>{text}</div>
            </div></button>
    )
}