import React from "react";

type Props = {};

export default function Navbar({}: Props) {
  return (
    <div className="top-0 left-0 flex justify-center items-center border-b border-zinc-100 w-full h-[4rem]">
      <div className="w-10/12 mx-auto flex justify-between items-center">
        {/* logo  */}
        <div>logo</div>

        {/* ham  */}
        <div>Ham</div>
      </div>
    </div>
  );
}
