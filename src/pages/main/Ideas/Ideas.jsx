// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { getIdeas } from "../../../utils/ApiController";
import { DateFormater } from "../../../utils/DateFormater";
import {
  HiChevronLeft,
  HiChevronDoubleLeft,
  HiChevronRight,
  HiChevronDoubleRight,
} from "react-icons/hi";

const Ideas = () => {
  const [ideas, setIdeas] = useState([]);
  const backgroundImage = "/public/hero/hero.jpg";

  const fetchData = async () => {
    const ideasData = await getIdeas();
    setIdeas(ideasData);
  };

  useEffect(() => {
    fetchData();
  }, []);

  
  

  return (
    <main>
      <section className="w-full h-screen relative">
        <div
          style={{
            content: '""',
            backgroundImage: `url(${backgroundImage})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            clipPath: "polygon(0 0, 100% 0%, 100% 73%, 0 99%)",
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            filter: "brightness(0.5)", // Adjust brightness as needed (0.5 for 50% brightness)
            zIndex: -1,
          }}
        ></div>
        <div className="relative z-10 w-full h-full flex flex-col justify-center gap-y-4 items-center text-white">
          <h1 className="text-5xl font-bold">Ideas</h1>
          <p>Where all our great things begin</p>
        </div>
      </section>
      <section className="w-full min-h-screen">
        <div className="max-w-screen-xl mx-auto flex flex-col gap-y-2 px-4 py-12">
          <div className="flex md:items-center md:flex-row justify-between flex-col-reverse gap-y-6">
            <span className="font-semibold text-xs md:text-sm lg:text-base w-full">
              Showing 1-10 of 100
            </span>
            <div className="flex gap-x-4 justify-end items-center font-semibold text-xs md:text-sm w-full">
              <div className="flex gap-x-2 md:items-center flex-col gap-y-2 w-full md:w-auto md:flex-row">
                <label htmlFor="showperpage w-full">Show per page :</label>
                <select
                  name="showperpage"
                  id="showperpage"
                  className="rounded-full text-xs md:text-sm"
                >
                  <option value="">10</option>
                  <option value="">20</option>
                  <option value="">50</option>
                </select>
              </div>
              <div className="flex gap-x-2 md:items-center flex-col gap-y-2 w-full md:w-auto md:flex-row">
                <label htmlFor="showperpage">Sort By :</label>
                <select
                  name="showperpage"
                  id="showperpage"
                  className="rounded-full text-xs md:text-sm"
                >
                  <option value="">Newest</option>
                  <option value="">Oldest</option>
                  <option value="">All</option>
                </select>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-12 gap-x-6 gap-y-10 mt-4">
            {ideas.map((data) => (
              <div
                key={data.id}
                className="col-span-12 md:col-span-6 lg:col-span-3 flex flex-col rounded-md shadow-md"
              >
                <div className="rounded-t-md max-h-40">
                  <img src="/hero/hero.jpg" alt="" className="rounded-t-md" />
                </div>
                <div className="bg-white px-6 py-8 rounded-b-md">
                  <span className="text-neutral-400 font-semibold text-sm">
                    {DateFormater(data.updated_at)}
                  </span>
                  <p className="font-bold ">{data.title}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="w-full flex justify-center items-center mt-8 gap-x-2 text-sm">
            <HiChevronLeft className="hover:cursor-pointer"></HiChevronLeft>
            <HiChevronDoubleLeft className="hover:cursor-pointer"></HiChevronDoubleLeft>
            <button className="border px-3.5 py-2 rounded-md bg-color-primary-500 text-white font-semibold">
              1
            </button>
            <button className="border px-3.5 py-2 rounded-md font-semibold">
              2
            </button>
            <button className="border px-3.5 py-2 rounded-md font-semibold">
              3
            </button>
            <button className="border px-3.5 py-2 rounded-md font-semibold">
              4
            </button>
            <button className="border px-3.5 py-2 rounded-md font-semibold">
              5
            </button>
            <HiChevronDoubleRight className="hover:cursor-pointer"></HiChevronDoubleRight>
            <HiChevronRight className="hover:cursor-pointer"></HiChevronRight>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Ideas;
