import React from "react";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
import toast from "react-hot-toast";
const Profile = () => {
  const { user, updateUserProfile } = useContext(AuthContext);

  const profileUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photoUrl = form.photoUrl.value;
    const email = form.email.value;
    updateUserProfile(name, photoUrl, email).then((result) => {
      toast.success("profile update successfull");
    });
  };
  return (
    <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div>
          <h2 className="mt-6 mb-5 text-center text-3xl font-bold tracking-tight text-gray-400">
            Update your account
          </h2>
        </div>
        <form onSubmit={profileUpdate}>
          <div className="mb-1 sm:mb-2">
            <label
              htmlFor="firstName"
              className="inline-block mb-1 font-medium"
            >
              Name
            </label>
            <input
              defaultValue={
                user.displayName ? user.displayName : "Name not found"
              }
              required
              type="text"
              className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
              id="firstName"
              name="name"
            />
          </div>
          <div className="mb-1 sm:mb-2">
            <label htmlFor="photoUrl" className="inline-block mb-1 font-medium">
              Photo URL
            </label>
            <input
              defaultValue={
                user.photoURL ? user.photoURL : "photoUrl not found"
              }
              required
              type="text"
              className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
              id="photoUrl"
              name="photoUrl"
            />
          </div>

          <div className="mb-1 sm:mb-2">
            <label htmlFor="email" className="inline-block mb-1 font-medium">
              E-mail
            </label>
            <input
              defaultValue={user.email ? user.email : "Email not found"}
              required
              type="text"
              className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
              id="email"
              name="email"
            />
          </div>

          <div className="mt-4 mb-2 sm:mb-4">
            <button
              type="submit"
              className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-black transition duration-200 rounded shadow-md bg-deep-purple-accent-400 bg-green-700 hover:bg-green-600 focus:shadow-outline focus:outline-none"
            >
              Update Profile
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Profile;
