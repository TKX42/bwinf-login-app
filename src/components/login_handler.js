export async function loginUser(email, password) {
    try {
      const response = await fetch('https://qaware-login-backend.fly.dev/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });
  
      if (!response.ok) {
        throw new Error('Login failed. Please check your credentials and try again.');
      }
  
      const data = await response.json();
      console.log('Login successful:', data);
      // Handle login success (e.g., storing the JWT, redirecting the user)
    } catch (error) {
      console.error('Login error:', error);
      // Handle login errors (e.g., displaying an error message)
    }
  }
  