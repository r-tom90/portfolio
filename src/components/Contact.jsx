import React from "react";

const Contact = () => {
  return (
    // TODO: Adjust dimension
    <div className="dark:bg-gray-900">
      <div
        id="contact"
        className="m-auto h-screen max-w-[1040px] p-4 pt-24 md:px-20"
      >
        <h1 className="py-4 text-center text-4xl font-bold text-[#001b53] dark:text-[#0097b2]">
          Contact
        </h1>
        <form
          action="https://getform.io/f/4bc69e9e-8e09-40ed-9da9-992b1aa3c6ec"
          method="POST"
          encType="multipart/form-data"
        >
          <div className="grid w-full gap-4 md:grid-cols-2">
            <div className="flex flex-col">
              <label className="py-2 text-sm uppercase dark:text-stone-300">
                Name
              </label>
              <input
                className="flex rounded-lg border-2 border-gray-300 p-2"
                type="text"
                name="name"
                // placeholder="Please Enter Your Name"
                required
              />
            </div>
            <div className="flex flex-col">
              <label className="py-2 text-sm uppercase dark:text-stone-300">
                Phone
              </label>
              <input
                className="flex rounded-lg border-2 border-gray-300 p-2"
                type="number"
                name="phone"
                // placeholder="Please Enter Your Contact Number"
                required
              />
            </div>
          </div>
          <div className="flex flex-col">
            <label className="py-2 text-sm uppercase dark:text-stone-300">
              Email
            </label>
            <input
              className="flex rounded-lg border-2 border-gray-300 p-2"
              type="email"
              name="email"
              required
            />
          </div>
          <div className="flex flex-col">
            <label className="py-2 text-sm uppercase dark:text-stone-300">
              Subject
            </label>
            <input
              className="flex rounded-lg border-2 border-gray-300 p-2"
              type="text"
              name="subject"
            />
          </div>
          <div className="flex flex-col">
            <label className="py-2 text-sm uppercase dark:text-stone-300">
              Message
            </label>
            <textarea
              className="rounded-l border-2 border-gray-300"
              name="message"
              rows="10"
            ></textarea>
          </div>
          <button className="mt-4 w-full rounded-lg bg-[#001b5e]  p-3 text-gray-100 hover:bg-[#001b5ee0] dark:bg-[#0097b2]">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
