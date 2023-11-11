"use client";
import Image from "next/image";
import { useSession, signIn, signOut } from "next-auth/react";
import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";
import app from "@/shared/firebaseConfig";
import { useEffect, useState, createContext } from "react";
import PinList from "@/components/Pins/PinList";
import SearchBar from "@/components/SearchBar";

export default function Home() {
  const [searched, setSearched] = useState("");
  const [searchText, setSearchText] = useState([]);
  const db = getFirestore(app);
  const searchContext = createContext();
  const [listOfPins, setListOfPins] = useState();
  useEffect(() => {
    getAllPins();
  }, []);
  const searchPosts = async (value) => {
    setListOfPins([]);
    const q = query(
      collection(db, "pinshare-post"),
      where("title", "==", value)
    );
    /*    const handleKeyPress = (value) => {
      if (value.key === "Enter") {
        setSearchText(value);
      }
    };
    handleKeyPress(); */
    if (searchText) {
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        let data = doc.data();
        data.id = doc.id;
        setListOfPins((posts) => [...posts, doc?.data()]);
      });
    } else {
      getAllPins();
    }
  };

  const getAllPins = async () => {
    setListOfPins([]);
    const q = query(collection(db, "pinshare-post"));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      setListOfPins((listOfPins) => [...listOfPins, doc.data()]);
    });
  };

  return (
    <>
      <div className="p-3">
        <SearchBar
          userInput={(text) => searchPosts(text)}
          searchText={searchText}
          setSearchText={setSearchText}
        />

        <PinList listOfPins={listOfPins} />
      </div>
    </>
  );
}
