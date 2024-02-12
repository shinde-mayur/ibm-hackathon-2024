'use client'


import { useState } from 'react';


import { toast } from 'react-toastify'
export default function UserForm({ user, ethnicities, courses, courseYears }) {
    const [isLoading, setLoading] = useState(false)
    const [label, setLabel] = useState('Save')
    const onFormSave = (event) => {
        event.preventDefault()
        setLoading(true)
        setLabel('Saving...')
        const formData = new FormData(event.currentTarget)
        const ethnicity = formData.get('ethnicity')
        const email = formData.get('email')
        const course_year = formData.get('courseYear')
        const course = formData.get('course')
        const location = formData.get('location')
        const bio = formData.get('bio')
        const phone_number = formData.get('phoneNumber')
        const first_name = formData.get('firstName')
        const last_name = formData.get('lastName')
        // 'ethnicity', 'course_year', 'course', 'location', 'bio', 'phone_number']
        var cookie = require("@boiseitguru/cookie-cutter");
        cookie.get('token',)
        fetch('http://142.93.42.73:8000/community/user/', {
            method: 'POST',
            headers: {
                'Authorization': `Token ${cookie.get('token',)}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email,ethnicity, course_year, course, location, bio, phone_number, first_name, last_name }),
        })
            .then(res => res.json())
            .then(data => {
                if (!data.result) throw new Error(data.message || 'An error occurred while logging in. Please try again.')
                toast.success("User details updated successfully.")
            })
            .catch(error => { toast.error(error.message) })
            .finally(() => {
                setLoading(false)
                setLabel('Save')
            })
    }
    return (
        <form className='bg-white p-4 rounded-md shadow' method='POST' onSubmit={onFormSave}>
            <div className="border-b border-gray-900/10 pb-12">
                <h2 className="text-base font-semibold leading-7 text-gray-900">Personal Information</h2>
                <p className="mt-1 text-sm leading-6 text-gray-600">Use a permanent address where you can receive mail.</p>

                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div className="sm:col-span-3">
                        <label htmlFor="firstName" className="block text-sm font-medium leading-6 text-gray-900">
                            First name
                        </label>
                        <div className="mt-2">
                            <input
                                type="text"
                                name="firstName"
                                id="firstName"
                                required
                                defaultValue={user?.first_name}
                                autoComplete="given-name"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>

                    <div className="sm:col-span-3">
                        <label htmlFor="lastName" className="block text-sm font-medium leading-6 text-gray-900">
                            Last name
                        </label>
                        <div className="mt-2">
                            <input
                                type="text"
                                name="lastName"
                                id="lastName"
                                required
                                defaultValue={user?.last_name}
                                autoComplete="family-name"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>

                    <div className="sm:col-span-4">
                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                            Email address
                        </label>
                        <div className="mt-2">
                            <input
                                id="email"
                                name="email"
                                type="email"

                                defaultValue={user?.email || ''}
                                required
                                autoComplete="email"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>
                    <div className="sm:col-span-2">
                        <label htmlFor="phoneNumber" className="block text-sm font-medium leading-6 text-gray-900">
                            Phone Number
                        </label>
                        <div className="mt-2">
                            <input
                                id="phoneNumber"
                                name="phoneNumber"
                                type="number"
                                required

                                defaultValue={user?.phone_number || ''}
                                autoComplete="phone_number"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>
                    <div className="col-span-full">
                        <label htmlFor="bio" className="block text-sm font-medium leading-6 text-gray-900">
                            Bio
                        </label>
                        <div className="mt-2">
                            <textarea
                                id="bio"
                                name="bio"
                                rows={3}
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                defaultValue={user?.bio || ''} />
                        </div>
                        <p className="mt-3 text-sm leading-6 text-gray-600">Write a few sentences about yourself.</p>
                    </div>
                    <div className="sm:col-span-2">
                        <label htmlFor="ethnicity" className="block text-sm font-medium leading-6 text-gray-900">
                            Ethnicity
                        </label>
                        <div className="mt-2">
                            <select
                                id="ethnicity"
                                name="ethnicity"
                                required
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                                defaultValue={user?.ethnicity || ''}
                            >
                                <option>Select Ethnicity</option>
                                {ethnicities.map((item, index) => (
                                    <option key={item.id} value={item.id}>{item.title}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div className="sm:col-span-2">
                        <label htmlFor="courseYear" className="block text-sm font-medium leading-6 text-gray-900">
                            Course Year
                        </label>
                        <div className="mt-2">
                            <select
                                id="courseYear"
                                name="courseYear"
                                defaultValue={user?.course_year || ''}
                                required
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                            >
                                <option>Course Year</option>
                                {courseYears.map((item, index) => (
                                    <option key={item.id} value={item.id}>{item.title}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div className="sm:col-span-2">
                        <label htmlFor="course" className="block text-sm font-medium leading-6 text-gray-900">
                            Course
                        </label>
                        <div className="mt-2">
                            <select
                                id="course"
                                name="course"
                                defaultValue={user?.course || ''}
                                required

                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                            >
                                <option>Course</option>
                                {courses.map((item, index) => (
                                    <option key={item.id} value={item.id}>{item.title}</option>
                                ))}
                            </select>
                        </div>
                    </div>


                    <div className="sm:col-span-2">
                        <label htmlFor="location" className="block text-sm font-medium leading-6 text-gray-900">
                            ZIP / Postal code
                        </label>
                        <div className="mt-2">
                            <input
                                type="text"
                                name="location"
                                required
                                id="location"
                                autoComplete="location"

                                defaultValue={user?.location || ''}
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-6 flex items-center justify-end gap-x-6">
                <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
                    Cancel
                </button>
                <button
                    disabled={isLoading}
                    type="submit"
                    className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    {label}
                </button>
            </div>
        </form>
    );
}