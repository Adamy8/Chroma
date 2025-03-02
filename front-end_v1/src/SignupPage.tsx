import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
//import { createUserWithEmailAndPassword } from 'firebase/auth';
//import { auth } from './firebaseConfig';

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Email:', email);
        console.log('Password:', password);
        navigate('/setup');
        setEmail('');
        setPassword('');
        setError('');

        /*try {
            await createUserWithEmailAndPassword(auth, email, password);
            navigate('/signin');
        } catch (err: any) {
            console.error(err);
            if (err.code === 'auth/invalid-email') {
                setError('Invalid email format.');
            } else if (err.code === 'auth/email-already-in-use') {
                setError('This email is already in use.');
            } else if (err.code === 'auth/weak-password') {
                setError('Password is too weak.');
            } else {
                setError('Failed to create an account. Please try again.');
            }
        }*/
    };

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
                
                {/* Right Side: Sign-up Form */}
                <div className="w-1/2 p-6 pr-16">
                    <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500 mb-6 text-center">
                        Create an Account
                    </h2>
                    <form className="space-y-4" onSubmit={handleSubmit}>
                        <input
                            type="text"
                            placeholder="Full Name"
                            className="w-full px-4 py-2 rounded-xl border border-gray-300 focus:ring-2 focus:ring-pink-400"
                        />
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
                            Sign Up
                        </button>
                    </form>
                    {error && <p className="text-red-500 text-center">{error}</p>}
                    <p className="text-gray-700 text-sm mt-4 text-center">
                        Already have an account?{' '}
                        <Link to="/signin" className="text-pink-500 hover:underline">
                            Sign In
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
