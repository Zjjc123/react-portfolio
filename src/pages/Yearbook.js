import React, { useState } from "react";
import { motion } from "framer-motion";
import { db } from "../firebase/firebase";
import { collection, addDoc } from "firebase/firestore";
import emailjs from "emailjs-com";
import { NavLink } from "react-router-dom";

function Yearbook() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await addDoc(collection(db, "yearbook"), {
        name: name,
        message: message,
      });
      emailjs
        .sendForm(
          "service_xgqu39a",
          "yearbook_template",
          e.target,
          "user_JYZ0WwUBco2RUyutgH4np"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
      alert("Yearbook has been submitted!");
      setName("");
      setMessage("");
    } catch (e) {
      alert(e.message);
    }
  };
  return (
    <motion.div
      className="page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="container">
        <form
          id="contact-me"
          className="w-full mx-auto max-w-3xl bg-white shadow p-8 text-gray-700"
          onSubmit={handleSubmit}
        >
          <h2 className="w-full my-2 text-3xl font-bold leading-tight my-5">
            Sign My Yearbook &#10084; &#129730;
          </h2>
          <div className="flex flex-wrap mb-6">
            <div className="relative w-full appearance-none label-floating">
              <input
                name="name"
                className="tracking-wide py-2 px-4 mb-3 leading-relaxed appearance-none block w-full bg-gray-200 border border-gray-200 rounded focus:outline-none focus:bg-white focus:border-gray-500"
                id="name"
                type="text"
                placeholder="Your name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          </div>
          <div className="flex flex-wrap mb-6">
            <div className="relative w-full appearance-none label-floating">
              <textarea
                name="message"
                className="autoexpand tracking-wide pt-5 pb-10 px-4 mb-3 leading-relaxed appearance-none block w-full bg-gray-200 border border-gray-200 rounded focus:outline-none focus:bg-white focus:border-gray-500"
                id="message"
                type="text"
                placeholder="How Jason is so cool!"
                value={message}
                required
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>
          </div>

          <div className="">
            <button
              className="w-full shadow bg-blue-400 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
              type="submit"
            >
              Send
            </button>
          </div>
          <div className="pt-4">
            <NavLink
              className="text-blue-400 hover:text-blue-200"
              to="/yearbook-signed"
            >
              View Signed
            </NavLink>
          </div>
        </form>
      </div>
    </motion.div>
  );
}

export default Yearbook;
