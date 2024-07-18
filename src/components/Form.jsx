import React, { useEffect } from "react";
import { useForm, ValidationError } from '@formspree/react';

function Form() {
  const [state, handleSubmit] = useForm("xldrdkgn");
  useEffect(()=>{
    if (state.succeeded) {
      alert('Thanks For Contacting us');
      document.getElementById("contact-form").reset();
    }
  },[state.succeeded])
  return (
    <>
      <form onSubmit={handleSubmit} method="POST" id="contact-form">
        <label htmlFor="Name">
          Name
          <input type="text" name="Name" className="w-full px-3 py-1 rounded-md mb-3 outline-none" required/>
        </label>
        <ValidationError
          prefix="Name"
          field="Name"
          errors={state.errors}
        />
        <br />
        <label htmlFor="Email">
          Email
          <input type="text" name="Email" className="w-full px-3 py-1 rounded-md mb-3 outline-none" required/>
        </label>
        <ValidationError
          prefix="Email"
          field="Email"
          errors={state.errors}
        />
        <br />
        <label htmlFor="Message">
          Message
          <textarea
            name="Message"
            id="message"
            rows={3}
            className="w-full px-3 py-1 rounded-md mb-6 outline-none"
          required></textarea>
        </label>
        <ValidationError
          prefix="Message"
          field="Message"
          errors={state.errors}
        />

        <button className="bg-purple-700 text-white text-lg w-full py-2 px-6 rounded-lg hover:bg-purple-800 duration-500 hover:scale-95" type="submit" disabled={state.submitting}>
          Submit
        </button>
      </form>
    </>
  );
}

export default Form;
