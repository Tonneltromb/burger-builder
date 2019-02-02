import React from 'react';
import classes from './Order.css';

const Order = (props) => {
    const ingredients = [];
    for (let ingredient in props.ingredients) {
        ingredients.push(
            {
                name: ingredient,
                amount: props.ingredients[ingredient]
            });
    }
    const ingredientsOutput = ingredients.map((ingr) => {
        return <span
            style={{
                textTransform: 'capitalize',
                display: 'inline-block',
                margin: '0 8px',
                border: '1px solid #CCC',
                padding: '5px'
            }}
            key={ingr.name}>{ingr.name} ({ingr.amount})</span>
    });
    return (
        <div className={classes.Order}>
            <p>Ingredients {ingredientsOutput}</p>
            <p>Price <strong>{Number.parseFloat(props.price).toFixed(2)} &#8381;</strong></p>
        </div>
    );
};

export default Order;