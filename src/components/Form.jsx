import React, { useState, useEffect } from "react";

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
    if (newDate.trim() !== "" && newTitle.trim() !== "" && newText.trim() !== "") {
      const newEntry = { date: newDate, title: newTitle, text: newText };
      setEntries([...entries, newEntry]);
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
        <h1 className="font-bold m-4 text-3xl">Personal Diary</h1>
        
        {/* Date Input */}
        <div className="mb-4">
          <input
            type="date"
            value={newDate}
            onChange={handleDateChange}
            className="input input-bordered input-accent w-full max-w-xs"
          />
        </div>
        
        {/* Title Input */}
        <div className="mb-4">
          <input
            type="text"
            value={newTitle}
            onChange={handleTitleChange}
            placeholder="Enter title"
            className="input input-bordered input-accent w-full max-w-xs"
          />
        </div>
        
        {/* Textarea Input */}
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

        <ol className="mt-4">
          {entries.map((entry, index) => (
            <li key={index} className="mb-4">
              <div className="font-semibold">
                {entry.date} - {entry.title}
              </div>
              <p>{entry.text}</p>
              <button className="btn btn-error btn-sm mt-1" onClick={() => deleteEntry(index)}>
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