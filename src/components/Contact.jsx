import React from "react";

const Contact = () => {
  return (
    <div
      id="contact"
      className="m-auto h-screen max-w-[1040px] p-4 py-10 md:pl-20"
    >
      <h1 className="py-4 text-center text-4xl font-bold text-[#001b53]">
        Contact
      </h1>
      <form
        action="https://getform.io/f/4bc69e9e-8e09-40ed-9da9-992b1aa3c6ec"
        method="POST"
        encType="multipart/form-data"
      >
        <div className="grid w-full gap-4 py-2 md:grid-cols-2">
          <div className="flex flex-col">
            <label className="py-2 text-sm uppercase">Name</label>
            <input
              className="flex rounded-lg border-2 border-gray-300 p-2"
              type="text"
              name="name"
              // placeholder="Please Enter Your Name"
              required
            />
          </div>
          <div className="flex flex-col">
            <label className="py-2 text-sm uppercase">Phone</label>
            <input
              className="flex rounded-lg border-2 border-gray-300 p-2"
              type="number"
              name="phone"
              // placeholder="Please Enter Your Contact Number"
              required
            />
          </div>
        </div>
        <div className="flex flex-col py-2">
          <label className="py-2 text-sm uppercase">Email</label>
          <input
            className="flex rounded-lg border-2 border-gray-300 p-2"
            type="email"
            name="email"
            required
          />
        </div>
        <div className="flex flex-col py-2">
          <label className="py-2 text-sm uppercase">Subject</label>
          <input
            className="flex rounded-lg border-2 border-gray-300 p-2"
            type="text"
            name="subject"
          />
        </div>
        <div className="flex flex-col py-2">
          <label className="py-2 text-sm uppercase">Message</label>
          <textarea
            className="rounded-l border-2 border-gray-300"
            name="message"
            rows="10"
          ></textarea>
        </div>
        <button className="mt-4 w-full rounded-lg bg-[#001b5e] p-3 text-gray-100 hover:bg-[#001b5ee0]">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
