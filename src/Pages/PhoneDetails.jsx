import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import Button from '../Components/UI/Button';
import { MdShoppingCart, MdBookmarkAdd } from "react-icons/md";
import { addFavorite } from './../Utilities/index';



const PhoneDetails = () => {
    const data = useLoaderData();
    // console.log(data);
    const {id} = useParams();
    // console.log("id is:", id);
    const singlePhone = data.find(phone => phone.id === parseInt(id));
    // console.log(singlePhone)
    const {brand,camera_info,description,image,model,name,price,storage} = singlePhone || {};

    const handleFavorite = () =>{
        addFavorite(singlePhone);
    }

    return (
        <div className='w-full py-12'>
            
            <img src={image} className='w-full mx-auto md:w-auto' alt='Banner Image'></img> 
            <div className="flex justify-between mt-4">
                <h1 className='text-6xl font-thin'>{name}</h1>
                <div className='flex gap-3'>
                    <Button label={<MdShoppingCart size={20} />}></Button>
                    <Button onClick={handleFavorite} 
                        label={<MdBookmarkAdd size={20} 
                        
                    />}></Button>
                </div>
            </div>
            Details dekhaite para jabe..........
            <p>{brand}</p>
            <p>{camera_info}</p>
            <p>{description}</p>
            <p>{model}</p> 
        </div>
    );
};

export default PhoneDetails;