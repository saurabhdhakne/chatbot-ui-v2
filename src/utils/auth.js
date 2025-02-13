
const credentials = {
  admin: { email: 'admin2@mail.com', password: '123', role: 'admin' },
  user: { email: 'user@mail.com', password: 'user123', role: 'user' },
};

export const login = async (email, password) => {
  try {
    let loggedInUser = null;

    for (const key in credentials) {
      const user = credentials[key];
      if (user.email === email && user.password === password) {
        loggedInUser = user;
        break;
      }
    }

    if (loggedInUser) {
      localStorage.setItem('user_chatbot_9000', JSON.stringify({
        email: loggedInUser.email,
        role: loggedInUser.role,
      }));

      return true; 
    } else {
      console.error('Invalid credentials');
      return false; 
    }
  } catch (error) {
    console.error('Login failed', error);
    return false;
  }
};

export const logout = () => { 
  localStorage.removeItem('user_chatbot_9000'); 
};

export const isAuthenticated = () => {
  const user = localStorage.getItem('user_chatbot_9000');
  
  if (user) {
    try {
      const parsedUser = JSON.parse(user);
      return !!parsedUser.email && !!parsedUser.role; 
    } catch (error) {
      console.error('Error parsing user data', error);
      return false;
    }
  }
  return false; 
};
