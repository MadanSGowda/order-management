const initialState = {
  orders: [{
    id: '1',
    vendorName: 'Vendor 1',
    pickupDate: '2022-01-01',
    status: 'Shipped'
  },
  {
    id: '2',
    vendorName: 'Vendor 2',
    pickupDate: '2022-02-01',
    status: 'Cancelled'
  },
  {
    id: '3',
    vendorName: 'Vendor 3',
    pickupDate: '2022-03-01',
    status: 'Pending'
  },
  {
    id: '4',
    vendorName: 'Vendor 4',
    pickupDate: '2022-01-01',
    status: 'Shipped'
  },
  {
    id: '5',
    vendorName: 'Vendor 5',
    pickupDate: '2022-02-01',
    status: 'Cancelled'
  },
  {
    id: '6',
    vendorName: 'Vendor 6',
    pickupDate: '2022-03-01',
    status: 'Pending'
  },
  {
    id: '7',
    vendorName: 'Vendor 7',
    pickupDate: '2022-01-01',
    status: 'Shipped'
  },
  {
    id: '8',
    vendorName: 'Vendor 8',
    pickupDate: '2022-02-01',
    status: 'Cancelled'
  },
  {
    id: '9',
    vendorName: 'Vendor 9',
    pickupDate: '2022-03-01',
    status: 'Pending'
  },
  {
    id: '10',
    vendorName: 'Vendor 10',
    pickupDate: '2022-01-01',
    status: 'Shipped'
  },
  {
    id: '11',
    vendorName: 'Vendor 11',
    pickupDate: '2022-02-01',
    status: 'Cancelled'
  },
  {
    id: '12',
    vendorName: 'Vendor 12',
    pickupDate: '2022-03-01',
    status: 'Pending'
  }], // initialize
};

const ordersReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_ORDERS':
      return { ...state, orders: action.payload };
    default:
      return state;
  }
};

export default ordersReducer;
