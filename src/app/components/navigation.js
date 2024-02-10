'use client'
import Link from 'next/link'

export default function Navigation({ navigation, pathname, activeClasses }) {
    return (
        <>
            {navigation.map((item) => (
                <Link
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