import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { Lock, Mail, User, LogIn } from 'lucide-react';
import './Login.css';//  // Create Login.css for custom styling


const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [isSignUp, setIsSignUp] = useState(false); 
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        // Basic client-side validation
        if (isSignUp) {
            if (!name.trim() || !email.trim() || !password.trim()) {
                setError('Please fill in all fields.');
                setLoading(false);
                return;
            }
            // Email format validation
            const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
            if (!emailRegex.test(email)) {
                setError('Invalid email format.');
                setLoading(false);
                return;
            }
            // Password format validation
            if (password.length < 6) {
                setError('Password must be at least 6 characters long.');
                setLoading(false);
                return;
            }
        } else {
            if (!email.trim() || !password.trim()) {
                setError('Please fill in your email and password.');
                setLoading(false);
                return;
            }
        }

        // Simulate an API call (replace with your actual authentication logic)
        try {
            // In a real app, you'd send a request to your server here
            await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate a 1.5-second delay

            if (isSignUp) {
                // Simulate successful sign up
                console.log('User signed up:', { name, email, password });
                // You might want to automatically log the user in after sign-up
            } else {
                // Simulate successful login
                console.log('User logged in:', { email, password });
            }

            // Redirect to a different page upon success (e.g., the home page)
            // window.location.href = '/'; // Replace with your actual redirect URL
        } catch (err) {
            setError('Invalid credentials. Please try again.'); // Generic error message
            console.error('Authentication error:', err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="login-page">
            <div className="login-container">
                <h2 className="login-title">
                    <LogIn className="mr-2" />
                    {isSignUp ? 'Sign Up' : 'Login'}
                </h2>
                <form className="login-form" onSubmit={handleSubmit}>
                    {isSignUp && (
                        <div className="input-group">
                            <User className="input-icon" />
                            <input
                                type="text"
                                placeholder="Name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="login-input"
                            />
                        </div>
                    )}
                    <div className="input-group">
                        <Mail className="input-icon" />
                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="login-input"
                        />
                    </div>
                    <div className="input-group">
                        <Lock className="input-icon" />
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="login-input"
                        />
                    </div>
                    {error && <p className="error-message">{error}</p>}
                    <Button
                        type="submit"
                        className="login-button btn-danger"
                        disabled={loading}
                    >
                        {loading ? 'Loading...' : isSignUp ? 'Sign Up' : 'Login'}
                    </Button>
                </form>
                <p className="toggle-text" onClick={() => setIsSignUp(!isSignUp)}>
                    {isSignUp ? 'Already have an account? Login' : 'Need an account? Sign Up'}
                </p>
            </div>
        
        </div>
    );
};

export default LoginPage;
