import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandapa';

const Friend = ({ring}) => {
    const angti = useContext(RingContext)
    return (
        <div>
            <h3>Friend</h3>
            <p>{angti}</p>
            {ring && <p>ring: Dimond</p>}
        </div>
    );
};

export default Friend;