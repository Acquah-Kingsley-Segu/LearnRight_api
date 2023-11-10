import { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { MdClose } from "react-icons/md";
import ReactModal from "react-modal";
import { NavLink, useNavigate } from "react-router-dom";
import reflect from "../../images/reflect.png";

const Reflect = () => {
  const [openModal, setOpenModal] = useState(true);

  const navigate = useNavigate();

  return (
    <ReactModal
      isOpen={openModal}
      className={`flex flex-col border-0 border-white rounded-lg shadow-md w-2/3 max-w-4xl h-1/3 relative`}
      overlayClassName="bg-black/70 fixed inset-0 flex justify-center items-center h-full"
    >
      <div class="flex-1 ">
        <div class="relative">
          <img
            class="object-contain rounded-full absolute -left-8 -top-8"
            src={reflect}
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
              <h1 class=" text-2xl text-center font-bold">Reflect</h1>
            </div>
            <p class="font-semibold mx-5">
              Did you answer all of your questions? If not, go back and see if
              you can find the answer.
            </p>
          </div>
          <div className="flex justify-between">
            <NavLink
              to={"../read"}
              className="absolute bottom-3 left-3 animate-bounce border-2 hover:border-violet-700 rounded-sm"
            >
              <IoIosArrowBack className="text-lg text-violet-700" />
            </NavLink>
            <NavLink
              to={"../recite"}
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

export default Reflect;
