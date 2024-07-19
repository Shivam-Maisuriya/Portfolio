import React, { useEffect } from "react";
import { useForm, ValidationError } from "@formspree/react";

function Form() {
  const [state, handleSubmit] = useForm("xldrdkgn");
  useEffect(() => {
    if (state.succeeded) {
      // alert('Thanks For Contacting us');
      document.getElementById("contact-form").reset();
    }
  }, [state.succeeded]);
  return (
    <>
      <form onSubmit={handleSubmit} method="POST" id="contact-form">
        <label htmlFor="Name" className="text-md">
          Name
          <input
            type="text"
            name="Name"
            className="w-full px-3 py-1 rounded-md mb-3 outline-none text-md text-black dark:bg-slate-800 dark:text-white"
            placeholder="enter your name"
            required
          />
        </label>

        <br />
        <label htmlFor="Email" className="text-md">
          Email
          <input
            type="email"
            name="Email"
            className="w-full px-3 py-1 rounded-md mb-3 outline-none text-md text-black dark:bg-slate-800 dark:text-white"
            placeholder="enter your email"
            required
          />
        </label>

        <br />
        <label htmlFor="Message" className="text-md">
          Message
          <textarea
            name="Message"
            id="message"
            rows={3}
            className="w-full px-3 py-1 rounded-md mb-6 outline-none text-md text-black dark:bg-slate-800 dark:text-white"
            placeholder="enter a message"
            required
          ></textarea>
        </label>

        <button
          className="bg-purple-700 text-white text-lg w-full py-2 px-6 rounded-lg hover:bg-purple-800 duration-500 hover:scale-95"
          type="submit"
          disabled={state.submitting}
        >
          Submit
        </button>
      </form>
    </>
  );
}

export default Form;
