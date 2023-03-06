import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import LoginPage from './LoginPage';
import store from '../redux/store';

describe('LoginPage', () => {
  it('renders a login form', () => {
    const { getByLabelText, getByText } = render(
      <Provider store={store}>
        <Router>
          <LoginPage />
        </Router>
      </Provider>
    );

    const usernameInput = getByLabelText('Username/Email');
    expect(usernameInput).toBeInTheDocument();

    const passwordInput = getByLabelText('Password');
    expect(passwordInput).toBeInTheDocument();

    const loginButton = getByText('Login');
    expect(loginButton).toBeInTheDocument();
  });

  it('dispatches login action when form is submitted', () => {
    const { getByLabelText, getByText } = render(
      <Provider store={store}>
        <Router>
          <LoginPage />
        </Router>
      </Provider>
    );

    const usernameInput = getByLabelText('Username/Email');
    fireEvent.change(usernameInput, { target: { value: 'testuser' } });

    const passwordInput = getByLabelText('Password');
    fireEvent.change(passwordInput, { target: { value: 'testpassword' } });

    const loginButton = getByText('Login');
    fireEvent.click(loginButton);

    expect(store.getState().login).toEqual({ username: 'testuser', password: 'testpassword' });
  });
});
