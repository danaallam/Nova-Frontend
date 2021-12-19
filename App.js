import React from "react";
import MenuNav from "./routes/MenuNav";
import JobContextProvider from "./contexts/JobContext";

export default function App() {
  return (
    <JobContextProvider>
      <MenuNav />
    </JobContextProvider>
  );
}
