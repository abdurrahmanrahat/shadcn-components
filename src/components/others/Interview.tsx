/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import MainModal from "@/components/others/Modal/MainModal";
import { TInterview } from "@/types";
import { formatDateAndTime } from "@/utils/formatDateAndTime";
import Image from "next/image";
import { useEffect, useState } from "react";
import { BsCalendar2Date } from "react-icons/bs";
import { GiDuration } from "react-icons/gi";
import { MdOutlineAccessTime } from "react-icons/md";

const Interview = ({ interview }: { interview: TInterview }) => {
  const [dark, setDark] = useState(false);
  const [isCancelledModalOpen, setIsCancelledModalOpen] = useState(false);
  const [isButtonEnabled, setIsButtonEnabled] = useState(false);

  // cancelled handler
  const handleCancelled = () => {
    setIsCancelledModalOpen(true);
  };

  // approved handler
  const handleApproved = () => {};

  const convertToLocalTime = (utcDateString: string) => {
    const utcDate = new Date(utcDateString);
    return new Date(
      utcDate.getUTCFullYear(),
      utcDate.getUTCMonth(),
      utcDate.getUTCDate(),
      utcDate.getUTCHours(),
      utcDate.getUTCMinutes(),
      utcDate.getUTCSeconds()
    );
  };

  // check time for button active or disabled
  useEffect(() => {
    const scheduledDate = new Date(interview.scheduledAt);

    const checkButtonStatus = () => {
      const currentDate = new Date();
      const localScheduledDate = convertToLocalTime(scheduledDate);

      const timeDifference =
        localScheduledDate.getTime() - currentDate.getTime();
      console.log(timeDifference);
      console.log("schedule time ==>", scheduledDate.getTime());
      console.log("current time ==>", currentDate.getTime());

      if (timeDifference <= 60000) {
        setIsButtonEnabled(true);
      } else {
        setIsButtonEnabled(false);
      }
    };

    checkButtonStatus();

    const intervalId = setInterval(checkButtonStatus, 6000);

    return () => clearInterval(intervalId);
  }, [interview]);

  return (
    <div
      key={interview._id}
      className={`lg:flex p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 w-full lg:min-w-[400px] ${
        dark ? "bg-gray-800" : "bg-white"
      }`}
    >
      {/* Image Section */}
      <div className="w-full flex lg:flex-col justify-center items-start">
        <div className="w-full flex justify-start items-start pt-2 lg:pt-0">
          <Image
            src="https://i.ibb.co.com/bgyKm60/william-black.png"
            // src={interview.interviewee.image}
            alt="interviewee image"
            width={100}
            height={100}
            className="rounded-full object-cover"
          />
        </div>

        <div className="w-full pt-4 space-y-1">
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
      </div>

      <div className="w-full flex flex-col justify-center space-y-4 mt-6 lg:mt-0">
        {/* Info Section */}
        <div className="flex lg:flex-col justify-center gap-4 border-t lg:border-none pt-4">
          <div>
            <h4
              className={`text-[24px] font-bold leading-tight ${
                dark ? "text-gray-100" : "text-gray-800"
              }`}
            >
              Abdur Rahman
            </h4>
            <p
              className={`text-sm ${dark ? "text-gray-200" : "text-gray-500"}`}
            >
              {interview.interviewee.email}
            </p>
          </div>

          <div
            className={`flex items-center justify-center gap-1 border-t pt-4 ${
              dark
                ? "text-gray-200 border-gray-400"
                : "text-gray-700 border-gray-200"
            }`}
          >
            <span className="font-semibold">$</span>
            <p
              className={`text-[16px] font-semibold ${
                dark ? "text-gray-100" : "text-gray-800"
              }`}
            >
              {interview.interviewFee}/hr
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        {interview.status === "pending" && (
          <div className="mt-3 flex justify-center space-x-4">
            <button
              className="bg-[#0694a2] text-white px-6 py-2 rounded-full shadow-md hover:bg-[#047481] hover:shadow-lg transition-all duration-300"
              onClick={handleApproved}
            >
              Approve
            </button>
            <button
              className="bg-[#D55656] text-white px-6 py-2 rounded-full shadow-md hover:bg-[#B03737] hover:shadow-lg transition-all duration-300"
              onClick={handleCancelled}
            >
              Cancel
            </button>

            {/* render modal */}
            {isCancelledModalOpen && (
              <MainModal
                open={isCancelledModalOpen}
                onClose={() => setIsCancelledModalOpen(false)}
              />
            )}
          </div>
        )}

        {interview.status === "confirmed" && (
          <div className="flex justify-center">
            <button
              className={` text-white px-8 py-2 rounded-full shadow-md  hover:shadow-lg ${
                isButtonEnabled
                  ? "bg-[#0694a2] hover:bg-[#047481]"
                  : "bg-gray-400 hover:bg-gray-500"
              } transition-all duration-300`}
              disabled={!isButtonEnabled}
            >
              Join Meeting
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Interview;
