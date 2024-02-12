'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { toast } from 'react-toastify';
import PrimaryButton from './primary-button';
export default function LoginForm({ }) {
    const router = useRouter()
    const [isBusy, setIsBusy] = useState(false)
    const [label, setLabel] = useState('Sign in')

    const onLoginSubmit = (event) => {
        setIsBusy(true)
        setLabel('Signing in...')
        const formData = new FormData(event.currentTarget)
        const username = formData.get('username')
        const password = formData.get('password')
        fetch('http://127.0.0.1:8000/community/login/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password }),
        })
            .then(res => res.json())
            .then(data => {
                if (!data.result) throw new Error(data.message || 'An error occurred while logging in. Please try again.')
                // cookies.set('token', data.token, { path: '/' })
                document.cookie = `token=${data.token}; path=/`;
                toast.success("Hi There! You've successfully logged in! 🎉🎉🎉")
                router.push('/')
            })
            .catch(error => {
                toast.error(error.message)
            })
            .finally(() => {
                setIsBusy(false)
                setLabel('Sign in')
            })
        event.preventDefault()
    }
    return (
        <form method='POST' className="space-y-6" onSubmit={onLoginSubmit}>
            <div>
                <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                    Username
                </label>
                <div className="mt-2">
                    <input
                        id="username"
                        name="username"
                        autoComplete="email"
                        required
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                </div>
            </div>

            <div>
                <div className="flex items-center justify-between">
                    <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                        Password
                    </label>
                </div>
                <div className="mt-2">
                    <input
                        id="password"
                        name="password"
                        type="password"
                        autoComplete="current-password"
                        required
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                </div>
            </div>

            <div>
                <PrimaryButton isBusy={isBusy} label={label} />
            </div>
        </form>)
}