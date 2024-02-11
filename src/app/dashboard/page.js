'use client'
import { FunnelIcon } from '@heroicons/react/20/solid'
import { useState } from 'react'
import BasicLayout from '../components/basic-layout'
import CommunityMap from '../components/community-map'
import Filter from '../components/filter'
import MobileFilter from '../components/mobile-filter'

// const filters = [
//     {
//         id: 'color',
//         name: 'Color Name',
//         options: [
//             { value: 'white', label: 'White', checked: false },
//             { value: 'beige', label: 'Beige', checked: false },
//             { value: 'blue', label: 'Blue', checked: true },
//             { value: 'brown', label: 'Brown', checked: false },
//             { value: 'green', label: 'Green', checked: false },
//             { value: 'purple', label: 'Purple', checked: false },
//         ],
//     },
//     {
//         id: 'category',
//         name: 'Category',
//         options: [
//             { value: 'new-arrivals', label: 'New Arrivals', checked: false },
//             { value: 'sale', label: 'Sale', checked: false },
//             { value: 'travel', label: 'Travel', checked: true },
//             { value: 'organization', label: 'Organization', checked: false },
//             { value: 'accessories', label: 'Accessories', checked: false },
//         ],
//     },
//     {
//         id: 'size',
//         name: 'Size',
//         options: [
//             { value: '2l', label: '2L', checked: false },
//             { value: '6l', label: '6L', checked: false },
//             { value: '12l', label: '12L', checked: false },
//             { value: '18l', label: '18L', checked: false },
//             { value: '20l', label: '20L', checked: false },
//             { value: '40l', label: '40L', checked: true },
//         ],
//     },
// ]
const filters = [
    { title: 'Ethnicity', options: ["asian", "white", "african"] },
    { title: 'Year', options: ["PG1", "UG1", "PUG3"] },
    { title: 'Course', options: ["Comp Sci", "Business", "Maths"] },
]

export default function Example() {
    const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

    return (
        <BasicLayout >
            <div className="bg-white rounded-md">
                <div>
                    <MobileFilter filters={filters} mobileFiltersOpen={mobileFiltersOpen} setMobileFiltersOpen={setMobileFiltersOpen} />
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
                                <Filter filters={filters} />
                                {/* Product grid */}
                                <div className="lg:col-span-3">
                                    <CommunityMap />
                                </div>
                            </div>
                        </section>
                    </main>
                </div>
            </div>
            {/* <FilterExample /> */}
        </BasicLayout>
    )
}

