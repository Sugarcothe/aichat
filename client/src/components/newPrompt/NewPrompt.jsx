import React, { useEffect, useRef } from "react";
import "./newPrompt.css";

const NewPrompt = () => {
  const endRef = useRef(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);


  return (
    <div className="newPrompt" ref={endRef}>
      <form className="newForm">
        <label htmlFor="file">
          <img src="/attachment.png" alt="" />
        </label>
        <input id="file" type="file" multiple={false} hidden />
        <input type="text" placeholder="Enter a prompt here..." />
        <button>
          <img src="/arrow.png" alt="" />
        </button>
      </form>
    </div>
  );
};

// ssamxzb0s
// https://ik.imagekit.io/ssamxzb0s/path/to/myimage.jpg

export default NewPrompt;
