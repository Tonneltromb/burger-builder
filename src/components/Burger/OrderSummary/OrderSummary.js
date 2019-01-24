import React, {Component} from 'react';
import Aux from '../../../hoc/AuxReact'
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {
    componentWillUpdate(nextProps, nextState, nextContext) {
        console.log('[OrderSummary] will update');
    }

    render() {
        const ingredients = Object.keys(this.props.ingredients).map((ingrKey) => {
            return (
                <li key={ingrKey}>
                    <span style={{textTransform: 'capitalize'}}>{ingrKey}</span>: {this.props.ingredients[ingrKey]}
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
                <p><strong>Total price: {this.props.totalPrice.toFixed(2)}</strong></p>
                <p>Continue to checkout?</p>
                <Button buttonType={'Danger'} clicked={this.props.purchaseCancelled}>CANCEL</Button>
                <Button buttonType={'Success'} clicked={this.props.purchaseContinued}>CONTINUE</Button>
            </Aux>
        );
    }
}

export default OrderSummary;