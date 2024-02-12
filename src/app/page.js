'use client'
import { FunnelIcon, } from '@heroicons/react/20/solid'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import BasicLayout from './components/basic-layout'
import CommunityMap from './components/community-map'
import Filter from './components/filter'
import MobileFilter from './components/mobile-filter'
import UserCard from './components/user-card'

// const users = [
//     {
//         userName: "ab123",
//         location: "LE1 1AB",
//         bio: "this is my bio",
//         ethnicity: 'asian',
//         course: 'Comp Sci',
//         year: 'UG1',
//         firstName: "John",
//         lastName: "Doe",
//         email: "john@doe.com",
//         phoneNum: 441234567890
//     },
//     {
//         userName: "bc456",
//         location: "LE1 2JS",
//         bio: "I have just moved to leicester",
//         ethnicity: 'white',
//         course: 'Comp Sci',
//         year: 'PG1',
//         firstName: "Mary",
//         lastName: "Sue",
//         email: "mayr@sue.com",
//         phoneNum: 4412345678912
//     }
// ]


export default function DashboardPage() {
    const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
    const [communities, setCommunities] = useState([])
    const [users, setUsers] = useState([])
    const [isBusy, setIsBusy] = useState(false)
    const [label, setLabel] = useState(null)
    const [markers, setMarkers] = useState([])

    const fetchUsers = (data) => {
        setIsBusy(true)
        setLabel('Filtering...')
        fetch('https://142.93.42.73:8000/community/users/all/?' + new URLSearchParams(data))
            .then((res) => res.json())
            .then((data) => {
                setUsers(data.users)
                setMarkers(data.markers)
            })
            .catch((error) => {
                toast.error('Error fetching users');
                console.error('Error:', error);
            })
            .finally(() => {
                setIsBusy(false)
                setLabel(null)
            });
    }
    const onFilterClick = (event) => {
        event.preventDefault()
        const formData = new FormData(event.currentTarget)
        const ethnicity = formData.getAll('ethnicities[]')
        const course = formData.getAll('courses[]')
        const course_year = formData.getAll('course years[]')
        fetchUsers({ ethnicity, course, course_year })
    }

    useEffect(() => {
        fetch('https://142.93.42.73:8000/community/')
            .then((res) => res.json())
            .then((data) => {
                setCommunities(data.result)
            })
            .catch((error) => {
                toast.error('Error fetching communities');
                console.error('Error:', error);
            });
        fetchUsers()

    }, [])
    return (
        <BasicLayout >
            <div className="bg-white rounded-md">
                <div>
                    <MobileFilter isBusy={isBusy} label={label} filters={communities} mobileFiltersOpen={mobileFiltersOpen} setMobileFiltersOpen={setMobileFiltersOpen} onFilterClick={onFilterClick} />
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
                                <Filter filters={communities} onFilterClick={onFilterClick} isBusy={isBusy} label={label} />
                                {/* Product grid */}
                                <div className="lg:col-span-3">
                                    <CommunityMap markers={markers} />
                                    {
                                        users.length == 0 &&
                                        <div className="text-center py-8">
                                            <span role="img" aria-label="Sad Emoji" className="text-5xl">😢</span>
                                            <p className="mt-4 text-gray-600">No users available</p>
                                        </div>
                                    }
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-3">
                                        {users.map(user => (<UserCard user={user} key={user.username} />))}
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
