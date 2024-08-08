// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { getIdeas } from "../../../utils/ApiController";
import { DateFormater } from "../../../utils/DateFormater";
import Pagination from "../../../components/Pagination/Pagination";
import CardImage from "../../../components/CardImage/CardImage";
import fallBackImage from "/hero/hero.jpg";
import backgroundImage from '/hero/hero.jpg';


const Ideas = () => {
  const [ideas, setIdeas] = useState([]);
  const [pageNow, setPageNow] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [totalItems, setTotalItems] = useState(0);
  const [sortBy, setSortBy] = useState("newest");

  const fetchData = async (
    pageNumber = 1,
    pageSize = 10,
    sortBy = "newest"
  ) => {
    try {
      const { data, totalPages, totalItems } = await getIdeas(
        pageNumber,
        pageSize,
        sortBy
      );
      setIdeas(data);
      setTotalPages(totalPages);
      setTotalItems(totalItems);
    } catch (error) {
      console.error("Failed to fetch ideas:", error);
    }
  };

  useEffect(() => {
    fetchData(pageNow, pageSize, sortBy);
  }, [pageNow, pageSize, sortBy]);

  const handlePageChange = (newPage) => {
    if (newPage < 1 || newPage > totalPages) return;
    setPageNow(newPage);
  };

  const handlePageSizeChange = (event) => {
    setPageSize(Number(event.target.value));
    setPageNow(1); // Reset to page 1 when page size changes
  };

  const handleSortChange = (event) => {
    setSortBy(event.target.value);
    setPageNow(1); // Reset to page 1 when sort changes
  };
  console.log(ideas);

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
            filter: "brightness(0.5)",
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
              Showing {(pageNow - 1) * pageSize + 1}-
              {Math.min(pageNow * pageSize, totalItems)} of {totalItems}
            </span>
            <div className="flex gap-x-4 justify-end items-center font-semibold text-xs md:text-sm w-full">
              <div className="flex gap-x-2 md:items-center flex-col gap-y-2 w-full md:w-auto md:flex-row">
                <label htmlFor="showperpage w-full">Show per page :</label>
                <select
                  name="showperpage"
                  id="showperpage"
                  className="rounded-full text-xs md:text-sm"
                  value={pageSize}
                  onChange={handlePageSizeChange}
                >
                  <option value="10">10</option>
                  <option value="20">20</option>
                  <option value="50">50</option>
                </select>
              </div>
              <div className="flex gap-x-2 md:items-center flex-col gap-y-2 w-full md:w-auto md:flex-row">
                <label htmlFor="sortby">Sort By :</label>
                <select
                  name="sortby"
                  id="sortby"
                  className="rounded-full text-xs md:text-sm"
                  value={sortBy}
                  onChange={handleSortChange}
                >
                  <option value="newest">Newest</option>
                  <option value="oldest">Oldest</option>
                </select>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-12 gap-6 mt-4">
            {ideas.map((data) => (
              <div
                key={data.id}
                className="col-span-12 md:col-span-6 lg:col-span-3 flex flex-col rounded-md shadow-md"
              >
                <div className="rounded-t-md max-h-40">
                  {/**
                   * **Image Handler **
                   *
                   * this is Image error handler
                   * i use this because the url image in the data cannot be access
                   * so this will return fall back image.
                   * if the original image cannot display
                   */}
                  <CardImage
                    images={data.medium_image}
                    title={data.title}
                    fallbackImage={fallBackImage}
                  />
                </div>
                <div className="bg-white px-6 py-8 rounded-b-md">
                  <span className="text-neutral-400 font-semibold text-sm">
                    {DateFormater(data.published_at)}
                  </span>
                  <p className="font-bold ">{data.title}</p>
                </div>
              </div>
            ))}
          </div>
          <Pagination
            pageNow={pageNow}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </div>
      </section>
    </main>
  );
};

export default Ideas;
