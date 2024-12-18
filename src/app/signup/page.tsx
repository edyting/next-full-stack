'use client'
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';

function Signup() {
  const router = useRouter();

  const [user, setUser] = React.useState({
    username: "",
    email: "",
    password: "",
  });

  // to make button clickable or not
  const [buttonDisabled, setButtonDisabled] = React.useState(false);

  useEffect(() => {
    if (user.username.length > 0 && user.email.length > 0 && user.password.length > 0) {
      setButtonDisabled(false)
    } else {
      setButtonDisabled(true);
    }
  }, [user]);

  // loading
  const [isLoading, setIsLoading] = React.useState(false);

  const onSignup = async () => {
    try {
      setIsLoading(true);
      const response = await axios.post('/api/users/signup', user);
      console.log("response from post request:" + response.data.message);
      router.push("/login");
    } catch (error:any) {
      toast.error(error.message);
      console.log(error.message);
    } finally {
      setIsLoading(false)
    }
  };
  
  return (
    <div>
      <div className="w-dvw h-dvh bg-slate-500 flex justify-center items-center">
        <div className="shadow w-2/6 text-center  bg-slate-200 rounded-xl">
          <form action="" >
            <h1 className="text-2xl mt-5 font-bold text-slate-600">
              {isLoading ? "Loading..." : "SIGNUP"}
            </h1>
            <div className="mt-5 mb-5 flex flex-col items-start w-5/6 mx-auto">
              <label htmlFor="username" className="text-slate-700">
                UserName:
              </label>
              <input
                type="text"
                placeholder="please enter username here"
                className="px-4 rounded-md w-full py-2 "
                id="username"
                onChange={(e) => {
                  setUser({ ...user, username: e.target.value });
                }}
              />
            </div>
            <div className=" mb-5 flex items-start flex-col w-5/6 mx-auto">
              <label htmlFor="email" className="text-slate-700">
                Email:
              </label>
              <input
                type="text"
                placeholder="please enter email: here"
                className="px-4 w-full rounded-md py-2 "
                id="email"
                onChange={(e) => {
                  setUser({ ...user, email: e.target.value });
                }}
              />
            </div>
            <div className=" mb-5 flex items-start flex-col w-5/6 mx-auto">
              <label htmlFor="password" className="text-slate-700">
                Password:
              </label>
              <input
                type="password"
                placeholder="please enter password here"
                className="px-4 w-full rounded-md py-2 "
                id="password"
                onChange={(e) => {
                  setUser({ ...user, password: e.target.value });
                }}
              />
            </div>

            <button
              className="bg-blue-400 hover:bg-blue-600 hover:font-semibold mb-5 text-white rounded-lg  px-4 py-2"
              type="button"
              onClick={onSignup}

            >
              {buttonDisabled ? "No Signup" : "Signup"}
            </button>
            <div className="text-sm text-slate-600">
              Have an account already?
              <span className="text-blue-700 text-sm">
                <Link href="/login" className="text-blue-700">
                  Login
                </Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup
