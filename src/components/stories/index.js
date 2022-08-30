import React, { useContext } from "react";
import { AppContext } from "../../context";
import Story from "../story";
import { motion } from "framer-motion";

const Stories = () => {
  
  const { stories, loading, noResult } = useContext(AppContext);
  if (typeof (stories) === "undefined") {
    return <></>;
  }

  if (noResult) {
    return <h1 className="py-4" >No result found</h1>;
  }

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 0.8,
        staggerDirection: -1
      }
    }
  }
  
  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 }
  }


  return (
    <>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        stories.length === 0 ? <h1 className="py-4">Type atleast 3 characters to search</h1>
        :
        <motion.ul
        variants={container}
        initial="hidden"
        animate="show"
      >        {stories?.map((story,index) => {
          return (
            <motion.li variants={item} size={50}  className="py-4" key={index}>
              <Story data={story} />
            </motion.li>
          );
        })}
        </motion.ul>
      )}
    </>
  );
};

export default Stories;
