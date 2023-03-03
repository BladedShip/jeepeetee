import React from "react";
import NewChat from "./NewChat";

function Sidebar() {
  return (
    <div className="p-2 flex flex-col h-screen">
      <div className="flex-1">
        <div>
          {/* New Chat Button */}
            <NewChat/>
          <div>{/* Chat Model Selector */}</div>
          {/* Map through all stored chats */}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
