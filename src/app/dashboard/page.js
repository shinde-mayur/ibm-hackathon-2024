'use client'
import { FunnelIcon, } from '@heroicons/react/20/solid'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import BasicLayout from '../components/basic-layout'
import CommunityMap from '../components/community-map'
import Filter from '../components/filter'
import MobileFilter from '../components/mobile-filter'
import UserCard from '../components/user-card'

const users = [
    {
        userName: "ab123",
        location: "LE1 1AB",
        bio: "this is my bio",
        ethnicity: 'asian',
        course: 'Comp Sci',
        year: 'UG1',
        firstName: "John",
        lastName: "Doe",
        email: "john@doe.com",
        phoneNum: 441234567890
    },
    {
        userName: "bc456",
        location: "LE1 2JS",
        bio: "I have just moved to leicester",
        ethnicity: 'white',
        course: 'Comp Sci',
        year: 'PG1',
        firstName: "Mary",
        lastName: "Sue",
        email: "mayr@sue.com",
        phoneNum: 4412345678912
    }
]


export default function DashboardPage() {
    const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

    const [communities, setCommunities] = useState([])
    useEffect(() => {
        fetch('http://142.93.42.73:8000/community/')
            .then((res) => res.json())
            .then((data) => {
                setCommunities(data.result)
            })
            .catch((error) => {
                toast.error('Error fetching communities');
                console.error('Error:', error);
            });
    }, [])
    return (
        <BasicLayout >
            <div className="bg-white rounded-md">
                <div>
                    <MobileFilter filters={communities} mobileFiltersOpen={mobileFiltersOpen} setMobileFiltersOpen={setMobileFiltersOpen} />
                    <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="flex items-baseline justify-between border-b border-gray-200 py-6">
                            <h1 className="text-4xl font-bold tracking-tight text-gray-900">Search for your Communities</h1>

                            <div className="flex items-center">
                                <button
                                    type="button"
                                    className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
                                    onClick={() => setMobileFiltersOpen(true)}
                                >
                                    <span className="sr-only">Filters</span>
                                    <FunnelIcon className="h-5 w-5" aria-hidden="true" />
                                </button>
                            </div>
                        </div>

                        <section aria-labelledby="products-heading" className="pb-24 pt-6">
                            <h2 id="products-heading" className="sr-only">
                                Communities
                            </h2>

                            <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
                                <Filter filters={communities} />
                                {/* Product grid */}
                                <div className="lg:col-span-3">
                                    <CommunityMap />
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-3">
                                        {users.map(user => (<UserCard user={user} key={user.userName} />))}
                                    </div>
                                </div>
                            </div>
                        </section>
                    </main>
                </div>
            </div>
        </BasicLayout>
    )
}
