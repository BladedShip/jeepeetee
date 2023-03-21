import { getServerSession } from "next-auth";
import {Poppins} from "next/font/google";

import { SessionProvider } from "../components/SessionProvider";
import { authOptions } from "../pages/api/auth/[...nextauth]";
import Login from "../components/Login";
import Sidebar from "../components/Sidebar";
import "../styles/globals.css";
import ClientProvider from "../components/ClientProvider";

export const metadata = {
  title: "Chat JeePeeTee",
  description: "A chat GPT client that works only when it feels like it.",
  icons:{
    icon: "/logo.png",
  }
};

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);

  return (
    <html lang="en">
      <body className={poppins.className}>
        <SessionProvider session={session}>
          {!session ? (
            <Login />
          ) : (
            <div className="flex">
              {/* Sidebar Vibes */}
              <div className="bg-[#202020] max-w-xs h-screen overflow-y-auto md:min-w-[20rem]">
                <Sidebar />
              </div>

              {/* Client Provider */}
              <ClientProvider />

              <div className="bg-[#2c2c2c] flex-1">{children}</div>
            </div>
          )}
        </SessionProvider>
      </body>
    </html>
  );
}
