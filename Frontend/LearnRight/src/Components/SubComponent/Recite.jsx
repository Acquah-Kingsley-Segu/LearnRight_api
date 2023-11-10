import { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { MdClose } from "react-icons/md";
import ReactModal from "react-modal";
import { NavLink, useNavigate } from "react-router-dom";
import recite from "../../images/recite.svg";

const Recite = () => {
  const [openModal, setOpenModal] = useState(true);

  const navigate = useNavigate();

  return (
    <ReactModal
      isOpen={openModal}
      className={`flex flex-col border-0 border-white rounded-lg shadow-md w-2/3 max-w-4xl h-5/6 relative`}
      overlayClassName="bg-black/70 fixed inset-0 flex justify-center items-center h-full"
    >
      <div class="flex-1 ">
        <div class="relative">
          <img
            class="object-contain rounded-full absolute left-3 top-3"
            src={recite}
            height={100}
            width={100}
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
          <div className="mt-10 pl-3">
            <div className="flex justify-center">
              <h1 class=" text-2xl text-center font-bold">Recite</h1>
            </div>
            <p class="font-semibold mx-5">
              In your own words, either speak or write down a summary of the
              information you just read.
            </p>
          </div>
          <div className="flex justify-between">
            <NavLink
              to={"../reflect"}
              className="absolute bottom-3 left-3 animate-bounce border-2 hover:border-violet-700 rounded-sm"
            >
              <IoIosArrowBack className="text-lg text-violet-700" />
            </NavLink>
            <form action="">
              <textarea
                className="ml-8 m-2 rounded-md focus:ring-1 focus:ring-violet-700"
                name="note"
                id="note"
                cols="100"
                rows="12"
              ></textarea>
              <div className="flex justify-center items-center ">
                <input
                  type="submit"
                  value={`Create note`}
                  className="bg-violet-700 border-2 border-violet-700 rounded-md w-2/3 text-white text-lg py-2 hover:bg-white
                   hover:border-violet-700 hover:text-violet-700 hover:cursor-pointer"
                />
              </div>
            </form>
            <NavLink
              to={"../review"}
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

export default Recite;
