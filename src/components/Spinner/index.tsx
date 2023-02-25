import React from "react";
import Image from "next/image";

export const Spinner = () => {
  return (
    <>
      <Image
        className="w-[200px] m-auto block"
        src="/images/spinner.gif"
        alt="Loading..."
        width="200"
        height="200"
      />
    </>
  );
};
