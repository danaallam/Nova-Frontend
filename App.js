import React from "react";
import MenuNav from "./routes/MenuNav";
import JobContextProvider from "./contexts/JobContext";
import DesContextProvider from "./contexts/DesContext";
import DesMenu from "./routes/DesMenu";
import UserContextProvider from "./contexts/UserContext";

export default function App() {
  return (
    <DesContextProvider>
      <UserContextProvider>
        <JobContextProvider>
          {/* <MenuNav /> */}
          <DesMenu />
        </JobContextProvider>
      </UserContextProvider>
    </DesContextProvider>
  );
}
