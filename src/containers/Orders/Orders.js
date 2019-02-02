import React, {Component} from 'react';

import axios from '../../axios-orders';

import Order from "../../components/Order/Order";
import withErrorHandler from '../../hoc/WithErrorHandler/WithErrorHandler'

class Orders extends Component {
    state = {
        orders: [],
        loading: true
    };

    componentDidMount() {
        axios.get('/orders.json')
            .then(resp => {
                const fetchedOrders = [];
                for (let key in resp.data) {
                    fetchedOrders.push({
                        ...resp.data[key],
                        id: key
                    });
                }
                this.setState({loading: false, orders: fetchedOrders});
            })
            .catch(err => {
                console.error(err);
                this.setState({loading: false});
            });
    }

    render() {
        return (
            <div>
                {this.state.orders.map((order) => {
                    console.log(order);
                    return (
                        <Order
                            key={order.id}
                            ingredients={order.ingredients}
                            price={order.totalPrice}/>
                    );
                })}
            </div>
        );
    }
}

export default withErrorHandler(Orders, axios);