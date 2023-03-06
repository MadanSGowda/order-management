import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import OrdersPage from './OrdersPage';

const mockStore = configureStore([]);

describe('OrdersPage', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      orders: {
        ordersList: [
          {
            id: 1,
            vendorName: 'Vendor 1',
            pickupDate: '2022-01-01',
            status: 'Shipped'
          },
          {
            id: 2,
            vendorName: 'Vendor 2',
            pickupDate: '2022-02-01',
            status: 'Cancelled'
          },
          {
            id: 3,
            vendorName: 'Vendor 3',
            pickupDate: '2022-03-01',
            status: 'Pending'
          }
        ]
      }
    });
  });

  test('renders a table with correct headers', () => {
    render(
      <Provider store={store}>
        <OrdersPage />
      </Provider>
    );

    expect(screen.getByRole('table')).toBeInTheDocument();
    expect(screen.getByText('Order Id')).toBeInTheDocument();
    expect(screen.getByText('Vendor name')).toBeInTheDocument();
    expect(screen.getByText('Pick up date')).toBeInTheDocument();
    expect(screen.getByText('Status')).toBeInTheDocument();
  });

  test('renders the correct number of rows based on pagination', () => {
    render(
      <Provider store={store}>
        <OrdersPage />
      </Provider>
    );

    expect(screen.getAllByRole('row')).toHaveLength(4); // header + 3 rows

    // set pagination to 2 rows per page
    const select = screen.getByRole('combobox');
    select.value = '2';
    select.dispatchEvent(new Event('change'));

    expect(screen.getAllByRole('row')).toHaveLength(3); // header + 2 rows
  });

  test('filters the table based on search input', () => {
    render(
      <Provider store={store}>
        <OrdersPage />
      </Provider>
    );

    // type "Vendor 1" into the search input
    const input = screen.getByPlaceholderText('Search');
    input.value = 'Vendor 1';
    input.dispatchEvent(new Event('input'));

    expect(screen.getAllByRole('row')).toHaveLength(2); // header + 1 matching row

    // type "Shipped" into the search input
    input.value = 'Shipped';
    input.dispatchEvent(new Event('input'));

    expect(screen.getAllByRole('row')).toHaveLength(2); // header + 1 matching row
  });
});
