import React, { useContext } from "react";
import { AppContext } from "../../context";
const Stories = () => {
  const { stories, loading } = useContext(AppContext);
  return (
    <>
      {loading ? (
        <h1>Loading....</h1>
      ) : (
        stories.value?.map((story) => {
          return (
            <div key={story.id}>
              <h1>{story.author}</h1>
            </div>
          );
        })
      )}
    </>
  );
};

export default Stories;
