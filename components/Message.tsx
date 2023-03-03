import { DocumentData } from "firebase/firestore";

type Props = {
  message: DocumentData;
};

function Message({ message }: Props) {
  const isBot = message.user.name === "JeePeeTee";

  return (
    <div className={`py-5 text-white ${isBot && "bg-[#3b3b3b]"}`}>
      <div className="flex space-x-5 px-10 max-w-2xl mx-auto">
        <img
          src={message.user.avatar}
          alt="User Avatar"
          className="h-8 w-8 rounded-full"
        />
        <p className="pt-1 text-sm">{message.text}</p>
      </div>
    </div>
  );
}

export default Message;
