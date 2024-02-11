import BasicLayout from "../components/basic-layout";

export default function CommunityPage() {
    const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6', 'Item 7', 'Item 8', 'Item 9', 'Item 10'];
    const data = [
        { id: 1, title: 'Item 1', },
        { id: 2, title: 'Item 2', },
        { id: 3, title: 'Item 3', },
        // Add more data items as needed
    ];
    const commnunities = [
        { title: 'Ethnicity', options: ["asian", "white", "african"], color: 'bg-red-200 text-red-800', },
        { title: 'Year', options: ["PG1", "UG1", "PUG3"], color: 'bg-blue-200 text-blue-800' },
        { title: 'Course', options: ["Comp Sci", "Business", "Maths"], color: 'bg-green-200 text-green-800' },
    ]

    return (
        <BasicLayout title="Community" description='Checkout various commnunities'>
            <div className="grid grid-cols-1 gap-4">
                {commnunities.map((community, index) => (
                    <>
                        <div className="bg-gray-100 shadow-md rounded-md overflow-hidden">
                            <div className="flex">
                                <div className="p-4 w-1/5">
                                    <h3 className="text-lg font-semibold mb-2">{community.title}</h3>

                                </div>
                                <div className="p-4 w-4/5">
                                    {community.options.map((item, index) => (
                                        <span key={index} className={`inline-block text-xs px-2 py-1 mr-1 rounded-md ` + community.color}>
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </>
                ))}
            </div>
        </BasicLayout>
    )
}