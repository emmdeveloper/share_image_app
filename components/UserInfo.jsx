import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

const UserInfo = ({ userInfo }) => {
  const { data: session } = useSession();
  const router = useRouter();
  const onLogoutClick = () => {
    signOut();
    router.push("/");
  };
  console.log(userInfo);
  return (
    <div className="mt-3 flex flex-col items-center">
      <Image
        src={userInfo?.userImage}
        width={100}
        height={100}
        alt="user-Image"
        priority
        className="rounded-full"
      />
      <h2 className="font-[Lato] font-bold text-[30px]">{userInfo.userName}</h2>
      <h2 className="text-gray-400">{userInfo.email}</h2>
      <div className="flex gap-4">
        <button className="bg-gray-200 p-2 px-3 mt-5 rounded-full font-bold font-[Lato]">
          Share
        </button>
        {session?.user?.email == userInfo.email ? (
          <button
            className="bg-gray-200 p-2 px-3 mt-5 rounded-full font-bold font-[Lato]"
            onClick={() => onLogoutClick()}
          >
            <Link href="/"> Logout</Link>
          </button>
        ) : null}
      </div>
    </div>
  );
};

export default UserInfo;
