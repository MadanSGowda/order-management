export const login = (username, password) => ({
    type: 'LOGIN',
    payload: { username, password },
  });
  