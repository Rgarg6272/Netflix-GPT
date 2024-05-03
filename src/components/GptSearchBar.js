import React from "react";
import { lang } from "../utils/languageConstant";

const GptSearchBar = () => {
  return (
    <div className="pt-[8%] flex justify-center">
      <form className="w-1/2 bg-black flex">
        <input
          type="text"
          className="p-4 m-4 w-[80%]"
          placeholder={lang.hindi.gptSearchPlaceholder}
        />
        <button className="py-2 m-4 px-4 w-[20%] rounded-lg bg-red-700">
          {lang.hindi.search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
