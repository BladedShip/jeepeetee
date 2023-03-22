"use client";

import { useSession, signOut } from "next-auth/react";
import { useCollection } from "react-firebase-hooks/firestore";
import { collection, orderBy, query } from "firebase/firestore";
import { ArrowLeftOnRectangleIcon } from "@heroicons/react/24/outline";

import { db } from "../firebase";
import NewChat from "./NewChat";
import ChatButton from "./ChatButton";
import ModelSelector from "./ModelSelector";

function Sidebar() {
  const { data: session } = useSession();

  const [chats, loading, error] = useCollection(
    session &&
      query(
        collection(db, "users", session.user?.email!, "chats"),
        orderBy("createdAt", "asc")
      )
  );

  return (
    <div className="p-2 flex flex-col h-screen">
      <div className="flex-1">
        <div className="space-y-4">
          <NewChat />
          <div>
            {/* Chat Model Selector */}
            <div className="hidden sm:inline">
              <ModelSelector />
            </div>
          </div>
          <div className="flex flex-col space-y-2 my-2">
            {loading && (
              <div className="animate-pulse text-center text-white">
                <p>Loading Chats...</p>
              </div>
            )}
            {chats?.docs.map((chat) => (
              <ChatButton key={chat.id} id={chat.id} />
            ))}
          </div>
        </div>
      </div>
      {session && (
        <div className="flex items-center justify-center mx-auto space-x-4 text-white hover:opacity-50 transition-opacity ease-in-out cursor-pointer mb-2" onClick={() => signOut()}>
          <img
            src={session.user?.image!}
            alt="Profile Picture"
            className="h-12 w-12 rounded-full"
          />
          <p>{session.user?.name}</p>
          <ArrowLeftOnRectangleIcon className="h-6 w-6" />
        </div>
      )}
    </div>
  );
}

export default Sidebar;
