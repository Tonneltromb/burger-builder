import React from 'react';
import Aux from '../../../hoc/AuxReact'
import Button from '../../UI/Button/Button';

const orderSummary = (props) => {
    const ingredients = Object.keys(props.ingredients).map((ingrKey) => {
        return (
            <li key={ingrKey}>
                <span style={{textTransform: 'capitalize'}}>{ingrKey}</span>: {props.ingredients[ingrKey]}
            </li>
        );
    });
    return (
        <Aux>
            <h3>Your order</h3>
            <p>A Burger with the following ingredients:</p>
            <ul>
                {ingredients}
            </ul>
            <p><strong>Total price: {props.totalPrice.toFixed(2)}</strong></p>
            <p>Continue to checkout?</p>
            <Button buttonType={'Danger'} clicked={props.purchaseCancelled}>CANCEL</Button>
            <Button buttonType={'Success'} clicked={props.purchaseContinued}>CONTINUE</Button>
        </Aux>
    );
};

export default orderSummary;