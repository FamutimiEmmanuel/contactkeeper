import React, { useContext, useRef, useEffect }from 'react'
import contactContext from '../../context/contact/contactContext'

const ContactFilter = () => {
    const contactcontext = useContext(contactContext);
    const text = useRef('');

    const { filterContacts, clearFilter, filtered } = contactcontext;

    useEffect(() => {
        if(filtered === null) {
            text.current.value = '';
        }
    })

    const onChange = (e) => {
        if(text.current.value !== '') {
            filterContacts(e.target.value);
        } else {
            clearFilter();
        }
    }

    return (
        <form className='mt-2'>
           <input ref={text} type="text" placeholder="Filter Contacts.." onChange={onChange} /> 
        </form>
    )
}

export default ContactFilter
