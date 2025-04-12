import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
const Landing = lazy(() => import("./components/Landing"));
const Dashboard = lazy(() => import("./components/Dashboard"));

function App() {
  return (
    <div>
      <BrowserRouter>
        <Appbar></Appbar>
        <Routes>
          <Route path="/dashboard" element={<Suspense fallback={"loading..."}><Dashboard></Dashboard></Suspense>}></Route>
          {/* Suspense API , asynchronous component fetching, asynchronous data fetching */}
          <Route path="/" element={<Suspense fallback={"loading..."}><Landing></Landing></Suspense>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

function Appbar() {
  // useNagivate only work when it define in a different component which is define inside a BrowserRouter component
  const navigate = useNavigate();

  return (
    <div>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Landing page
      </button>
      <button
        onClick={() => {
          navigate("/dashboard");
        }}
      >
        Dashboard
      </button>
    </div>
  );
}

export default App;
