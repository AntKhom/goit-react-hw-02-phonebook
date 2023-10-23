import css from "./contactForm.module.css"

const ContactForm = ({name, number, change, submit }) => {
    return <form className={css.formInput } onSubmit={submit}>
        <input
                value ={name}
                onChange={change}
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' \\-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                placeholder="Name"
                required
            />
        <br />
        <input
                value={number}
                onChange={change}
                type="tel"
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                placeholder="Phone number"
                required
            />
        <br />
        <button type="submit">Add contact</button>
    </form>
};

export default ContactForm;