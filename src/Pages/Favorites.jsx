import React, { useEffect, useState } from 'react';
import PhonesCard from '../Components/PhonesCard';
import { getFavorites, removeFavorite } from '../Utilities';

const Favorites = () => {
    const[displayPhones, setDisplayPhones] = useState([]);
    useEffect( ()=>{
        const savedPhones = getFavorites();
        setDisplayPhones(savedPhones);
    } , [] )

    const handleRemoveFavorite = (id) =>{
        const remainingFavorites = displayPhones.filter( phone => phone.id !== id)
        setDisplayPhones(remainingFavorites);
        removeFavorite(id);
    }
    return (
        <div className='py-12'>
           <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8'>
                {
                    displayPhones.map( phone => <PhonesCard 
                                            key={phone.id} 
                                            handleRemoveFavorite={handleRemoveFavorite}
                                            deletable={true}
                                            phone={phone}>
                                            </PhonesCard>)
                }
           </div>
        </div>
    );
};

export default Favorites;