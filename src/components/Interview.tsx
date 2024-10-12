"use client";

import { TInterview } from "@/types";
import { formatDateAndTime } from "@/utils/formatDateAndTime";
import Image from "next/image";
import { useState } from "react";

const Interview = ({ interview }: { interview: TInterview }) => {
  const [dark, setDark] = useState(false);

  return (
    <div
      key={interview._id}
      className={`md:flex gap-8 p-6  rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ${
        dark ? "bg-gray-800" : "bg-white"
      }`}
    >
      {/* Image Section */}
      <div className="relative w-full md:w-[400px]">
        <Image
          src="https://i.ibb.co.com/bgyKm60/william-black.png"
          alt="interviewee image"
          width={400}
          height={350}
          className="rounded-lg object-cover w-full h-full"
        />
        <span className="bg-[#3AB6FF] px-2 py-1 w-[90px] text-center text-white font-medium text-[14px] rounded-full absolute top-7 right-0 transform rotate-[45deg] shadow-lg">
          {interview.status}
        </span>
      </div>

      {/* Info Section */}
      <div className="flex flex-col justify-center w-full space-y-4 mt-6 md:mt-0">
        <div>
          <h4
            className={`text-[24px] font-bold leading-tight mb-2 ${
              dark ? "text-gray-100" : "text-gray-800"
            }`}
          >
            Abdur Rahman
          </h4>
          <p className={` text-sm ${dark ? "text-gray-200" : "text-gray-500"}`}>
            abdurrahman47@gmail.com
          </p>
        </div>

        <div
          className={`border-t pt-4 ${
            dark ? "border-gray-400" : "border-gray-200"
          }`}
        >
          <div className="flex gap-2 items-center">
            <p
              className={`font-semibold  ${
                dark ? "text-gray-100" : "text-gray-700"
              }`}
            >
              Date:
            </p>
            <p className={`${dark ? "text-gray-200" : "text-gray-500"}`}>
              {formatDateAndTime(interview.scheduledAt).formattedDate}
            </p>
          </div>

          <div className="flex gap-2 items-center">
            <p
              className={`font-semibold  ${
                dark ? "text-gray-100" : "text-gray-700"
              }`}
            >
              Time:
            </p>
            <p className={`${dark ? "text-gray-200" : "text-gray-500"}`}>
              {formatDateAndTime(interview.scheduledAt).formattedTime}
            </p>
          </div>

          <div className="flex gap-2 items-center">
            <p
              className={`font-semibold  ${
                dark ? "text-gray-100" : "text-gray-700"
              }`}
            >
              Duration:
            </p>
            <p className={`${dark ? "text-gray-200" : "text-gray-500"}`}>
              {interview.duration} Min
            </p>
          </div>
        </div>

        <div
          className={`flex items-center gap-1 mt-4 ${
            dark ? "text-gray-200" : "text-gray-700"
          }`}
        >
          <span className="font-semibold">$</span>
          <p
            className={`text-lg font-semibold ${
              dark ? "text-gray-100" : "text-gray-800"
            }`}
          >
            {interview.interviewFee}/hr
          </p>
        </div>

        {/* Action Buttons */}
        <div className="mt-4 flex space-x-4">
          <button className="bg-[#3AB6FF] text-white px-4 py-2 rounded-md shadow-lg hover:bg-[#34a4e6] transition-colors duration-300">
            Join Meeting
          </button>
          <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded-md shadow-lg hover:bg-gray-200 transition-colors duration-300">
            Reschedule
          </button>
        </div>
      </div>
    </div>
  );
};

export default Interview;
