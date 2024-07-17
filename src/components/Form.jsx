import React from "react";

function Form() {
  return (
    <>
      <form action="">
        <label htmlFor="">
          Name
          <input type="text" className="w-full px-3 py-1 rounded-md mb-3 outline-none" />
        </label>
        <br />
        <label htmlFor="">
          Email
          <input type="text" className="w-full px-3 py-1 rounded-md mb-3 outline-none" />
        </label>
        <br />
        <label htmlFor="">
          Message
          <textarea
            name="Message"
            id="message"
            rows={3}
            className="w-full px-3 py-1 rounded-md mb-6 outline-none"
          ></textarea>
        </label>

        <button className="bg-purple-700 text-white text-lg w-full py-2 px-6 rounded-lg hover:bg-purple-800 duration-500 hover:scale-95">
          Resume
        </button>
      </form>
    </>
  );
}

export default Form;
