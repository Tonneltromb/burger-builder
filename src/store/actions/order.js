import * as actionTypes from './actionTypes'
import axios from '../../axios-orders';

export const purchaseBurgerSuccess = (id, orderData) => {
  return {
      type: actionTypes.PURCHASE_BURGER_SUCCESS,
      orderId: id,
      orderData: orderData
  }
};

export const purchaseBurgerFailed = (error) => {
  return {
      type: actionTypes.PURCHASE_BURGER_FAILED,
      error: error
  }
};

export const purchaseBurgerStart = () => {
  return {
      type: actionTypes.PURCHASE_BURGER_START
  }
};

export const purchaseBurger = (orderData, token) => {
  return dispatch => {
      dispatch(purchaseBurgerStart());
      axios.post('/orders.json', orderData, {
          params: {
              auth: token
          }
      })
          .then(resp => dispatch(purchaseBurgerSuccess(resp.data.name)))
          .catch(err => purchaseBurgerFailed(err));
  };
};

export const purchaseInit = () => {
  return {
      type: actionTypes.PURCHASE_INIT
  }
};

export const fetchOrdersSuccess = (orders) =>  {
  return {
      type: actionTypes.FETCH_ORDERS_SUCCESS,
      orders: orders
  }
};

export const fetchOrdersFailed = (error) => {
    return {
        type: actionTypes.FETCH_ORDERS_FAILED,
        error: error
    }
};

export const fetchOrdersStart = () => {
    return {
        type: actionTypes.FETCH_ORDERS_START
    }
};

export const fetchOrders = (token, userId) => {
    return dispatch => {
        dispatch(fetchOrdersStart());
        axios.get('/orders.json', {
            params: {
                auth: token,
                orderBy: `"userId"`,
                equalTo: `"${userId}"`
            }
        }).then(resp => {
                const fetchedOrders = [];
                for (let key in resp.data) {
                    fetchedOrders.push({
                        ...resp.data[key],
                        id: key
                    });
                }
                dispatch(fetchOrdersSuccess(fetchedOrders));
            })
            .catch(err => dispatch(fetchOrdersFailed(err)));
    };
};