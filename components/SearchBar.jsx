"use client";
import React from "react";
import { HiSearch } from "react-icons/hi";
import { useState } from "react";
const SearchBar = ({ userInput, searchText, setSearchText }) => {
  const [searchMenu, setSearchMenu] = useState(false);
  const [update, setupdate] = useState();
  console.log(searchText);
  return (
    <>
      {/*Desktop  Navigation */}
      <div
        className="bg-[#e9e9e9] p-3  gap-3 items-center rounded-full w-full hidden md:flex"
        /*  onClick={() => userInput(searchText)} */
      >
        <HiSearch
          className="text-[20px] text-gray-500"
          onClick={() => userInput(searchText)}
        />
        <input
          type="text"
          placeholder="Search"
          className="bg-[#e9e9e9] w-full outline-none"
          onChange={(e) => setSearchText(e.target.value)}
        />
      </div>
      <HiSearch
        className="text-[25px] 
        text-gray-500 md:hidden relative"
        onClick={() => setSearchMenu((prevMenu) => !prevMenu)}
      />
      {/*Mobile Navigation */}
      {searchMenu && (
        <div className="md:hidden absolute top-[5.2rem] left-3 right-2 z-20 bg-[#e9e9e9] p-3 flex  gap-3 items-center rounded-full w-full max-w-[350px]">
          <HiSearch
            className="text-[20px] text-gray-500"
            onClick={() => userInput(searchText)}
          />
          <input
            type="text"
            placeholder="Search"
            className="bg-[#e9e9e9] outline-none w-full "
            onKeyDown={handleKeyPress}
            onChange={(text) => setSearchText(text.target.value)}
          />
          {/*  <AiOutlineCloseCircle
            className="text-[20px] text-gray-500"
            onClick={() => setSearchMenu(false)}
          /> */}
        </div>
      )}
    </>
  );
};

export default SearchBar;
