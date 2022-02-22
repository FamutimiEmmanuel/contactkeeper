import React, { useContext } from 'react';
// import PropTypes from 'prop-types'
import contactContext from '../../context/contact/contactContext';


const ContactItem = ({ contact }) => {
    const Contactcontext = useContext(contactContext);
    const { deleteContact, setCurrent, clearCurrent } = Contactcontext;

    const { _id,name, email, phone, type } = contact;
   
    const onDelete = () => {
        deleteContact(_id);
        clearCurrent();
    }

    return (
        <div className='card bg-light mt-2'>
          <h3 className="text-primary text-left pl-2">
            {name} {''}
            <span style={{ float: 'right', color:'black'}} className={'badge ' + (type === 'professional' ? 'badge-success' : 'badge-primary')}>
                {type.charAt(0).toUpperCase() + type.slice(1)}
            </span>
         </h3> 
         {/* <ul className="list">
          {email && (<li>
              {email} <i className="fas fa-envelope-open"></i>
          </li>)}
          {phone && (<li>
              {phone} <i className="fas fa-phone"></i>
          </li>)}
         </ul>  */}
         <ul class="list-group mb-2">
            <li class="list-group-item">{email} <i className="fas fa-envelope-open"></i></li>
            <li class="list-group-item">{phone} <i className="fas fa-phone"></i></li>
        </ul>
         <p>
             <button className='btn btn-dark btn-sm' onClick={() => setCurrent(contact)} >Edit</button>
             <button className='btn btn-danger btn-sm' onClick={onDelete}>Delete</button>
         </p>
        </div>
    )
}

// ContactItem.PropTypes = {
//     contact: PropTypes.object.isRequired;
// }
export default ContactItem
