import { useParams, useNavigate } from "react-router-dom";

const EntryDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const entries = JSON.parse(localStorage.getItem("entries")) || [];
  const entry = entries[id];

  if (!entry) {
    return <div>Entry not found</div>;
  }

  return (
    <div className="flex justify-center mt-60">
      <div className="personal-diary border-2 p-4 border-[#23cdb7]">
        <h1 className="font-bold m-4 text-3xl capitalize">{entry.title}</h1>
        <div className="mb-4">{entry.date}</div>
        <p>{entry.text}</p>
        <button
          className="btn btn-outline btn-accent mt-4"
          onClick={() => navigate("/")}
        >
          Back to Input
        </button>
      </div>
    </div>
  );
};

export default EntryDetail;
