import React from "react";
import Form from "./Form";

function ContactData() {
  return (
    <>
      <div className="max-w-screen md:min-h-screen container mx-auto md:px-24 px-7 p-8 flex items-center flex-col-reverse md:flex-col pt-24 md:pt-24 pb-10 dark:">

        {/* Google Form */}
        <div className="w-full rounded-xl shadow-2xl md:relative">
          <iframe
            className="rounded-xl md:flex hidden "
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d464.8636903990164!2d72.85172488213965!3d21.235436093683386!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04f27ed6164f3%3A0xe5004508473511dc!2sJivan%20Jyot%20School!5e0!3m2!1sen!2sin!4v1720967850769!5m2!1sen!2sin"
            width="100%"
            height="520"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />

          {/* contact card */}
          <div className="flex flex-col md:w-[350px] md:h-[450px] p-6 bg-slate-100 container shadow-2xl rounded-lg md:absolute md:right-32 md:bottom-10 justify-center pb-8 dark:text-black">
            <h3 className="text-2xl font-semibold text-purple-800 mb-10">
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
