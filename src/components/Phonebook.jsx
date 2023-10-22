import React, { Component } from "react";
import { nanoid } from "nanoid";

export default class Phonebook extends Component {
    // state = {
    //     contacts: [],
    //     name: '',
    //     number: '',
    //     filter: '',
    // }

    state = {
        contacts: [
            {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
            {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
            {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
            {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
        ],
        filter: '',
        name: '',
        number: ''
    }
    
    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
     }

    handleSubmit = (e) => {
        e.preventDefault();
        const contact = {
            id: nanoid(),
            name: this.state.name,
            number: this.state.number
        }
        this.setState(prevState => ({
            contacts: [...prevState.contacts,
                contact],
            name: '',
            number: ''
        }));
    }

    handleSearch = (e) => {
        this.setState({ filter: e.target.value });
    };

    filterContacts = () => {
        return this.state.contacts.filter(contact =>
            contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
        );
    }

    deleteContact = (id) => {
        this.setState(prevState => ({
            contacts: prevState.contacts.filter(contact => contact.id!== id)
        }));
    }

    render() {
        return (
            <div>
                <h2>Phonebook</h2>
                <form onSubmit={this.handleSubmit}>          
                    <label htmlFor="">
                        <input
                            onChange={this.handleChange}
                            type="text"
                            name="name"
                            pattern="^[a-zA-Zа-яА-Я]+(([' \\-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                            placeholder="Name"
                            required
                        />
                    </label>
                    <br />
                    <label htmlFor="">
                        <input
                            onChange={this.handleChange}
                            type="tel"
                            name="number"
                            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                            placeholder="Phone number"
                            required
                        />
                    </label>
                    <br />
                  <button type="submit">Add contact</button>
                </form>    
                <h3>Contacts</h3>
                <label htmlFor="">
                    <input
                        onChange={this.handleSearch}
                        type="text"
                        name="filter"
                        pattern="^[a-zA-Zа-яА-Я]+(([' \\-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        placeholder="Find by name"
                    />
                </label>
                {this.state.contacts && <ul>
                    {this.filterContacts().map(({id,name,number}) => (
                        <li key={id}>
                            <span className="nameContact">{name}</span>
                            <span className="numberContact">{number}</span>
                            <button onClick={() => this.deleteContact(id)}>Delete</button>
                        </li>
                    ))}
                </ul>}
            </div>
        );
    }
 }