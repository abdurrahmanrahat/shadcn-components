/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { TInterview } from "@/types";
import { formatDateAndTime } from "@/utils/formatDateAndTime";
import Image from "next/image";
import { useState } from "react";
import { BsCalendar2Date } from "react-icons/bs";
import { GiDuration } from "react-icons/gi";
import { IoMdArrowDropdown } from "react-icons/io";
import { MdOutlineAccessTime } from "react-icons/md";

const InterviewAnother = ({ interview }: { interview: TInterview }) => {
  const [dark, setDark] = useState(false);
  const [status, setStatus] = useState(interview.status);

  return (
    <div
      key={interview._id}
      className={`rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 relative overflow-hidden ${
        dark ? "bg-gray-900" : "bg-white"
      }`}
    >
      {/* Image Section */}
      <div className="w-full flex justify-center items-center">
        <Image
          src="https://i.ibb.co.com/bgyKm60/william-black.png"
          alt="interviewee image"
          width={300}
          height={200}
          className="w-full object-cover h-[260px] rounded-lg"
        />
      </div>

      {/* Info Section */}
      <div className="p-6 flex flex-col justify-center w-full space-y-6">
        {/* Name & Email */}
        <div className="flex justify-between items-center">
          <div>
            <h4
              className={`text-[24px] font-bold leading-tight ${
                dark ? "text-gray-100" : "text-gray-800"
              }`}
            >
              Abdur Rahman
            </h4>
            <p
              className={`text-sm ${dark ? "text-gray-300" : "text-gray-500"}`}
            >
              {interview.interviewee.email}
            </p>
          </div>

          {/* <div className="relative flex items-center justify-end w-full mt-4">
            <Select value={status} onValueChange={setStatus}>
              <SelectTrigger className="w-[100px] bg-white">
                <SelectValue
                  className="bg-red-600"
                  placeholder="Select status"
                />
              </SelectTrigger>
              <SelectContent className="bg-white" position="popper">
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="confirmed">Confirmed</SelectItem>
                <SelectItem value="cancelled">Cancelled</SelectItem>
              </SelectContent>
            </Select>
          </div> */}
          <div className="relative inline-block">
            <select
              className="appearance-none w-full bg-gray-100 border border-gray-200 rounded px-3 py-2 pr-5 text-gray-800 focus:outline-none cursor-pointer text-[15px]"
              onChange={(e) => console.log(e.target.value)}
              defaultValue={interview.status}
            >
              <option value="pending">Pending</option>
              <option value="confirmed">Confirmed</option>
              <option value="cancelled">Cancelled</option>
            </select>
            <span className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
              <IoMdArrowDropdown />
            </span>
          </div>
        </div>

        {/* Date, Time, and Duration */}
        <div
          className={`border-t pt-4 flex justify-between ${
            dark ? "border-gray-600" : "border-gray-300"
          }`}
        >
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <BsCalendar2Date className="text-[#3AB6FF] text-[20px]" />
              <p
                className={`${
                  dark ? "text-gray-200" : "text-gray-600"
                } text-[15px]`}
              >
                {formatDateAndTime(interview.scheduledAt).formattedDate}
              </p>
            </div>

            <div className="flex items-center gap-2">
              <MdOutlineAccessTime className="text-[#4CAF50] text-[20px]" />
              <p
                className={`${
                  dark ? "text-gray-200" : "text-gray-600"
                } text-[15px]`}
              >
                {formatDateAndTime(interview.scheduledAt).formattedTime}
              </p>
            </div>

            <div className="flex items-center gap-2">
              <GiDuration className="text-[#1BB7AA] text-[20px]" />
              <p
                className={`${
                  dark ? "text-gray-200" : "text-gray-600"
                } text-[15px]`}
              >
                {interview.duration} min
              </p>
            </div>
          </div>

          {/* Fee & Join Button */}
          <div className="flex flex-col items-end space-y-4">
            <div className="flex items-center gap-1 text-[18px] font-semibold">
              <span className="text-[#1BB7AA]">$</span>
              <p className={`${dark ? "text-gray-100" : "text-gray-700"}`}>
                {interview.interviewFee}/hr
              </p>
            </div>

            {/* Join Button */}
            <button className="bg-[#0694a2] text-white px-8 py-2 rounded-full shadow-md hover:bg-[#047481] hover:shadow-lg transition-all duration-300">
              Join
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InterviewAnother;
