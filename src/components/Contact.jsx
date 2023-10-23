const Contact = ({ id, name, number, del }) => {
    return <li key={id}>
                <span className="nameContact">{name}</span>
                <span className="numberContact">{number}</span>
                <button onClick={del}>Delete</button>
           </li>
}

export default Contact;