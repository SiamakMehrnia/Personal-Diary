import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Form from "./components/Form";
import EntryDetail from "./components/Journal";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/* Main */}
      <Route path="/" element={<Form />} />
      {/* Dynamik Details */}
      <Route path="/entry/:id" element={<EntryDetail />} />
    </>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
