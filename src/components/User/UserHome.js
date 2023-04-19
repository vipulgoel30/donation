/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from "react";
import dummyImage from "../../images/dummy.webp";
import { getAllEvents } from "../../firebase";
import { useDataContext } from "../../context/ContextProvider";
export default function UserHome() {
  document.querySelector("body").style.overflowX = "hidden";

  const [events, setEvents] = useState()
  const { userData: data } = useDataContext()

  useEffect(() => {
    getAllEvents().then(({ success, events }) => { if (success) setEvents(events) })
  }, [])

  return (
    <>
      <div className="pt-32 sm:pt-10 mb-10 max-w-6xl px-8 xl:mx-auto  w-full ">
        <div className="flex gap-12 w-full ">
          <div className="flex-col gap-12 w-full sm:w-2/3 flex">
            <div className="flex sm:hidden gap-4 ">
              <button className="shadow-lg shadow-slate-300 rounded-xl px-10 py-2">
                All Events
              </button>
              <button className="shadow-lg shadow-slate-300 rounded-xl px-10 py-2">
                Recent events
              </button>
            </div>
            {events?.map(({ name, title, description, image, ngoImage, url, date }) => <div key={date} className="flex flex-col px-8 py-4  rounded-3xl shadow-xl w-full gap-6">
              <div className="flex gap-6 items-center">
                <img src={ngoImage || dummyImage} className="rounded-full w-16 h-16" />
                <div className="flex flex-col p-1 gap-.5">
                  <div className="text-2xl tracking-wider text-gray-800 font-extralight">
                    {name}
                  </div>
                  <div className="text-sm text-gray-500 tracking-wide">
                    {Math.floor((Date.now() - date) / (60 * 60 * 1000))} hours
                  </div>
                </div>
              </div>
              <div>
                <img src={image || dummyImage} className="w-full h-64"></img>
              </div>
              <div className="font-semibold text-2xl pl-3 font-mono">
                {title}
              </div>
              <div className="font-light leading-7 -mt-3">
                {description}
              </div>
            </div>)}
          </div>
          <div className="hidden sm:flex flex-col  w-1/3 gap-8">
            <div className="flex flex-col justify-center items-center w-full p-6 pt-12 rounded-2xl shadow-2xl gap-4 relative">
              <img src={data?.image || dummyImage} className="rounded-full shadow-xl w-20 h-20" />
              <div className="text-2xl font-medium tracking-wide text-gray-700">
                {data?.name}
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <div
                className="rounded-xl px-8 py-2  text-lg bg-white shadow-lg shadow-slate-200 hover:shadow-md hover:-translate-y-1 transition-all duration-300"
                style={{
                  backfaceVisibility: "hidden",
                }}
              >
                All events
              </div>
              <div
                className="rounded-xl px-8 py-2  text-lg bg-white shadow-lg shadow-slate-200  hover:shadow-md hover:-translate-y-1 transition-all duration-300"
                style={{
                  backfaceVisibility: "hidden",
                }}
              >
                Recent events
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
