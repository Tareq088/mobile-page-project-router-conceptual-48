import React from 'react';
import { useLoaderData } from 'react-router';

const PhoneDetails = () => {
    const data = useLoaderData();
    console.log(data);
    return (
        <div>
            PhoneDetails
            {data.filter}
        </div>
    );
};

export default PhoneDetails;