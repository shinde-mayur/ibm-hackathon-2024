'use client'
import FilterSection from './filter-section'

export default function Filter({ filters }) {
    return (
        <form className="hidden lg:block">
            {filters.map((section) => (<FilterSection section={section} key={section.title} />))}
        </form>
    )
}