import React from 'react'
const profiles =[
    {
        // name: "John Doe",
        image: "https://c.pxhere.com/photos/da/49/face_facial_hair_fine_looking_guy_man_model_person_portrait-1563283.jpg!d",
        title: "John Doe",
        description: "LEARN: Mern",
        teach: "TEACH: Guitar"
    },
    {
        // name: "Jane Smith",
        image: "https://th.bing.com/th/id/OIP.FPDZmsB9Nb6mFDH0kkKcMAHaJl?w=138&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        title: "Jane Smith",
        description: "LEARN: AI/ML",
        teach: "TEACH: Piano"
    },
    {
        // name: "Alice Johnson",
        image: "https://th.bing.com/th/id/OIP.NqY3rNMnx2NXYo3KJfg43gHaHa?w=179&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        title: "Alice Johnson",
        description: "LEARN: Flute",
        teach: "TEACH: App Dev"
    },
    {
        // name: "Alice Johnson",
        image: "https://th.bing.com/th/id/OIP.os7uM5TJXlUufJbHt9t7UAHaHa?w=201&h=201&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        title: "Lily Smith",
        description: "LEARN: Singing",
        teach: "TEACH: Chess"
    }
]
const FeaturedProfiles = () => {
  return (
    <div className="py-12 bg-grey-100">
        <div className="container mx-auto px-4">
            <h1 className="text-3xl font-bold mb-6 text-center">Featured Profiles</h1>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
  {profiles.map((profile, index) => (
    <div
      key={index}
      className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer min-h-[400px] flex flex-col"
    >
      <img
        src={profile.image}
        alt={profile.title}
        className="w-full h-60 object-cover transform transition duration-300 hover:scale-110"
      />
      <div className="p-4 flex-1">
        <h4 className="text-xl font-bold mb-2">{profile.title}</h4>
        <p className="text-gray-600">{profile.description}</p>
        <p className="text-gray-600">{profile.teach}</p>
        <a href="/ChatPage" className="w-full block">
  <button
    type="button"
    className="w-full bg-blue-600 text-white py-2 rounded-xl hover:bg-orange-300 transition duration-300 cursor-pointer"
  >
    Chat
  </button>
</a>

      </div>
    </div>
  ))}
</div>

        </div>
    </div>
  )
}

export default FeaturedProfiles