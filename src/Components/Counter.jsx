"use client";
import { useState } from "react";
import Buttons from "./Button";
const Counter = () => {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount((prev) => prev + 1);
  };
  const deletedCount = () => {
    setCount((prev) => prev - 1);
  };
  return (
    <>
      <div className="m-auto bg-gray-100 flex felx-row w-full  bourder justify-center text-center h-screen items-center">
        <div className="text-center bg-white min-w-76 min-h-76 rounded flex flex-col items-center">
          <h1 className="">Counter App</h1>
          <h2 className="">{count}</h2>
          <div className="flex flex-row  text-center justify-center gap-6 items-center ">
            {" "}
                        <Buttons onChange={deletedCount} className= "hover:bg-red-500">decrement</Buttons>

            <Buttons onChange={handleClick}> increment</Buttons>
          </div>
        </div>
      </div>
    </>
  );
};
export default Counter;
