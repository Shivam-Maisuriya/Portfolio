import React from "react";
import Form from "./Form";

function ContactData() {
  return (
    <>
      <div className="max-w-screen lg:min-h-screen mx-auto md:px-24 px-7 p-8 flex items-center flex-col-reverse md:flex-col pt-24 md:pt-24 pb-10 dark:">
        {/* Google Form */}
        <div className="w-full rounded-3xl shadow-3xl md:relative dark:shadow-purple-600">
          <iframe
            className="rounded-xl md:flex hidden "
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d232.43194084211908!2d72.85135633013148!3d21.235375421207277!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1737784251555!5m2!1sen!2sin"
            width="100%"
            height="520"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />

          {/* contact card */}
          <div className="flex flex-col md:w-[350px] md:h-[450px] p-6 bg-slate-100 container shadow-2xl  rounded-md md:absolute md:right-20 md:bottom-10 justify-center pb-8 text-black dark:shadow-slate-600 dark:bg-slate-700 dark:text-slate-300">
            <h3 className="text-2xl font-semibold text-purple-600 mb-10">
              Contact Me
            </h3>
            <Form />
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactData;
