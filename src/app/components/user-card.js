
import Link from 'next/link'
export default function UserCard({ user }) {
    return (
        <div key={user.username} className="bg-indigo-50 rounded-lg shadow-md hover:shadow-lg">
            <div className='pt-6 px-4'>

                <h2 className="text-xl font-bold mr-2">
                    {user.first_name + ' ' + user.last_name}
                </h2>
                <div className='py-1'>
                    {user.ethnicity && <span className="inline-block text-xs px-2 py-1 mr-1 rounded-md bg-red-200 text-red-800">
                        {user.ethnicity}
                    </span>}
                    {user.course && <span className="inline-block text-xs px-2 py-1 mr-1 rounded-md bg-blue-200 text-blue-800">
                        {user.course}
                    </span>}
                    {user.course_year && <span className="inline-block text-xs px-2 py-1 mr-1 rounded-md bg-green-200 text-green-800">
                        {user.course_year}
                    </span>}
                </div>
                <p className="text-gray-600 mb-4">{user.bio}</p>
                <p className="text-gray-600 mb-4">Location : {user.location}</p>
            </div>
            <div className="flex justify-around border-t items-center p-2">
                <Link href={`tel:+${user.phone_number}`} className="text-gray-500 hover:text-blue-500 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-5 w-5 inline mr-2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                    </svg>
                    Call
                </Link>
                {
                    user.email &&
                    <Link href={`mailto:${user.email}`} className="text-gray-500 hover:text-green-500 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-5 w-5 inline mr-2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                        </svg>
                        Email
                    </Link>
                }
            </div>
        </div>
    )
}