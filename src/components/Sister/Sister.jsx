import React, { useContext } from 'react';
import { MoneyContext } from '../Grandpa/Grandapa';

const Sister = () => {
    const [money] = useContext(MoneyContext);
    return (
        <div>
            <h3>Sister</h3>
            <p>sister money : {money}</p>
           
            
        </div>
    );
};
export default Sister;