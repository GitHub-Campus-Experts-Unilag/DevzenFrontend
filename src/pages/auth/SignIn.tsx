import React, { useState } from 'react';
import { jwtDecode } from 'jwt-decode';
import SignIn from './signPage'; 

interface JwtPayload {
  username: string;
  email: string;
  // Add other fields from your JWT payload (if needed)
}

function SignUp() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState('');
  const [decodedToken, setDecodedToken] = useState<JwtPayload | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSignUp = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch('YOUR_API_ENDPOINT', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, email, password }),
      });

      if (!response.ok) throw new Error('Sign-up failed');

      const data = await response.json();
      const jwt = data.token; // Adjust based on your API response
      setToken(jwt);
      const decoded = jwtDecode<JwtPayload>(jwt);
      setDecodedToken(decoded);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSocialSignIn = (provider) => {
    if (provider === 'google') {
      window.location.href = 'YOUR_GOOGLE_OAUTH_URL';
    } else if (provider === 'github') {
      window.location.href = 'YOUR_GITHUB_OAUTH_URL';
    }
  };

  return (
    <SignIn 
      token={token}
      decodedToken={decodedToken}
      loading={loading}
      error={error}
      handleSignUp={handleSignUp}
      username={username}
      setUsername={setUsername}
      email={email}
      setEmail={setEmail}
      password={password}
      setPassword={setPassword}
      handleSocialSignIn={handleSocialSignIn} // Pass the new handler
    />
  );
}

export default SignUp;
