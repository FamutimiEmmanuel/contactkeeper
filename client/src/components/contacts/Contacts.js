import React, { Fragment, useContext , useEffect } from 'react';
import ContactItem from './ContactItem';
import contactContext from '../../context/contact/contactContext';

const Contacts = () => {
    const ContactContext = useContext(contactContext);

    const { contacts, filtered, getContacts, loading } = ContactContext;
  
    useEffect(() => {
        getContacts();
        
        // eslint-disable-next-line
    }, []);
    if(contacts !== null && contacts.length === 0 && !loading ) {
        return <h4>Please add a contact</h4>
    }
    return (
        <>
        {filtered !== null ? filtered.map( contact => (<ContactItem key={contact.id}
        contact={contact} />)) : contacts.map(contact => (
            <ContactItem key={contact.id} contact={contact}/>
        ))}
        </>
        // <>
        // {contacts.map(contact => (
        //     <ContactItem key={contact._id} contact={contact}/>
        // ))}
        // <h1>
        //     <p>contacts here</p>
        // </h1>
        // </>
    );
};

export default Contacts

