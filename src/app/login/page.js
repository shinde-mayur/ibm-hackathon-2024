import LoginForm from '../components/login-form';

import { UserGroupIcon } from '@heroicons/react/24/outline';
export const metadata = {
    title: 'Login to Continue | UniVicinity',
}
export default function LoginPage() {



    return (
        <>

            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 ">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm ">
                    <UserGroupIcon
                        className="mx-auto h-10 w-auto"
                        alt="Your Company"
                    />
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                        Sign in to your Uni account
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <LoginForm />

                </div>
            </div >
        </>
    )
}
