import { useEffect, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { MdDelete, MdEditNote } from "react-icons/md";
import ReactPaginate from "react-paginate";
import { NavLink } from "react-router-dom";

const Note = () => {
  const [pageItems, setPageItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 9;

  const noteFilterOption = [
    { name: "All notes", value: "all" },
    { name: "Subject notes", value: "subject" },
    { name: "Topic notes", value: "topic" },
    { name: "Component notes", value: "component" },
    { name: "Subconcept notes", value: "subconcept" },
  ];

  const notesSample = [
    {
      id: 1,
      subject: "Mathematics 1",
      topic: "Calculus",
      concept: "Differentiation",
      subconceptCount: 10,
    },
    {
      id: 2,
      subject: "Integrated Science 1",
      topic: "Pollination",
      concept: "Agents of Pollination",
      subconceptCount: 50,
    },
    {
      id: 3,
      subject: "Information Communication Technology 1",
      topic: "Hardware",
      concept: "Types of Hardware",
      subconceptCount: 30,
    },
    {
      id: 4,
      subject: "Social Studies 1",
      topic: "Environment",
      concept: "Types of Environment",
      subconceptCount: 10,
    },
    {
      id: 5,
      subject: "RME 1",
      topic: "Religion",
      concept: "The Christian Religion",
      subconceptCount: 10,
    },
    {
      id: 6,
      subject: "Computer Science 1",
      topic: "Programming",
      concept: "Variable",
      subconceptCount: 10,
    },
    {
      id: 7,
      subject: "French 1",
      topic: "french1",
      concept: "Types of french",
      subconceptCount: 10,
    },
    {
      id: 8,
      subject: "BDT 1",
      topic: "Perspective Drawing",
      concept: "Isometric Drawing",
      subconceptCount: 10,
    },
    {
      id: 9,
      subject: "Visual Arts 1",
      topic: "Drawing",
      concept: "Shading",
      subconceptCount: 10,
    },
    {
      id: 10,
      subject: "Mathematics 2",
      topic: "Calculus",
      concept: "Differentiation",
      subconceptCount: 10,
    },
    {
      id: 11,
      subject: "Integrated Science 2",
      topic: "Pollination",
      concept: "Agents of Pollination",
      subconceptCount: 50,
    },
    {
      id: 12,
      subject: "Information Communication Technology 2",
      topic: "Hardware",
      concept: "Types of Hardware",
      subconceptCount: 30,
    },
    {
      id: 13,
      subject: "Social Studies 2",
      topic: "Environment",
      concept: "Types of Environment",
      subconceptCount: 10,
    },
    {
      id: 14,
      subject: "RME 2",
      topic: "Religion",
      concept: "The Christian Religion",
      subconceptCount: 10,
    },
    {
      id: 15,
      subject: "Computer Science 2",
      topic: "Programming",
      concept: "Variable",
      subconceptCount: 10,
    },
    {
      id: 16,
      subject: "French 2",
      topic: "french1",
      concept: "Types of french",
      subconceptCount: 10,
    },
    {
      id: 17,
      subject: "BDT 2",
      topic: "Perspective Drawing",
      concept: "Isometric Drawing",
      subconceptCount: 10,
    },
    {
      id: 19,
      subject: "Visual Arts 2",
      topic: "Drawing",
      concept: "Shading",
      subconceptCount: 10,
    },
  ];

  const pageChangeEvent = (data) => {
    setCurrentPage(data.selected);
  };

  const pages = Math.ceil(notesSample.length / itemsPerPage);

  useEffect(() => {
    setPageItems(
      notesSample.slice(
        currentPage * itemsPerPage,
        (currentPage + 1) * itemsPerPage
      )
    );
  }, [currentPage]);

  return (
    <div className="m-5 mt-10">
      <div className="flex justify-between mb-4">
        <div>
          <h3>Notes</h3>
          <p>All notes created during learning cues</p>
        </div>
        <NavLink
          className="bg-violet-700 my-1 px-2 border-2 border-violet-700 text-white flex items-center 
        rounded-md hover:bg-white hover:text-violet-700 hover:cursor-pointer"
        >
          Add new note
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
        {pageItems.map((note) => (
          <NavLink className="flex flex-col pl-1 border border-gray-300 rounded-sm pb-2">
            <div className="flex justify-between items-center pr-3 pt-1">
              <h5 className="text-ellipsis overflow-hidden text-md font-bold">
                Subject: {note.subject}
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
              <div>
                <p className="text-sm font-medium">Topic: {note.topic}</p>
                <p className="text-xs">Concept: {note.concept}</p>
              </div>
              <p className="text-sm">
                Number of Subconcepts: {note.subconceptCount}
              </p>
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
  );
};

export default Note;
