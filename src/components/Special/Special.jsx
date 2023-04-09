import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandapa';

const Special = ({ring}) => {
    const angti = useContext(RingContext)
    return (
        <div>
            <h3>Special</h3>
            <p>ring: {angti}</p>
        </div>
    );
};

export default Special;