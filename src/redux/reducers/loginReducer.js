const initialState = {
  username: '',
  password: '',
  isLoggedIn: false,
  error: '',
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN':
      const { username, password } = action.payload;
      if (username === 'testuser' && password === 'testpassword') {
        return { ...state, username, password, isLoggedIn: true, error: '' };
      } else {
        return { ...state, error: 'Invalid username or password.' };
      }
    case 'LOGOUT':
      return { ...state, isLoggedIn: false };
    default:
      return state;
  }
};

export default loginReducer;
