"use client";
import React, { useState } from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";
import logoSrc from "/public/images/logo.png";
import Eyes from "/public/images/eyes.png";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };
    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/send";

    // Form the request for sending data to the server.
    const options = {
      // The method is POST because we are sending data.
      method: "POST",
      // Tell the server we're sending JSON.
      headers: {
        "Content-Type": "application/json",
      },
      // Body of the request is the JSON data we created above.
      body: JSONdata,
    };

    const response = await fetch(endpoint, options);
    const resData = await response.json();

    if (response.status === 200) {
      console.log("Message sent.");
      setEmailSubmitted(true);
    }
  };

  return (
    <section
      id="contact"
      className="relative my-12 grid gap-4 py-24 md:my-12 md:grid-cols-2"
    >
      <Image
        src={Eyes}
        alt="Decorative Eyes"
        width={100}
        height={100}
        className="-translate-1/2 absolute -left-4 top-3/4 z-0 -translate-x-1/2 transform opacity-70"
      />
      <div className="z-10">
        <h5 className="my-2 text-xl font-bold text-black">
          Let&apos;s Connect 🌈
        </h5>
        <p className="mb-4 max-w-md text-[#ADB7BE]">
          {" "}
          Always open to new opportunities and genuine conversations. If you’d
          like to share an idea, ask a question, or just say hi, my inbox is
          here for you. I’ll get back to you with care.
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href="github.com">
            <Image src={GithubIcon} alt="Github Icon" />
          </Link>
          <Link href="https://www.linkedin.com/in/anaeggerdemier/">
            <Image src={LinkedinIcon} alt="Linkedin Icon" />
          </Link>
          <Link
            href="https://bravasintech.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={logoSrc}
              alt="BRAVAS In Tech Logo"
              width={50}
              height={50}
            />
          </Link>
        </div>
      </div>
      <div>
        {emailSubmitted ? (
          <p className="mt-2 text-sm text-green-500">
            Email sent successfully!
          </p>
        ) : (
          <form className="flex flex-col" onSubmit={handleSubmit}>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-black"
              >
                Your email
              </label>
              <input
                name="email"
                type="email"
                id="email"
                required
                className="block w-full rounded-lg border border-[#33353F] bg-[#f4f4f4] p-2.5 text-sm text-gray-100 placeholder-[#9CA2A9]"
                placeholder="maria@google.com"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="subject"
                className="mb-2 block text-sm font-medium text-black"
              >
                Subject
              </label>
              <input
                name="subject"
                type="text"
                id="subject"
                required
                className="block w-full rounded-lg border border-[#33353F] bg-[#f4f4f4] p-2.5 text-sm text-gray-100 placeholder-[#9CA2A9]"
                placeholder="Just saying hi"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-medium text-black"
              >
                Message
              </label>
              <textarea
                required
                name="message"
                id="message"
                className="block w-full rounded-lg border border-[#33353F] bg-[#f4f4f4] p-2.5 text-sm text-gray-100 placeholder-[#9CA2A9]"
                placeholder="Let's talk about..."
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-lg bg-[#ed6a4c] px-5 py-2.5 font-medium text-black hover:bg-[#f4f4f4]"
            >
              Send Message
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default EmailSection;
