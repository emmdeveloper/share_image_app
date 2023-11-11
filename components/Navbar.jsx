"use client";
import React from "react";
import Image from "next/image";
import { doc, setDoc, getFirestore } from "firebase/firestore";
import app from "@/shared/firebaseConfig";
import { useEffect, useState } from "react";
import { useSession, signIn } from "next-auth/react";
import Link from "next/link";

const Navbar = () => {
  const [searchText, setSearchText] = useState();
  const { data: session } = useSession();
  const db = getFirestore(app);
  const saveUserInfo = async () => {
    if (session?.user) {
      await setDoc(doc(db, "user", session?.user.email), {
        userName: session?.user?.name,
        email: session?.user?.email,
        userImage: session?.user?.image,
      });
    }
  };
  useEffect(() => {
    saveUserInfo();
  }, [session]);

  return (
    <nav>
      <div className="flex gap-2 items-center p-2 justify-evenly">
        <Link href="/">
          <Image
            src="/logo.png"
            alt="logo"
            width={70}
            height={70}
            className="hover:bg-gray-300 rounded-full p-2"
          />
        </Link>
        <button className="bg-black text-white p-2 font-normal font-[Lato] rounded-full px-4">
          <Link href="/" title="Home-Page">
            Home
          </Link>
        </button>
        <button className="font-semibold font-[Lato] p-2 rounded-full px-4">
          <Link
            href={session ? `/pin-builder` : "/" || signIn()}
            title="Create-Page">
            Create
          </Link>
        </button>
        {!session ? (
          <button
            className=" bg-gray-100 p-2 rounded-full px-4"
            onClick={() => signIn()}>
            Login
          </button>
        ) : (
          <Link href={`/ ${session?.user?.email}`}>
            <Image
              src={session?.user?.image}
              width={50}
              height={50}
              title="Profile"
              alt="user-image"
              className="hover:bg-gray-300 rounded-full"
            />
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
