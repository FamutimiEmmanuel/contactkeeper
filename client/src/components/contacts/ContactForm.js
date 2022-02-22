import React, { useState, useContext, useEffect } from 'react';
import contactContext from '../../context/contact/contactContext';

const ContactForm = () => {
    const ContactContext = useContext(contactContext);

    const { addContact, updateContact, clearCurrent, current } = ContactContext;

    useEffect(() => {
        if( current !== null ) {
            setContact(current);
        } else {
            setContact({
                name:'',
                email: '',
                phone: '',
                type: 'personal',
            })
        }
    }, [ContactContext, current]);

    const [contact, setContact] = useState({
        name:'',
        email: '',
        phone: '',
        type: 'personal',
    });

    const { name, email, phone, type } = contact;

    const onChange = (e) => setContact({
        ...contact, [e.target.name]: e.target.value
    });

    const onSubmit = (e) => {
        e.preventDefault();

        if(current === null) {
            addContact(contact);
        } else {
            updateContact(contact);
        }

        clearAll();
        // ContactContext.addContact(contact);
        // setContact({
        //     name:'',
        //     email: '',
        //     phone: '',
        //     type: 'personal', 
        // });
    };

    const clearAll = () => {
        clearCurrent();
    }

    return (
        <form onSubmit={onSubmit}>
            <h2 className='text-primary'>{current ? 'Edit Contact' : 'Add Contact'}</h2>
            <p>
            <input 
            size='70%'
            type='text' 
            name='name'
            placeholder='Name' 
            value={name} 
            onChange={onChange}
            />
            </p>
            <p>
            <input 
            type='email' 
            name='email'
            placeholder='Email' 
            value={email} 
            onChange={onChange}
            />
            </p>
            <p>
            <input 
            type='text' 
            name='phone'
            placeholder='Phone' 
            value={phone} 
            onChange={onChange}
            />
            </p>
            
            <h5>Contact Type</h5>
            <input type="radio" name="type" value="personal"  onChange={onChange}  checked={type === 'personal'}/>{''}
            Personal{' '}
            <input type="radio" name="type" value="professional"  onChange={onChange} checked={type === 'professional'}/>
            Professional
            <div>
                <input type="submit" value={current ? 'Update Contact' : 'Add Contact'} className="btn btn-primary btn-block"/>
            </div>
            {current && <div>
                <button className="btn btn-light btn-block" onClick={clearAll}>Clear</button>    
            </div>}
        </form>
    )
}

export default ContactForm

