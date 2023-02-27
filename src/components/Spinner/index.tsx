import React from "react";
import Image from "next/image";

export const Spinner = () => {
  return (
    <>
      <Image
        className="w-[200px] m-auto block"
        src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif"
        alt="Loading..."
        width="200"
        height="200"
      />
    </>
  );
};
