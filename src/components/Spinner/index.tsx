import React from "react";
import Image from "next/legacy/image";

export const Spinner = () => {
  return (
    <>
      <Image
        className="w-[200px] m-auto block"
        src="/../public/spinner.gif"
        alt="Loading..."
        width="200"
        height="200"
      />
    </>
  );
};
