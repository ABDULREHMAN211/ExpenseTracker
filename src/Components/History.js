import React, {useContext} from 'react';
import {Transaction} from './Transaction';
import {GlobalContext} from '../Context/GlobalState';

export const History = () => {
    const {transactions} = useContext(GlobalContext);
        return (
        <div>
            <h3>Transaction History</h3>
            <ul className="list">
                {transactions.map(transaction => 
                    (
                    <Transaction key={transaction.id} transaction={transaction}/>
                    )
                    )}
            </ul>
        </div>
    )
}