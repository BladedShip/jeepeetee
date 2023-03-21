"use client";
import { signIn } from "next-auth/react";
import Image from "next/image";

function Login() {
  return (
    <div className="bg-[#00A67E] h-screen flex items-center justify-evenly">
      <div className="flex flex-col items-center justify-center text-center space-y-24">
        <Image src="/logo.png" width={120} height={120} alt="logo" />

        <button
          onClick={() => signIn("google")}
          className="text-white text-2xl p-4 border-white border rounded-full hover:scale-105 transition-transform ease-in-out pl-6 pr-6"
        >
          Sign in with Google
        </button>
      </div>
      <div className="h-64 rounded-full bg-white w-[0.1px]" />
      <div className="text-white space-y-6">
        <h1 className="text-3xl text-center">
          Say hello to <span className="font-bold">JeePeeTee</span>
        </h1>
        <p className="text-lg text-center">
          The worst ChatGPT client that you've ever seen
        </p>
        <div>
          <h2 className="text-xl pb-2">
            What <span className="font-bold">can</span> it do?
          </h2>
          <ul className="list-disc">
            <li>Send text prompts to OpenAIs language models</li>
            <li>Store and maintain multiple chat rooms</li>
            <li>Change the AI model used</li>
          </ul>
        </div>
        {/* <div className="h-12 bg-white w-[0.1px]" /> */}
        <div>
          <h2 className="text-xl pb-2">
            What <span className="font-bold">can't</span> it do?
          </h2>
          <ul className="list-disc">
            <li>Chat persistence (If it works, you're lucky)</li>
            <li>Formatted responses (Like code blocks and such)</li>
            <li>Be as good as an actual human. duh!</li>
          </ul>
        </div>
      </div>
      <div className="absolute bottom-0 text-white">
        <p className="cursor-default pb-2">
          If you find any issues, do contact{" "}
          <a
            className="underline font-bold cursor-pointer"
            href="https://adithyan.tech/#contact"
            target="_blank"
            rel="noreferrer"
          >
            Adithyan Jayakumar
          </a>
        </p>
      </div>
    </div>
  );
}

export default Login;
