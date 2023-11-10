import { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { MdClose } from "react-icons/md";
import ReactModal from "react-modal";
import { NavLink, useNavigate } from "react-router-dom";
import question from "../../images/question.png";

const Question = () => {
  const [openModal, setOpenModal] = useState(true);

  const navigate = useNavigate();

  return (
    <ReactModal
      isOpen={openModal}
      className={`flex flex-col border-0 border-white rounded-lg shadow-md w-2/3 max-w-4xl relative`}
      overlayClassName="bg-black/70 fixed inset-0 flex justify-center items-center h-full"
    >
      <div class="flex-1 ">
        <div class="relative">
          <img
            class="object-contain rounded-full absolute -left-8 -top-8"
            src={question}
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
          <div className="mt-10 pl-3">
            <div className="flex justify-center">
              <h1 class=" text-2xl text-center font-bold">
                Reflective Learning Questions
              </h1>
            </div>
            <div class="space-y-4">
              <div>
                <h2 class="font-bold text-lg">Preview:</h2>
                <p>
                  What do you think this material will cover? What are your
                  initial thoughts or expectations?
                </p>
              </div>
              <div>
                <h2 class="font-bold text-lg">Question:</h2>
                <p>
                  What questions do you have about the material? What would you
                  like to learn or understand better?
                </p>
              </div>
              <div>
                <h2 class="font-bold text-lg">Read:</h2>
                <p>
                  What are the main points or key ideas presented in this
                  section? Can you summarize them in your own words?
                </p>
              </div>
              <div>
                <h2 class="font-bold text-lg">Reflect:</h2>
                <p>
                  How does this information relate to what you already know? Are
                  there any personal experiences or examples that come to mind?
                </p>
              </div>
              <div>
                <h2 class="font-bold text-lg">Recite:</h2>
                <p>
                  Can you verbally summarize the key points you&#39;ve learned?
                  Can you explain them to someone else?
                </p>
              </div>
              <div className="mb-2">
                <h2 class="font-bold text-lg">Review:</h2>
                <p>
                  What were the most important takeaways from this material? How
                  will you remember and apply this information in the future?
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-end">
            <NavLink
              to={"../preview"}
              className="absolute bottom-3 left-3 animate-bounce border-2 hover:border-violet-700 rounded-sm"
            >
              <IoIosArrowBack className="text-lg text-violet-700" />
            </NavLink>
            <NavLink
              to={"../read"}
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

export default Question;
