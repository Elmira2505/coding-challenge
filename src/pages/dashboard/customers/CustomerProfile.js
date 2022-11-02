import React from 'react';
import {receipts} from "../receipts/Receipts";
import {useNavigate, useParams} from 'react-router-dom'
import CustomerCards from "./CustomerCards";
import CustomerList from "./CustomerList";


const CustomerProfile = () => {

    const navigate = useNavigate();

    const { CustomerId } = useParams
    return (
        <div>
           <h1>Hello {CustomerId}</h1>
        </div>
    );
};

export default CustomerProfile;