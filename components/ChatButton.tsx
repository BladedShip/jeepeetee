import { ChatBubbleLeftIcon, TrashIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { useCollection } from "react-firebase-hooks/firestore";
import { collection, query, orderBy, deleteDoc, doc } from "firebase/firestore";

import { db } from "../firebase";

type Props = {
  id: string;
};

function ChatButton({ id }: Props) {
  const path = usePathname();
  const router = useRouter();
  const { data: session } = useSession();

  const [active, setActive] = useState(false);

  const [messages] = useCollection(
    collection(db, "users", session?.user?.email!, "chats", id, "messages")
  );

  
  const removeChat = async () => {
    await deleteDoc(doc(db, "users", session?.user?.email!, "chats", id));
    router.replace("/");
  };

  useEffect(() => {
    if (!path) return;
    setActive(path.includes(id));
  }, [path]);

  return (
    <Link
      href={`/chat/${id}`}
      className={`chatBtn justify-center ${active && "bg-white/20"}`}
    >
      <ChatBubbleLeftIcon className="h-5 w-5" />
      <p className="flex-1 hidden md:inline-flex truncate">
        {messages?.docs[messages?.docs.length - 1]?.data().text || "New Chat"}
      </p>
      <TrashIcon className="h-5 w-5 text-gray-500 hover:text-red-600" onClick={()=>removeChat()}/>
    </Link>
  );
}

export default ChatButton;
