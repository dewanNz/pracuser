import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    //console.log(cart)
    // let totalSalary = 0;
    // for(let i = 0; i <cart.length; i++) {
    //     const user = cart[i];
    //     totalSalary = totalSalary + user.income;
    // }
    const totalSalary = cart.reduce((sum, user) => sum + user.income  , 0)
    return (
        <div>
            <h2>Total Salary: $ {totalSalary} </h2>
        </div>
    );
};

export default Cart;