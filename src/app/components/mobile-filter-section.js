'use client'
import { Disclosure } from '@headlessui/react'
import { MinusIcon, PlusIcon } from '@heroicons/react/20/solid'

export default function FilterSection({ section }) {
    const section_id = section.title.toLowerCase()

    return (
        <Disclosure as="div"  className="border-t border-gray-200 px-4 py-6">
            {({ open }) => (
                <>
                    <h3 className="-mx-2 -my-3 flow-root">
                        <Disclosure.Button className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
                            <span className="font-medium text-gray-900">{section.title}</span>
                            <span className="ml-6 flex items-center">
                                {open ? (
                                    <MinusIcon className="h-5 w-5" aria-hidden="true" />
                                ) : (
                                    <PlusIcon className="h-5 w-5" aria-hidden="true" />
                                )}
                            </span>
                        </Disclosure.Button>
                    </h3>
                    <Disclosure.Panel className="pt-6">
                        <div className="space-y-6">
                            {section.options.map((option, optionIdx) => (
                                <div key={option.title} className="flex items-center">
                                    <input
                                        id={`filter-mobile-${section_id}-${optionIdx}`}
                                        name={`${section_id}[]`}
                                        defaultValue={option.id}
                                        type="checkbox"
                                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                    />
                                    <label
                                        htmlFor={`filter-mobile-${section_id}-${optionIdx}`}
                                        className="ml-3 min-w-0 flex-1 text-gray-500"
                                    >
                                        {option.title}
                                    </label>
                                </div>
                            ))}
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    )
}