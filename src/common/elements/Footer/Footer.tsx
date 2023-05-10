import React from "react";

export default function Footer() {
  return (
    <footer className="bg-black dark:bg-gray-900">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8 pt-5 p-12  ">
        <div className="sm:flex items-start p-6">
          <div className="flex-1  pr-6">
            <h4 className="text-white font-medium text-lg mb-6">
              Techshore Limited
            </h4>
            <span className="text-white text-sm">
              Driving quality and excellence through empowering online presence
            </span>
          </div>
          <ul className="w-full flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400 flex-1">
            <li className="mb-6">
              <span className="text-white mr-4 md:mr-6 mb-6 text-lg">
                Community
              </span>
            </li>
            <li className="">
              <span className="text-white mr-4 md:mr-6 text-sm font-light">
                Projects
              </span>
            </li>
            <li className="mt-4">
              <span className="text-white mr-4 md:mr-6 text-sm font-light">
                Team
              </span>
            </li>
            <li className="mt-4">
              <span className="text-white mr-4 md:mr-6 text-sm font-light">
                Review
              </span>
            </li>
            <li className="mt-4">
              <span className="text-white mr-4 md:mr-6 text-sm font-light">
                FAQ
              </span>
            </li>
          </ul>
          <ul className="w-full flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400 flex-1">
            <li className="mb-6">
              <span className="text-white mr-4  md:mr-6">Company</span>
            </li>
            <li className="">
              <span className="text-white mr-4 md:mr-6 text-sm font-light">
                About Us
              </span>
            </li>
            <li className="mt-4">
              <span className="text-white mr-4 md:mr-6 text-sm font-light">
                Career
              </span>
            </li>
            <li className="mt-4">
              <span className="text-white mr-4 md:mr-6 text-sm font-light">
                Our Story
              </span>
            </li>
            <li className="mt-4">
              <span className="text-white mr-4 md:mr-6 text-sm font-light">
                Contact
              </span>
            </li>
            <li className="mt-4">
              <span className="text-white mr-4 md:mr-6 text-sm font-light">
                Meet our Team
              </span>
            </li>
          </ul>
          <ul className="w-full flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400 flex-1">
            <li className="mb-6">
              <span className="text-white mr-4  md:mr-6 ">
                Have a Question?
              </span>
            </li>
            <li className="">
              <span className="text-white mr-4 md:mr-6 text-sm font-light">
                6TH FLOOR, SHEIKH KAMAL IT BUSINESS INCUBATOR, CUET, RAOZAN,
                CHITTAGONG-4349
              </span>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-300 sm:text-center">
          © 2023{" "}
          <a href="https://flowbite.com/" className="hover:underline">
            TechShore Limited™
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}
