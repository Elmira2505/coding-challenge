import React from 'react';
import {receipts} from "../receipts/Receipts";
import {useNavigate, useParams} from 'react-router-dom'
import CustomerCards from "./CustomerCards";
import CustomerList from "./CustomerList";


const CustomerProfile = () => {

    const navigate = useNavigate();


    return (
        <div>
           <h1>Hello </h1>
            <CustomerCards/>
            <CustomerList/>
        </div>
    );
};

export default CustomerProfile;