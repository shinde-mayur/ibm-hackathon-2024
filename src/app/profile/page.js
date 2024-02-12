'use client'


import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import BasicLayout from "../components/basic-layout";
import UserForm from "../components/user-form";
export default function ProfilePage() {
    const [user, setUser] = useState(null)
    const [isLoading, setLoading] = useState(true)
    const [communities, setCommunities] = useState(null)
    const [ethnicities, setEthnicities] = useState([])
    const [courseYears, setCourseYears] = useState([])
    const [courses, setCourses] = useState([])

    useEffect(() => {
        var cookie = require("@boiseitguru/cookie-cutter");
        cookie.get('token',)
        fetch('http://localhost:8000/community/user/', {
            headers: {
                'Authorization': `Token ${cookie.get('token',)}`
            }
        }).then(res => res.json())
            .then((data) => {
                if(!data.result) throw new Error(data.message)
                setUser(data.user)
                setLoading(false)
            })
            .catch((error) => {
                toast.error('Error fetching user details');
                console.error('Error:', error);
                setLoading(false);
            });
        fetch('http://localhost:8000/community/')
            .then((res) => res.json())
            .then((data) => {

                data.result.forEach((item) => {
                    switch (item.title) {
                        case 'Ethnicities':
                            setEthnicities(item.options)
                            break;

                        case 'Course Years':
                            setCourseYears(item.options)
                            break;
                        default:
                            setCourses(item.options)
                            break;
                    }
                })
            })
            .catch((error) => {
                console.log('Error:', error);
                toast.error('Error fetching communities');
            });
    }, [])
    return <BasicLayout title="Profile">
        {
            isLoading &&
            <div className="flex justify-center items-center mt-8">
                <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
            </div>
        }
        {user && <UserForm user={user} ethnicities={ethnicities} courses={courses} courseYears={courseYears} />}

    </BasicLayout>
}


