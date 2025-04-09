export default function User() {
    return(
        <div className="min-h-screen bg-white text-gray-900">
        <div className="max-w-4xl mx-auto p-6">
          <h1 className="text-3xl font-bold mb-4">User Profile</h1>
  
          <div className="mb-6 bg-white shadow-md rounded-xl p-6 space-y-4">
            <h2 className="text-xl font-semibold">Update Your Details</h2>
            <input className="w-full border border-gray-300 rounded-md p-2" type="text" placeholder="Name" />
            <input className="w-full border border-gray-300 rounded-md p-2" type="email" placeholder="Email" />
            <input className="w-full border border-gray-300 rounded-md p-2" type="number" placeholder="Age" />
            <input className="w-full border border-gray-300 rounded-md p-2" type="tel" placeholder="Phone Number" />
          </div>
  
          <div className="mb-6 bg-white shadow-md rounded-xl p-6 space-y-4">
            <h2 className="text-xl font-semibold">Create Your Team (Max 5 Players)</h2>
            {[...Array(5)].map((_, index) => (
              <div key={index} className="flex gap-2 items-center">
                <input
                  className="flex-1 border border-gray-300 rounded-md p-2"
                  type="text"
                  placeholder={`Player ${index + 1} Name`}
                />
                {index !== 0 && (
                  <button className="bg-red-500 text-white px-4 py-2 rounded-md">Remove</button>
                )}
              </div>
            ))}
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md">Add Player</button>
          </div>
  
          <div className="text-right">
            <button className="bg-green-600 text-white px-6 py-2 rounded-md">Save Profile</button>
          </div>
        </div>
      </div>
    )
}