import React, {useContext} from 'react'
import {GlobalContext} from '../Context/GlobalState';
export const IncomeExpense = () => {

    const {transactions} = useContext(GlobalContext);

    const transactionAmounts = transactions.map(transaction => transaction.transactionAmount);

    const Income = transactionAmounts
    .filter (transaction => transaction > 0)
    .reduce ((acc, transaction) => (acc+=transaction),0)
    .toFixed(2);
    const Expense = Math.abs(transactionAmounts
        .filter (transaction => transaction < 0)
        .reduce ((acc, transaction) => (acc+=transaction),0)
    ).toFixed(2);
    return (
        <div className="inc-exp-container">
            <div>
                <h4>Income</h4>
                <p className="money plus">
                    ${Income}</p>
            </div>
            <div>
                <h4>Expense</h4>
            <p className="money minus">
                ${Expense}</p>
            </div>
        </div>
    )
    }