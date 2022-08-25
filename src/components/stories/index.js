import React, { useContext } from "react";
import { AppContext } from "../../context";
import Story from "../story";
const Stories = () => {
  const { stories, loading } = useContext(AppContext);
  if (typeof (stories.value) === "undefined") {
    return <></>;
  }

  if (stories.value.length === 0) {
    return <h1>No result found</h1>;
  }
  const handleKeyDown = (index) => (e) => {
    switch (e.key) {
      case " ":
      case "SpaceBar":
      case "Enter":
        e.preventDefault();
        setSelectedOption(index);
        setIsOptionsOpen(false);
        break;
      default:
        break;
    }
};

  return (
    <>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        stories.value?.map((story,index) => {
          return (
            <div className="py-4" key={index} onKeyDown={handleKeyDown(index)}>
              <Story data={story} />
            </div>
          );
        })
      )}
    </>
  );
};

export default Stories;
