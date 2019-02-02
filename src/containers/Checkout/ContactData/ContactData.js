import React, {Component} from 'react';

import axios from '../../../axios-orders';

import Button from '../../../components/UI/Button/Button';
import Spinner from '../../../components/UI/Spinner/Spinner';
import classes from './ContactData.css';

class ContactData extends Component {
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            zipCode: ''
        }
    };
    orderHandler = (event) => {
        event.preventDefault();
        this.setState({loading: true});
        // totalPrice must be calculated on server side
        const order = {
            ingredients: this.props.ingredients,
            totalPrice: this.props.price,
            customer: {
                name: 'Yury Matin',
                address: {
                    street: 'Gagarina, 21',
                    zipCode: '087345',
                    country: 'Russia'
                },
                email: 'test@test.ru'
            },
            deliveryMethod: 'fastest'
        };
        axios.post('/orders.json', order)
            .then(resp => {
                this.setState({loading: false});
                this.props.history.push('/');
            })
            .catch(err => this.setState({loading: false}));
    };

    render() {
        let form = (
                <form action="">
                    <input type="text" name="name" placeholder="Your name"/>
                    <input type="text" name="email" placeholder="Your email"/>
                    <input type="text" name="street" placeholder="Your street"/>
                    <input type="text" name="zipCode" placeholder="Your zipCode"/>
                    <Button buttonType="Success" clicked={this.orderHandler}>ORDER</Button>
                </form>
        );
        if (this.state.loading) {
            form = <Spinner />
        }

        return (
            <div className={classes.ContactData}>
                <h4>Enter your contact data</h4>
                {form}
            </div>
        );

    }
}

export default ContactData;