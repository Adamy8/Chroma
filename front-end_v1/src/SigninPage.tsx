import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
//import { signInWithEmailAndPassword } from 'firebase/auth';
//import { auth } from './firebaseConfig';

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Email:', email);
        console.log('Password:', password);
        navigate('/setup');
        setEmail('');
        setPassword('');
        setError('');
    };

    /*const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');

        try {
            await signInWithEmailAndPassword(auth, email, password);
            navigate('/setup');
        } catch (err: any) {
            if (err.code === 'auth/invalid-email') {
                setError('The email address is not valid.');
            } else if (err.code === 'auth/user-disabled') {
                setError('This user has been disabled.');
            } else if (err.code === 'auth/user-not-found') {
                setError('No user found with this email.');
            } else if (err.code === 'auth/wrong-password') {
                setError('Incorrect password. Please try again.');
            } else {
                setError('An error occurred. Please try again later.');
            }
        }
    };*/

    return (
        <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-rose-100 p-6 flex items-center justify-center">
            <div className="max-w-4xl mx-auto bg-white/90 rounded-3xl p-8 shadow-xl backdrop-blur-md flex items-center">
                {/* Left Side: Logo */}
                <div className="w-1/2 flex justify-center">
                    <img
                        src="/assets/logo.png"
                        alt="Cow Budget"
                        className="max-w-full h-auto rounded-xl"
                    />
                </div>

                {/* Right Side: Sign-in Form */}
                <div className="w-1/2 p-6 pr-16">
                    <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500 mb-6 text-center">
                        Welcome Back!
                    </h2>
                    <form className="space-y-4" onSubmit={handleSubmit}>
                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-4 py-2 rounded-xl border border-gray-300 focus:ring-2 focus:ring-pink-400"
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-4 py-2 rounded-xl border border-gray-300 focus:ring-2 focus:ring-pink-400"
                        />
                        <button
                            type="submit"
                            className="w-full px-6 py-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-xl hover:opacity-90 transition-opacity"
                        >
                            Sign In
                        </button>
                    </form>
                    {error && <p className="text-red-500 text-center mt-4">{error}</p>}
                    <p className="text-gray-700 text-sm mt-4 text-center">
                        Don't have an account?{' '}
                        <Link to="/signUp" className="text-pink-500 hover:underline">
                            Sign Up
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SignIn;
