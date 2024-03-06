"use client";
import { AboutMeTypes } from "@/helpers/types/aboutMe";
import Image from "next/image";
import { useState } from "react";

type Props = {
  data?: AboutMeTypes;
};
function AboutMeBio({ data }: Props) {
  console.log(data);
  return (
    <div className="block sm:flex sm:gap-10 mt-10 sm:mt-20">
      <div className="w-full sm:w-1/4 mb-7 sm:mb-0 flex flex-col gap-5">
        <Image
          src="/images/profile.jpeg"
          width={200}
          height={200}
          className="rounded-lg"
          alt="Profile Image"
        />
        {/* Bahasa */}
        <div>
          <h3 className="text-xl font-bold mb-2 text-ternary-dark dark:text-ternary-light">
            Languages
          </h3>
          {data?.languages.map((lang, index) => (
            <div className="flex items-center gap-3" key={index}>
              <p className="text-ternary-dark dark:text-ternary-light w-32">
                {lang.name}
              </p>
              {/* <p className="text-ternary-dark dark:text-ternary-light">
                {lang.level}
              </p> */}
              <div
                className="flex w-full h-3 bg-gray-200 rounded-full overflow-hidden dark:bg-gray-700"
                role="progressbar"
              >
                <div
                  className="flex flex-col justify-center rounded-full overflow-hidden bg-blue-600 text-xs text-white text-center whitespace-nowrap transition duration-500 dark:bg-blue-500"
                  style={{width: lang.level === "Beginner" ? "30%" : lang.level === "Intermediate" ? "60%" : "100%"}}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="font-general-regular w-full sm:w-3/4 text-left gap-5 flex flex-col">
        <h1 className="text-ternary-dark dark:text-ternary-light text-5xl">{data?.fullName}</h1>
        <h2 className="text-ternary-dark dark:text-ternary-light text-3xl">{data?.title}</h2>
        <p className="mb-4 text-ternary-dark dark:text-ternary-light text-lg">
          {data?.bio}
        </p>
      </div>
    </div>
  );
}

export default AboutMeBio;
