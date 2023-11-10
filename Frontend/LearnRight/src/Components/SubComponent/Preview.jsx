import { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { MdAdd, MdClose, MdDelete } from "react-icons/md";
import ReactModal from "react-modal";
import { NavLink, useNavigate } from "react-router-dom";
import preview from "../../images/preview.png";

const Preview = () => {
  const [openModal, setOpenModal] = useState(true);
  const [inputTags, setInputTags] = useState([]); // holds subconcept form inputs
  const [groupNumber, setGroupNumber] = useState(inputTags.length); // numbers of subconcept inputs displayed on the page so far
  const [dropTagID, setDropTagID] = useState(); // the index of the subconcept input to be deleted

  const navigate = useNavigate();

  const onSubmitFormHandler = (event) => {
    event.preventDefault();
    let formData = new FormData();
    for (let i = 0; i < groupNumber; i++) {
      formData.append("name", event["target"][`name${i}`]["value"]);
      formData.append("percentage", event["target"][`percentage${i}`]["value"]);
      console.log(formData.get("name"), formData.get("percentage"));
      SectionAPIObject.submitSection(formData, getAuthorizationHeader())
        .then()
        .catch((err) => {
          if (err.response.status === 401) navigate("/login");
          else setErr(true);
        });
      if (err) break;
      /* formData.delete("name");
      formData.delete("percentage"); */
    }
    navigate("../view/section");
    // Error and notification goes here
  };

  /**
   * removeInputTag - removes a fieldset input tag to inputTag for display and increments group number
   * @param {Object} event - holds properties on onClick eventListener
   */
  const removeInputTag = (event) => {
    event.preventDefault();
    setInputTags(inputTags.filter((tag, index) => index !== dropTagID));
  };

  /**
   * addInputTag - adds a new fieldset input tag to inputTag for display and increments group number
   * @param {Function} event - holds properties on onClick eventListener
   */
  const addInputTag = (event) => {
    event.preventDefault();
    setGroupNumber(groupNumber + 1);
    setInputTags([
      ...inputTags,
      <fieldset className="w-[80%] ml-12 mt-2 flex items-center">
        <input
          type="text"
          value=""
          placeholder="Enter subheading under heading above"
          className="w-full focus:ring-1 focus:ring-violet-700 rounded-md mr-2"
        />
        <button
          type="button"
          onClick={() => {
            setDropTagID(groupNumber);
            removeInputTag(event);
          }}
          className="flex justify-center items-center bg-red-500 rounded-md mr-2 p-2 w-8 h-8 text-white text-lg hover:bg-white hover:border-2 
          hover:border-red-300 hover:text-red-500 hover:cursor-pointer"
        >
          <MdDelete className="text-xl" />
        </button>
      </fieldset>,
    ]);
  };

  return (
    <ReactModal
      isOpen={openModal}
      className={`flex flex-col border-0 border-white rounded-lg shadow-md w-2/3 ${
        inputTags.length > 2 ? "h-full overflow-hidden" : "h-1/2"
      } bg-green-600 relative`}
      overlayClassName="bg-black/70 fixed inset-0 flex justify-center items-center h-full"
    >
      <div class="flex-1">
        <div class="relative">
          <img
            class="object-contain rounded-full absolute -left-8 -top-8"
            src={preview}
            height={120}
            width={120}
          />
        </div>
        <div class="rounded-md h-full bg-gray-200">
          <div className="flex justify-end pr-3 pt-1">
            <button
              onClick={() => {
                setOpenModal(false);
                navigate("/dashboard/learn/");
              }}
            >
              <MdClose className="text-2xl text-red-500 hover:bg-red-500 hover:text-white rounded-sm" />
            </button>
          </div>
          <div className="mt-14 pl-3">
            <div className="flex justify-center">
              <h1 class=" text-2xl text-center font-bold">Preview</h1>
            </div>
            <p class="font-semibold mx-5">
              Preview the information before you start reading to get an idea of
              the subject. Skim the material and read only the headers,
              subheadings, and highlighted text.
            </p>
          </div>
          <form
            action=""
            id=""
            name="Section_Form"
            onSubmit={onSubmitFormHandler}
          >
            <div className="w-5/6 ml-8 mt-3">
              <input
                type="text"
                value=""
                placeholder="Enter concept or major heading you want to learn"
                className="w-full focus:ring-1 focus:ring-violet-700 rounded-md"
              />
            </div>
            {inputTags.length > 0 ? inputTags.map((tag) => tag) : null}
            <div className="flex justify-end">
              <button
                type="button"
                className="absolute right-14 bottom-20 flex justify-center items-center w-10 h-10 mb-1 bg-violet-700 border-2 border-violet-700 rounded-full p-1 text-white text-lg hover:text-violet-700 hover:border-violet-700 hover:border-2 hover:bg-white hover:text-primary/80 hover:cursor-pointer"
                onClick={addInputTag}
              >
                <MdAdd className="text-xl" />
              </button>
            </div>
            {inputTags.length > 0 ? (
              <div className="flex justify-center items-center my-5">
                <input
                  type="submit"
                  value={`Submit ${
                    inputTags.length > 1 ? "Concepts" : "Concept"
                  }`}
                  className="bg-violet-700 border-2 border-violet-700 rounded-md w-2/3 text-white text-lg py-2 hover:bg-white
                   hover:border-violet-700 hover:text-violet-700 hover:cursor-pointer"
                />
              </div>
            ) : null}
          </form>
          <div className="flex justify-end">
            <NavLink
              to={"../question"}
              className="absolute bottom-3 right-3 animate-bounce border-2 hover:border-violet-700 rounded-sm"
            >
              <IoIosArrowForward className="text-lg text-violet-700" />
            </NavLink>
          </div>
        </div>
      </div>
    </ReactModal>
  );
};

export default Preview;
