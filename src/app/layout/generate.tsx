"use client";

import { ChevronDown } from "lucide-react";
import { generateData } from "../config/data/Data";
import Wrapper from "../ReusableComp/wrapper";

function Generate() {
  return (
    <Wrapper>
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center px-4 gap-2 sm:gap-0">
        <h1 className="text-2xl">Generate</h1>

        <div className="flex hover:text-blue-500 cursor-pointer items-center max-sm:hidden">
          <ChevronDown className="mr-1" /> Show all
        </div>
      </div>

      {/* Grid */}
      <div
        className="
          grid gap-5 px-4 mt-4
          grid-cols-1
          sm:grid-cols-2
          md:grid-cols-3
          lg:grid-cols-4
        "
      >
        {generateData.map((items, index) => (
          <div
            key={index}
            className="
              flex flex-col sm:flex-row
              sm:items-center
              gap-4
              w-full
              h-auto sm:h-[100px]
            "
          >
            {/* Left section */}
            <div className="flex items-center gap-3">
              <div
                className="py-1 px-1 rounded-lg shrink-0"
                style={{
                  background: `linear-gradient(135deg, ${items.bg} 0%, ${items.bg}80 100%)`,
                }}
              >
                <items.image width={50} height={50} />
              </div>

              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                  <h3 className="font-medium">{items.name}</h3>
                  <p className="bg-blue-600 text-sm text-white py-1 px-2 rounded-full">
                    {items.activity}
                  </p>
                </div>
                <p className="text-sm break-words">{items.text}</p>
              </div>
            </div>

            {/* Right section */}
            <div className="bg-gray-100 px-2 py-1 rounded-full text-black w-fit">
              {items.state}
            </div>
          </div>
        ))}
      </div>
    </Wrapper>
  );
}

export default Generate;
