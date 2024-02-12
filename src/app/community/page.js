'use client'
import { useEffect, useState } from 'react';
import BasicLayout from "../components/basic-layout";
import { toast } from 'react-toastify';

export default function CommunityPage() {
    const [communities, setCommunities] = useState(null)
    const [isLoading, setLoading] = useState(true)

    useEffect(() => {
        fetch('http://142.93.42.73:8000/community/')
            .then((res) => res.json())
            .then((data) => {
                setCommunities(data.result)
                setLoading(false)
            })
            .catch((error) => {
                toast.error('Error fetching communities');
                console.error('Error:', error);
                setLoading(false);
            });
    }, [])
    return (
        <BasicLayout title="Community" description='Checkout various commnunities'>
            <div className="grid grid-cols-1 gap-4">
                {
                    isLoading &&
                    <div className="flex justify-center items-center mt-8">
                        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
                    </div>
                }
                {communities && <CommunityList communities={communities} />}

            </div>
        </BasicLayout>
    )
}

const CommunityList = ({ communities }) => {
    const colors = [
        'bg-red-200 text-red-800',
        'bg-blue-200 text-blue-800',
        'bg-green-200 text-green-800',
    ]
    return (
        <>
            {communities.map((community, communityIndex) => (
                <div key={community.title} className="bg-indigo-50 shadow-md rounded-md overflow-hidden">
                    <div className="flex">
                        <div className="p-4 w-1/5">
                            <h3 className="text-lg font-semibold mb-2">{community.title}</h3>

                        </div>
                        <div className="p-4 w-4/5">
                            {community.options.map((item, index) => (
                                <span key={index} className={`inline-block text-xs px-2 py-1 mr-1 rounded-md ` + colors[communityIndex]}>
                                    {item.title}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}