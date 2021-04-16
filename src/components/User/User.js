import React from 'react';
import './User.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'

const User = (props) => {
    const {name, email, image, phone, address}= props.user;
    //console.log(props);
    const handleAddUser = props.handleAddUser;
    return (
        <div className="user-details">
            <div className="image">
                <img  src={image} alt=""/>
            </div>
            <h2>{name}</h2>
            <p>email: {email}</p>
            <p>phone: {phone}</p>
            <p>address: {address}</p>
            <button className="add-button" onClick={() => handleAddUser(props.user) } > <FontAwesomeIcon icon={faUserPlus} /> Add Friend</button>
        

        </div>
    ); 
};

export default User;