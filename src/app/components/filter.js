'use client'
import FilterSection from './filter-section'
import PrimaryButton from './primary-button'
export default function Filter({ filters, onFilterClick, isBusy, label }) {
    return (
        <form className="hidden lg:block" onSubmit={onFilterClick}>
            {filters.map((section) => (<FilterSection section={section} key={section.title} />))}
            <div>
                <PrimaryButton isBusy={isBusy} label={label || 'Apply'} />
            </div>
        </form>
    )
}