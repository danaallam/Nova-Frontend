import React from "react";
import MenuNav from "./routes/MenuNav";
import JobContextProvider from "./contexts/JobContext";
import DesContextProvider from "./contexts/DesContext";
import DesMenu from "./routes/DesMenu";

export default function App() {
  return (
    <DesContextProvider>
      <JobContextProvider>
        {/* <MenuNav /> */}
        <DesMenu />
      </JobContextProvider>
    </DesContextProvider>
  );
}
