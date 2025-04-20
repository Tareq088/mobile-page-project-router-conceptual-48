import React, { useState } from 'react';

import Hero from './../Components/Hero';
import PhonesContainer from './../Components/PhonesContainer';
import { useLoaderData } from 'react-router';

const Home = () => {
            //data
    const data = useLoaderData();
    const [phones, setPhones] = useState(data);
    // console.log(data)
    const handleSearch = (e,text) =>{
        e.preventDefault();
        // console.log(text)        
        //  text theke search diye prapto phone gula ke dhukabo
        if(text === "") return setPhones(data);
        const searchPhones = data.filter(phone =>
                            // split dewar karon hoilo pura word likhte hbe, 1 letter leikha search marle hbe na..
            phone?.name?.toLowerCase().split(' ').includes(text.toLowerCase())
            ||
            phone.brand?.toLowerCase().split(' ').includes(text.toLowerCase())
        );
        // console.log(searchPhones)
        setPhones(searchPhones)
    }
    return (
        <div>
           
           <Hero handleSearch={handleSearch}></Hero> 
            <PhonesContainer phones={phones} />
        </div>
    );
};

export default Home;