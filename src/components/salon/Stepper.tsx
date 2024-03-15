"use client";
import { FC, useState } from "react";
import { useStepperContext } from "@/providers/StepperProvider";

export const Stepper: FC = () => {
  const { command } = useStepperContext();
  const hasWorkerId = command?.dto.WorkerId;
  const hasServiceId = command?.dto.ServiceId;

  return (
    <div>
      <ol className="flex justify-between items-center w-full text-sm  md:px-0 font-medium text-center text-gray-500 sm:text-base flex-wrap:nowrap">
        <li
          className={`text-blue-600 after:content-[''] ${
            hasServiceId ? "after:w-2" : "after:w-8"
          } after:w-2 md:after:w-full after:h-1 after:border-b after:border-gray-300 after:border-1  after:inline-block after:mx-2  whitespace-nowrap flex w-full items-center`}
        >
          <svg
            className="w-6 h-6 sm:w-10 sm:h-10 me-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
          </svg>
          Vælg behandling
        </li>
        <li
          className={`flex w-full items-center ${
            hasServiceId ? "text-blue-600 " : "text-gray-500 "
          } ${
            hasWorkerId ? " after:w-2" : " after:w-12"
          } after:content-[''] md:after:w-full after:h-1 after:border-b after:border-gray-300 after:border-1  after:inline-block after:mx-2  whitespace-nowrap`}
        >
          {hasServiceId && (
            <svg
              className="w-6 h-6 sm:w-10 sm:h-10 me-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
            </svg>
          )}
          Vælg frisør
        </li>
        <li
          className={`flex items-center ${
            hasWorkerId ? "text-blue-600" : "text-gray-500"
          } whitespace-nowrap`}
        >
          {hasWorkerId && (
            <svg
              className="w-6 h-6 sm:w-7 sm:h-7 me-2.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
            </svg>
          )}
          Godkend
        </li>
      </ol>
    </div>
  );
};
