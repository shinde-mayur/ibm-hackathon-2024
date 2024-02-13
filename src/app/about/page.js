
import BasicLayout from "../components/basic-layout"
export const metadata = {
    title: 'About Us | UniVicinity',
}
export default function AboutPage() {
    return (
        <>
            <BasicLayout title="About UniVicinity">
                <div className="bg-white rounded-lg overflow-hidden">
                    <div className="p-6">
                        <div className="mb-8">
                            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
                            <p className="text-lg">
                                At UniVicinity, we are driven by a singular mission—to revolutionize how university students connect, collaborate, and create communities. In a world where digital connections often overshadow physical interactions, we aim to bridge the gap, making the campus experience more vibrant, inclusive, and interconnected.
                            </p>
                        </div>
                        <div className="mb-8">
                            <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
                            <p className="text-lg">
                                We envision a university campus where no student feels isolated, where diversity is celebrated, and where every student has the opportunity to thrive both academically and socially. UniVicinity is more than just a platform; it's a movement towards fostering real-time connections and building a supportive, dynamic campus community.
                            </p>
                        </div>
                        <div className="mb-8">
                            <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
                            <p className="text-lg">
                                UniVicinity was born out of a hackathon challenge, but it quickly evolved into a passion project for us, Team Innovate. We observed a common thread among students—a desire for more meaningful, immediate connections with peers on campus. Recognizing the potential to fill this gap, we set out to create a solution that not only facilitates these connections but also enhances the overall university experience.
                            </p>
                        </div>
                        <div className="mb-8">
                            <h2 className="text-2xl font-semibold mb-4">The Team</h2>
                            <ul className="list-disc pl-6">
                                <li className="text-lg mb-2">
                                    <strong>Skylar Gregson (rg308):</strong> The mastermind behind our robust backend architecture. Skylar ensures that UniVicinity runs smoothly, securely, and efficiently, enabling students to connect in real-time without a hitch.
                                </li>
                                <li className="text-lg mb-2">
                                    <strong>Mayur Shinde (mss62):</strong> Our creative genius in frontend development. Mayur designs with the user in mind, crafting an intuitive and engaging interface that makes finding and connecting with peers seamless.
                                </li>
                                <li className="text-lg">
                                    <strong>Dhrupal Shah (dps30):</strong> The visionary behind our design and database structure. Dhruv creates the visual and functional blueprint of UniVicinity, ensuring a cohesive and enjoyable user experience.
                                </li>
                            </ul>
                        </div>
                        <div className="mb-8">
                            <h2 className="text-2xl font-semibold mb-4">Why UniVicinity?</h2>
                            <p className="text-lg">
                                In today's digital age, the importance of physical community and connection cannot be overstated. UniVicinity stands out by focusing on the here and now—connecting students based on proximity, shared interests, and academic collaboration. Whether you're an international student seeking a sense of belonging or a local student looking to expand your social circle, UniVicinity is your gateway to a more fulfilling university experience.
                            </p>
                        </div>
                        <div className="text-center">
                            <h2 className="text-2xl font-semibold mb-2">Join the Movement</h2>
                            <p className="text-lg mb-6">
                                We're on a mission to make every campus a connected, inclusive community. But we can't do it without you. Join UniVicinity today, and be a part of the change you wish to see on your campus.
                            </p>
                        </div>
                    </div>
                </div>
            </BasicLayout>
        </>
    )
}