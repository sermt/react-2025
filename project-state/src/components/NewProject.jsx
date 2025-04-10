import React, { useRef } from "react";
import Input from "./Input";
import Modal from "./Modal";

export default function NewProject({ setNewProject, onCancel }) {
  const modal = useRef(null);
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const dueDateRef = useRef(null);

  const handleSave = () => {
    const title = titleRef.current.value;
    const description = descriptionRef.current.value;
    const dueDate = dueDateRef.current.value;

    // Validations
    if ([title, description, dueDate].some((text) => text.trim() === "")) {
      modal.current.open();
      return;
    }

    setNewProject({ title, description, dueDate, id: Date.now() });
  };

  return (
    <>
      <Modal ref={modal} buttonCaption={"Close"}>
        <h1 className="text-xl font-bold text-stone-700 my-4">Invalid Input</h1>
        <p className="text-stone-600 mb-4">
          Oops! Looks like you forgot to enter a value.
        </p>
        <p className="text-stone-600 mb-4">
          Please make sure you provide a valid value on every input field.
        </p>
      </Modal>
      <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
          <li>
            <button
              onClick={onCancel}
              className="text-stone-800 hover:text-stone-950"
            >
              Cancel
            </button>
          </li>
          <li>
            <button
              className="px-6 py-2 rounded-md bg-stone-800 text-stone-50
           hover:text-stone-950"
              onClick={handleSave}
            >
              Save
            </button>
          </li>
        </menu>
        <div>
          <Input ref={titleRef} label={"Title"} type="text" />
          <Input ref={descriptionRef} label={"Description"} isTextArea />
          <Input ref={dueDateRef} label={"Due Date"} type="date" />
        </div>
      </div>
    </>
  );
}
