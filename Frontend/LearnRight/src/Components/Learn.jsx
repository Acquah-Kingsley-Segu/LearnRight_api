import { useEffect, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { MdDelete, MdEditNote } from "react-icons/md";
import ReactPaginate from "react-paginate";
import { NavLink, Outlet } from "react-router-dom";

const Learn = () => {
  const [pageItems, setPageItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 9;

  const noteFilterOption = [
    { name: "All cues", value: "all" },
    { name: "Subject cues", value: "subject" },
  ];

  const LearningCuesSample = [
    {
      id: 1,
      subject: "Mathematics 1",
      topic: "Calculus",
    },
    {
      id: 2,
      subject: "Integrated Science 1",
      topic: "Pollination",
    },
    {
      id: 3,
      subject: "Information Communication Technology 1",
      topic: "Hardware",
    },
    {
      id: 4,
      subject: "Social Studies 1",
      topic: "Environment",
    },
    {
      id: 5,
      subject: "RME 1",
      topic: "Religion",
    },
    {
      id: 6,
      subject: "Computer Science 1",
      topic: "Programming",
    },
    {
      id: 7,
      subject: "French 1",
      topic: "french1",
    },
    {
      id: 8,
      subject: "BDT 1",
      topic: "Perspective Drawing",
    },
    {
      id: 9,
      subject: "Visual Arts 1",
      topic: "Drawing",
    },
    {
      id: 10,
      subject: "Mathematics 2",
      topic: "Calculus",
    },
    {
      id: 11,
      subject: "Integrated Science 2",
      topic: "Pollination",
    },
    {
      id: 12,
      subject: "Information Communication Technology 2",
      topic: "Hardware",
    },
    {
      id: 13,
      subject: "Social Studies 2",
      topic: "Environment",
    },
    {
      id: 14,
      subject: "RME 2",
      topic: "Religion",
    },
    {
      id: 15,
      subject: "Computer Science 2",
      topic: "Programming",
    },
    {
      id: 16,
      subject: "French 2",
      topic: "french1",
    },
    {
      id: 17,
      subject: "BDT 2",
      topic: "Perspective Drawing",
    },
    {
      id: 19,
      subject: "Visual Arts 2",
      topic: "Drawing",
    },
  ];

  const pageChangeEvent = (data) => {
    setCurrentPage(data.selected);
  };

  const pages = Math.ceil(LearningCuesSample.length / itemsPerPage);

  useEffect(() => {
    setPageItems(
      LearningCuesSample.slice(
        currentPage * itemsPerPage,
        (currentPage + 1) * itemsPerPage
      )
    );
  }, [currentPage]);

  return (
    <div className="m-5 mt-10 overflow-y-auto max-h-full">
      <div className="h-5/6">
        <div className="flex justify-between mb-4">
          <div>
            <h3 className="font-bold text-lg">Learning Cues</h3>
            <p>All topics learnt</p>
          </div>
          <NavLink
            className="bg-violet-700 my-1 px-2 border-2 border-violet-700 text-white flex items-center 
        rounded-md hover:bg-white hover:text-violet-700 hover:cursor-pointer"
          >
            Add new Learning Cue
          </NavLink>
        </div>
        <div>
          <select
            className="p-2 mb text-sm text-gray-900 border border-gray-300 rounded-sm bg-gray-50 focus:ring-violet-700 focus:border-violet-700 w-1/3 dark:placeholder-gray-400"
            name="concepts"
            id="concept_dropdown"
          >
            {noteFilterOption.map((filter) => (
              <option value={filter.value}>{filter.name}</option>
            ))}
          </select>
        </div>
        <div className="mt-5 columns-4 grid gap-5 grid-cols-3">
          {pageItems.map((cue) => (
            <NavLink
              to={`cue/${cue.id}/pq4r/preview`}
              className="flex flex-col pl-1 border border-gray-300 rounded-sm pb-2"
            >
              <div className="flex justify-between items-center pr-3 pt-1">
                <h5 className="text-ellipsis overflow-hidden text-md font-bold">
                  Subject: {cue.subject}
                </h5>
                <div className="flex">
                  <NavLink>
                    <MdEditNote className="text-xl mr-1 text-violet-700" />
                  </NavLink>
                  <button type="button">
                    <MdDelete className="text-lg text-red-700" />
                  </button>
                </div>
              </div>
              <div className="flex flex-col justify-between flex-1">
                <p className="text-sm font-medium">Topic: {cue.topic}</p>
              </div>
            </NavLink>
          ))}
        </div>
        <div className="mt-5">
          <ReactPaginate
            nextLabel={<IoIosArrowForward className="text-white" />}
            previousLabel={<IoIosArrowBack className="text-white" />}
            breakLabel="..."
            pageCount={pages}
            marginPagesDisplayed={5}
            pageRangeDisplayed={5}
            onPageChange={pageChangeEvent}
            containerClassName="flex pb-2 gap-2 items-center justify-center"
            previousClassName="flex flex-col items-center justify-center w-9 h-9 shadow-sm text-violet-300 text-sm font-normal border rounded-lg hover:bg-violet-400 hover:text-white"
            previousLinkClassName=""
            pageClassName={`flex flex-col cursor-pointer items-center justify-center w-9 h-9 shadow-sm text-sm font-semibold border rounded-lg hover:bg-violet-400 hover:text-white`}
            nextClassName="flex flex-col items-center justify-center w-9 h-9 shadow-sm text-sm font-normal border rounded-lg text-violet-300 hover:bg-violet-400 hover:text-white"
            activeClassName="bg-violet-700 text-white"
            breakLinkClassName="text-violet-300"
            nextLinkClassName=""
          />
        </div>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Learn;
