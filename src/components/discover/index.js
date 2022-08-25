import React, { useContext, useState } from "react";
import { AppContext } from "../../context";
import Button from "../button";
import Modal from "../modal";
import SearchBox from "../searchBox";
import Stories from "../stories";
import SearchDropdown from "../storyDropdown";
import { TiDeleteOutline as DeleteIcon } from "react-icons/ti";

const Discover = () => {
  const { stories, loadMore } = useContext(AppContext);
  const [showModal, setShowModal] = useState(false);
  const [showSearchDropdown, setShowSearchDropdown] = useState(false);
  return (
    <div className="max-w-sm lg:max-w-lg m-auto p-4 lg:pt-8 lg:border-b-[1px] lg:border-[#e1e6e2]">
      <div className="flex justify-between items-center lg:hidden">
        <div>
          <h1 className="text-[21px] text-[#2f363f]">Discover</h1>
        </div>
        <Button setModal={(e) => { e.preventDefault(); setShowModal(true)}} text={"Search"} />
        <Modal onClose={() => setShowModal(false)} visible={showModal}>
          <div className="flex justify-between items-center">
            <h1 className="py-2">Search Smallcase</h1>
            <button onClick={() => setShowModal(false)}>
              <DeleteIcon />
            </button>
          </div>
          <SearchBox />
          <Stories />
          {typeof stories.value !== "undefined" &&
            stories.value.length !== 0 ? (
              <div className="flex justify-center">
                <Button text={"Load more"} setModal={() => loadMore()} />
              </div>
            ) : (
              <></>
            )}
        </Modal>
      </div>
      <div className="hidden lg:flex items-center justify-between">
        <div className="flex">
          <p className=" mr-5">Collections</p>
          <p className=" mr-5">All Smallcase</p>
          <p className=" mr-5">Managers</p>
        </div>
        <div className="relative">
          <SearchBox setDropdown={() => setShowSearchDropdown(true)} />
          <SearchDropdown
            visible={showSearchDropdown}
            onClose={() => setShowSearchDropdown(false)}
          >
            <Stories />
            {typeof stories.value !== "undefined" &&
            stories.value.length !== 0 ? (
              <div className="flex justify-center">
                <Button text={"Load more"} setModal={() => loadMore()} />
              </div>
            ) : (
              <></>
            )}
          </SearchDropdown>
        </div>
      </div>
    </div>
  );
};

export default Discover;
