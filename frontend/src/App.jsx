import { Route, Routes } from "react-router";

import HomePage from "./pages/HomePage";
import CreatePage from "./pages/CreatePage";
import NoteDetailPage from "./pages/NoteDetailPage";

/**
 * App component serves as the main entry point for the application.
 * It sets up the background styling and defines the main routes using React Router.
 *
 * Routes:
 * - "/" renders the HomePage component.
 * - "/create" renders the CreatePage component.
 * - "/note/:id" renders the NoteDetailPage component for a specific note.
 *
 * @component
 * @returns {JSX.Element} The rendered application with routing and background.
 */

const App = () => {
  return (
    <div className="relative h-full w-full">
      <div
        className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 
      [background:radial-gradient(125%_125%_at_50%_10%,#000_60%,#00FF9D40_100%)]"
      />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/note/:id" element={<NoteDetailPage />} />
      </Routes>
    </div>
  );
};

export default App;
