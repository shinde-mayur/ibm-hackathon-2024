
import BasicLayout from "../components/basic-layout"
export const metadata = {
    title: 'About Us | UniVicinity',
}
export default function AboutPage() {
    return (
        <>
            <BasicLayout >
                <div className="max-w-7xl overflow-hidden md:p-10 p-4">
                    <h1 className="text-4xl font-bold text-center text-blue-800 my-6">About UniVicinity</h1>

                    <div className="space-y-8">
                        <section>
                            <h2 className="text-2xl text-blue-700 font-semibold">Our Mission</h2>
                            <p className="text-gray-600 mt-2">
                                UniVicinity is driven by a singular mission to revolutionize how university students connect, collaborate, and create communities. In a digital age where connections often overshadow physical interactions, we strive to make the campus experience more vibrant, inclusive, and interconnected, a need clearly echoed by 85.7% of students in our survey.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl text-blue-700 font-semibold">Our Vision</h2>
                            <p className="text-gray-600 mt-2">
                                We envision a university campus where no student feels isolated, where diversity is celebrated, and where every student has the opportunity to thrive both academically and socially. Our recent survey supports this vision, revealing that 93.3% of students crave to know more people in their courses similar to themselves. UniVicinity is not just a platform; it&apos;s a movement toward fostering real-time connections and building a supportive campus community.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl text-blue-700 font-semibold">The Impact We&apos;re Making</h2>
                            <p className="text-gray-600 mt-2">
                                Our approach is validated by data showing that 57.1% of survey respondents are part of communities linked to their home country. Yet, 46.7% are not aware of many from their communities who live close by, highlighting a significant opportunity for UniVicinity to bridge the gap and foster meaningful connections.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl text-blue-700 font-semibold">Why UniVicinity?</h2>
                            <p className="text-gray-600 mt-2">
                                UniVicinity stands out by focusing on the here and now—connecting students based on proximity, shared interests, and academic collaboration. Our platform meets the clear demand for community and connection in today&apos;s digital landscape, making it essential for international students seeking belonging and local students looking to expand their networks.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl text-blue-700 font-semibold">Join the Movement</h2>
                            <p className="text-gray-600 mt-2">
                                We&apos;re on a mission to make every campus a connected, inclusive community, but we can&apos;t do it without you. Join UniVicinity today, and be part of the change you wish to see on your campus.
                            </p>
                        </section>
                    </div>
                </div>
            </BasicLayout>
        </>
    )
}