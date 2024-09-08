import GenderCheckbox from "./GenderCheckbox"

const Signup = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
        <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Signup
          <span className="text-blue-500"> chat-app 2.0</span>
        </h1>
        <form >
          <div>
            <label className="label p-2">
              <span className=" text-base label-text">Username</span>
            </label>
            <input
              type="text"
              placeholder="Enter Username"
              className="input input-bordered w-full h-10"
            />
          </div>
          {/* fullname div */}
          <div>
            <label className="label">
              <span className="text-base label-text"> Fullname</span>
            </label>
            <input type="text" placeholder="fullname" className="w-full input input-bordered h-10"/>
          </div>
          <div>
            <label className="label">
              <span className="text-base label-text"> Password</span>
            </label>
            <input type="text" placeholder="password" className="w-full input input-bordered h-10"/>
          </div>
          <div>
            <label className="label">
              <span className="text-base label-text"> Confirm Password</span>
            </label>
            <input type="text" placeholder="password" className="w-full input input-bordered h-10"/>
          </div>
          <GenderCheckbox/>

          <a className="text-sm text-blue-500 hover:text-blue-600 mt-2 inline-block" href="#">Already have an account?</a> 

          <div>
            <button type="submit" className="btn btn-block btn-sm mt-2">Signup</button>
          </div>
        </form>
        </div>
    </div>
  )
}
export default Signup