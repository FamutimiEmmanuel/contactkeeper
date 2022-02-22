import React, { Fragment, useContext, useEffect } from 'react';
import Contacts from '../contacts/Contacts';
import ContactForm from '../contacts/ContactForm';
import ContactFilter from '../contacts/ContactFilter';
import authContext from '../../context/auth/authContext';


const Home = () => {
    const AuthContext = useContext(authContext);

    useEffect(() => {
        AuthContext.loadUser();
        // eslint-disable-next-line
    }, []);
    return (
        <div className=' container row'>
            <div className='col'>
                <ContactForm/>
            </div>
            <div className='col'>
                <ContactFilter/>
                <Contacts/>
            </div>
        </div>
        // <div className='container'>
        //     <div className='row'>
        //     <div className='col'>
        //         <ContactForm/>
        //     </div>
        //     <div className='col'>
        //         <ContactFilter/>
        //         <Contacts/>
        //     </div>

        //     </div>
        //    </div>
    )
};

export default Home;
