import React from "react";
import UserProfile from "./Components/UserProfile";

const App = () => {
  return (
    <div className="app">
      <h1>Welcome to User Profiles</h1>
      <UserProfile name="Kudinov Andrew" age={33} location="Baku" />
      <UserProfile name="Mamedov Gurban" age={28} location="Xirdalan" />
    </div>
  );
};
export default App;
