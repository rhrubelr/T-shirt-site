import React from 'react';
import Friend from '../Friend/Friend';

const Cousin = ({children, hasFriend, ring}) => {
    return (
        <div>
            <h3>Cousin</h3>
            {children}
            {hasFriend && <Friend ring={ring}></Friend>}
        </div>
    );
};

export default Cousin;