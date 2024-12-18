"use client";
import React, { useState } from "react";
import axios from "axios";
import Link from "next/link";

function Login() {
  const [user, setUser] = React.useState({
    email: "",
    password: "",
  });

  const onLogin = async () => {};

  return (
    <div>
      <div className="w-dvw h-dvh bg-slate-500 flex justify-center items-center">
        <div className="shadow w-2/6 text-center  bg-slate-200 rounded-xl">
          <form action="">
            <h1 className="text-2xl mt-5 font-bold text-slate-600">SIGNUP</h1>
            <div className="mt-5 mb-5 flex items-start flex-col w-5/6 mx-auto">
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
                type="text"
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
              type="submit"
            >
              Login
            </button>
            <div className="text-sm text-slate-600">
              Don't have an account already?
              <span className="text-blue-700 text-sm">
                <Link href="/signup" className="text-blue-700">
                  Signup
                </Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
