export const FETCH_ORDERS = 'FETCH_ORDERS';
export const FILTER_ORDERS = 'FILTER_ORDERS';
export const UPDATE_ORDER_STATUS = 'UPDATE_ORDER_STATUS';

export const fetchOrders = () => ({
  type: FETCH_ORDERS,
});

export const filterOrders = (query) => ({
  type: FILTER_ORDERS,
  payload: query,
});

export const updateOrderStatus = (orderId, newStatus) => ({
  type: UPDATE_ORDER_STATUS,
  payload: { orderId, newStatus },
});
