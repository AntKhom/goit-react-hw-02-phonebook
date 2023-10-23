import Contact from "./Contact";

const ContactList = ({ filteredContacts, deleteContact }) => {
    return <table>
        <tbody>
            {filteredContacts.map(contact => 
                <Contact
                    key={contact.id}
                    name={contact.name}
                    number={contact.number}
                    del={deleteContact}
                />
            )}
        </tbody>
    </table>
}
export default ContactList;