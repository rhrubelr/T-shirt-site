import React, { useContext } from 'react';
import Cousin from '../Cousin/Cousin';
import { MoneyContext } from '../Grandpa/Grandapa';

const Uncle = () => {
    const [money, setMoney] = useContext(MoneyContext)
    return (
        <div>
            <h3>Uncle</h3>
            <p>grandpa money: {money}</p>
            <button onClick={()=> setMoney(money + 1000)}>Send $1000</button>
            <section className='flex'>
                <Cousin>Nabil</Cousin>
                <Cousin>Nabila</Cousin>
            </section>
        </div>
    );
};

export default Uncle;