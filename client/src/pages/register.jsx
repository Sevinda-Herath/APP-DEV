export default function Register() {
    return (
      <section>
      <div className="max-w-4xl max-sm:max-w-lg mx-auto p-6 mt-6">
        <form>
        <div className="grid sm:grid-cols-2 gap-8">
          <div>
          <label className="text-slate-800 text-sm font-medium mb-2 block">First Name</label>
          <input
            name="fname"
            type="text"
            required
            className="bg-slate-100 w-full text-slate-800 text-sm px-4 py-3 rounded focus:bg-transparent outline-blue-500 transition-all"
            placeholder="Enter name"
          />
          </div>
          <div>
          <label className="text-slate-800 text-sm font-medium mb-2 block">Last Name</label>
          <input
            name="lname"
            type="text"
            required
            className="bg-slate-100 w-full text-slate-800 text-sm px-4 py-3 rounded focus:bg-transparent outline-blue-500 transition-all"
            placeholder="Enter last name"
          />
          </div>
          <div>
          <label className="text-slate-800 text-sm font-medium mb-2 block">Email Address</label>
          <input
            name="email"
            type="email"
            required
            className="bg-slate-100 w-full text-slate-800 text-sm px-4 py-3 rounded focus:bg-transparent outline-blue-500 transition-all"
            placeholder="Enter email"
          />
          </div>
          <div>
          <label className="text-slate-800 text-sm font-medium mb-2 block">Mobile No.</label>
          <input
            name="mnumber"
            type="number"
            required
            className="bg-slate-100 w-full text-slate-800 text-sm px-4 py-3 rounded focus:bg-transparent outline-blue-500 transition-all"
            placeholder="Enter mobile number"
          />
          </div>
          <div>
          <label className="text-slate-800 text-sm font-medium mb-2 block">Institution Type</label>
          <select
            name="institutionType"
            required
            className="bg-slate-100 w-full text-slate-800 text-sm px-4 py-3 rounded focus:bg-transparent outline-blue-500 transition-all"
          >
            <option value="">Select an option</option>
            <option value="school">School</option>
            <option value="university">University</option>
          </select>
          </div>
          <div>
          <label className="text-slate-800 text-sm font-medium mb-2 block">Name of the Institution</label>
          <input
            name="password"
            type="password"
            required
            className="bg-slate-100 w-full text-slate-800 text-sm px-4 py-3 rounded focus:bg-transparent outline-blue-500 transition-all"
            placeholder="Enter password"
          />
          </div>
          <div>
          <label className="text-gray-800 text-sm font-medium mb-2 block">Education Level</label>
          <select
            name="educationLevel"
            required
            className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3 rounded outline-none"
          >
            <option value="">Select an option</option>
            <option value="schoolStudent">School Student</option>
            <option value="schoolLeaver">School Leaver</option>
            <option value="hndDiploma">HND/Diploma</option>
            <option value="undergraduate">Undergraduate</option>
            <option value="postgraduate">Postgraduate</option>
            <option value="other">Other</option>
          </select>
          </div>
          <div>
          <label className="text-slate-800 text-sm font-medium mb-2 block">Games</label>
          <div className="bg-slate-100 px-4 py-3 rounded focus:bg-transparent outline-blue-500 transition-all">
            <label className="flex items-center space-x-2 mb-2">
            <input type="checkbox" name="games" value="callOfDuty4" required/>
            <span>Call of Duty 4</span>
            </label>
            <label className="flex items-center space-x-2 mb-2">
            <input type="checkbox" name="games" value="valorant" required/>
            <span>Valorant</span>
            </label>
            <label className="flex items-center space-x-2 mb-2">
            <input type="checkbox" name="games" value="rocketLeague" required/>
            <span>Rocket League</span>
            </label>
            <label className="flex items-center space-x-2 mb-2">
            <input type="checkbox" name="games" value="freeFire" required/>
            <span>Free Fire</span>
            </label>
            <label className="flex items-center space-x-2 mb-2">
            <input type="checkbox" name="games" value="pubg" required/>
            <span>PUBG</span>
            </label>
            <label className="flex items-center space-x-2 mb-2">
            <input type="checkbox" name="games" value="callOfDutyMobile" required/>
            <span>Call of Duty: Mobile</span>
            </label>
            <label className="flex items-center space-x-2 mb-2">
            <input type="checkbox" name="games" value="mobileLegends" required/>
            <span>Mobile Legends</span>
            </label>
            <label className="flex items-center space-x-2">
            <input type="checkbox" name="games" value="mortalKombat" required/>
            <span>Mortal Kombat</span>
            </label>
          </div>
          </div>
          <div>
          <label className="text-slate-800 text-sm font-medium mb-2 block">Password</label>
          <input
            name="password"
            type="password"
            required
            className="bg-slate-100 w-full text-slate-800 text-sm px-4 py-3 rounded focus:bg-transparent outline-blue-500 transition-all"
            placeholder="Enter password"
          />
          </div>
          <div>
          <label className="text-slate-800 text-sm font-medium mb-2 block">Confirm Password</label>
          <input
            name="cpassword"
            type="password"
            required
            className="bg-slate-100 w-full text-slate-800 text-sm px-4 py-3 rounded focus:bg-transparent outline-blue-500 transition-all"
            placeholder="Enter confirm password"
          />
          </div>
        </div>
        <div className="mt-12">
          <button
          type="button"
          className="mx-auto block py-3 px-6 text-sm font-medium tracking-wider rounded text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
          >
          Sign up
          </button>
        </div>
        </form>
      </div>
      </section>
    )
}