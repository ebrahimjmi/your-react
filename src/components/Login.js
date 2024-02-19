import React, { useRef, useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [formData, setFormData] = useState({
    email: "",
    passwered: "",
  });

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setFormData((preData) => {
      return { ...preData, [name]: value };
    });
    console.log(formData);
  };
  const handleFormSubmit = (e) => {
    console.log(formData);
  };
  return (
    <div className="mt-4">
      <div className="login-form m-auto w-1/3">
        <h3 className="text-xl font-bold mb-6">Sign in to your account</h3>
        <form onSubmit={(e) => e.preventDefault()}>
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-none"
              onChange={handleInput}
              value={formData.email}
              placeholder="name@company.com"
              required=""
            />
          </div>
          <div className="mt-3">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your Passwered
            </label>
            <input
              type="passwered"
              name="passwered"
              id="passwered"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-none"
              onChange={handleInput}
              value={formData.passwered}
              placeholder="name@company.com"
              required=""
            />
          </div>
          <div className="mt-3">
            <button
              onClick={handleFormSubmit}
              className="py-2 px-4 text-white bg-blue-400 rounded-lg"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
