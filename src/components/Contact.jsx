import css from "./contact.module.css";

const Contact = ({ id, name, number, del }) => {
    return <tr className={css.contact} key={id}>
                <td>{name}</td>
                <td>{number}</td>
                <td><button className={css.btnDelete} onClick={del}>Delete</button></td>
           </tr>
}

export default Contact;