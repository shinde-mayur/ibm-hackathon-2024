'use client'
import Link from 'next/link'

export default function Navigation({ navigation, pathname, activeClasses }) {
    return (
        <>
            {navigation.map((item) => (

                item.onClick
                    ?
                    <button key={item.name} onClick={item.onClick} className={activeClasses(item.href === pathname)}> {item.name} </button>
                    : <Link
                        key={item.name}
                        href={item.href}
                        className={activeClasses(item.href === pathname)}
                        aria-current={item.href === pathname ? 'page' : undefined}
                    >
                        {item.name}
                    </Link>

            ))}
        </>
    )
}