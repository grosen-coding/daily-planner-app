import React, { useRef, useEffect, useCallback } from "react";
import NoteForm from "./NoteForm";
import PriorityForm from "./PriorityForm";
import ReminderForm from "./ReminderForm";
import TodoForm from "./TodoForm";
import { AiFillCloseCircle } from "react-icons/ai";
// import Bounce from "react-reveal/Bounce";

export const FormModal = ({ showModal, setShowModal }) => {
  const modalRef = useRef();

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  const keyPress = useCallback(
    (e) => {
      if (e.key === "Escape" && showModal) {
        setShowModal(false);
        console.log("I pressed");
      }
    },
    [setShowModal, showModal]
  );

  useEffect(() => {
    document.addEventListener("keydown", keyPress);
    return () => document.removeEventListener("keydown", keyPress);
  }, [keyPress]);

  return (
    <>
      {showModal ? (
        <div className="form-modal" onClick={closeModal} ref={modalRef}>
          {/* <Bounce top> */}
          <div className="modal-container" showModal={showModal}>
            <div className="modal-content">
              <NoteForm />
              <ReminderForm />
              <TodoForm />
              <PriorityForm />
              <AiFillCloseCircle
                className="modal-close-icon"
                aria-label="Close modal"
                onClick={() => setShowModal((prev) => !prev)}
              />
            </div>
          </div>
          {/* </Bounce> */}
        </div>
      ) : null}
    </>
  );
};
