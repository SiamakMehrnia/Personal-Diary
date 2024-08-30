import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Form = () => {
  const [entries, setEntries] = useState(() => {
    const storedEntries = localStorage.getItem("entries");
    return storedEntries ? JSON.parse(storedEntries) : [];
  });
  const [newDate, setNewDate] = useState("");
  const [newTitle, setNewTitle] = useState("");
  const [newText, setNewText] = useState("");

  useEffect(() => {
    localStorage.setItem("entries", JSON.stringify(entries));
  }, [entries]);

  function handleDateChange(event) {
    setNewDate(event.target.value);
  }

  function handleTitleChange(event) {
    setNewTitle(event.target.value);
  }

  function handleTextChange(event) {
    setNewText(event.target.value);
  }

  function addEntry() {
    if (
      newDate.trim() !== "" &&
      newTitle.trim() !== "" &&
      newText.trim() !== ""
    ) {
      const newEntry = { date: newDate, title: newTitle, text: newText };
      setEntries([newEntry, ...entries]);
      setNewDate("");
      setNewTitle("");
      setNewText("");
    }
  }

  function deleteEntry(index) {
    setEntries(entries.filter((entry, i) => i !== index));
  }

  return (
    <div className="flex justify-center mt-20">
      <div className="personal-diary">
        <h1 className="font-bold m-4 text-3xl p-4">Personal Diary</h1>

        {/* Form Inputs */}
        <div className="mb-4">
          <input
            type="date"
            value={newDate}
            onChange={handleDateChange}
            className="input input-bordered input-accent w-full max-w-xs"
          />
        </div>

        <div className="mb-4">
          <input
            type="text"
            value={newTitle}
            onChange={handleTitleChange}
            placeholder="Enter title"
            className="input input-bordered input-accent w-full max-w-xs"
          />
        </div>

        <div className="mb-4">
          <textarea
            value={newText}
            onChange={handleTextChange}
            placeholder="Enter your text"
            className="textarea textarea-bordered textarea-accent w-full max-w-xs"
            rows="4"
          />
        </div>

        <button className="btn btn-outline btn-accent" onClick={addEntry}>
          Add Entry
        </button>

        {/* List of Entries */}
        <ol className="mt-4">
          {entries.map((entry, index) => (
            <li key={index} className="mb-4">
              <Link to={`/entry/${index}`} className="font-semibold">
                {entry.date} - {entry.title}
              </Link>
              <button
                className="btn btn-error btn-sm ml-2"
                onClick={() => deleteEntry(index)}
              >
                Delete
              </button>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default Form;
