import React, { useContext, useRef } from "react";
import { AiOutlineSearch as SearchIcon } from "react-icons/ai";
import { AppContext } from "../../context";
import Loading from "../loader";
import { GrFormClose as DeleteIcon } from "react-icons/gr";
const SearchBox = ({ setDropdown }) => {
  const inputRef = useRef(null)
  const { query,searchStories, optimizedFn, loading, clearQuery } = useContext(AppContext);
  
  return (
    <div className="flex items-center justify-between border-b-[1px] border-[#e1e6e2] py-3 lg:border-none lg:py-0 lg:min-w-[300px]">
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center w-full">
          <SearchIcon />
          <input
            ref={inputRef}
            className=" border-none w-full outline-none ml-2"
            type="text"
            placeholder="Try with react or css"
            onChange={(e) => optimizedFn(e.target.value)}
            onClick={setDropdown}
          />
        </div>
        <div>{query.length !== 0 && !loading ? <button onClick={(e)=> clearQuery(inputRef)}><DeleteIcon /></button> : <></>}</div>
      </div>
      {loading ? (
        <div>
          <Loading />
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default SearchBox;
