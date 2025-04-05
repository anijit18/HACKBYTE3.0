import React from 'react'
const profiles =[
    {
        // name: "John Doe",
        image: "https://c.pxhere.com/photos/da/49/face_facial_hair_fine_looking_guy_man_model_person_portrait-1563283.jpg!d",
        title: "Software Engineer",
        description: "Expert in React and Node.js"
    },
    {
        // name: "Jane Smith",
        image: "https://c.pxhere.com/photos/da/49/face_facial_hair_fine_looking_guy_man_model_person_portrait-1563283.jpg!d",
        title: "Data Scientist",
        description: "Specializes in Machine Learning and AI"
    },
    {
        // name: "Alice Johnson",
        image: "https://c.pxhere.com/photos/da/49/face_facial_hair_fine_looking_guy_man_model_person_portrait-1563283.jpg!d",
        title: "UI/UX Designer",
        description: "Passionate about creating user-friendly interfaces"
    },
    {
        // name: "Alice Johnson",
        image: "https://c.pxhere.com/photos/da/49/face_facial_hair_fine_looking_guy_man_model_person_portrait-1563283.jpg!d",
        title: "App Dev",
        description: "Passionate about creating user-friendly interfaces"
    }
]
const FeaturedProfiles = () => {
  return (
    <div className="py-12 bg-grey-100">
        <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-6 text-center">Featured Profiles</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {profiles.map((profile, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer">
                        <img src={profile.image} alt="profiles.title" className="w-full h-48 object-cover transform transition duration-300 hover:scale-110/>" />
                        <div className="p-4">
                            <h4 className="text-xl font-bold mb-2">{profile.title}</h4>
                            <p className="text-gray-600">{profile.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default FeaturedProfiles