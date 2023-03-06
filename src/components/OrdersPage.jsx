import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TextField, TablePagination, AppBar, Toolbar, Typography } from '@material-ui/core';
import { filterOrders } from '../redux/actions/ordersActions'

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  filter: {
    marginBottom: 16,
  },
});

const OrdersPage = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const orders = useSelector(state => state.orders);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleSearch = (e) => {
    setQuery(e.target.value);
    dispatch(filterOrders(e.target.value));
    setPage(0);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  console.log(orders.orders);
  const filteredOrders = orders.orders.filter(order => (
    order.id.toLowerCase().includes(query.toLowerCase()) ||
    order.vendorName.toLowerCase().includes(query.toLowerCase()) ||
    order.pickupDate.toLowerCase().includes(query.toLowerCase()) ||
    order.status.toLowerCase().includes(query.toLowerCase())
  ));

  const slicedOrders = filteredOrders.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

  return (
    <div>
      <AppBar position='static' variant='elevation'>
        <Toolbar>
          <Typography variant='h4'> Order Management App</Typography>
        </Toolbar>
      </AppBar>
      <TextField
        className={classes.filter}
        label="Filter by any values..."
        variant="outlined"
        value={query}
        onChange={handleSearch}
      />
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="Orders table">
          <TableHead>
            <TableRow>
              <TableCell>Order Id</TableCell>
              <TableCell>Vendor name</TableCell>
              <TableCell>Pick up date</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {slicedOrders.map((order) => (
              <TableRow key={order.id}>
                <TableCell>{order.id}</TableCell>
                <TableCell>{order.vendorName}</TableCell>
                <TableCell>{order.pickupDate}</TableCell>
                <TableCell>{order.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <TablePagination
          rowsPerPageOptions={[10, 25, 50]}
          component="div"
          count={filteredOrders.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </TableContainer>
    </div>
  );
};

export default OrdersPage;
