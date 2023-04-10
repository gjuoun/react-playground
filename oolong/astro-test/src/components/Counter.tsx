import { createStore } from "@oolong/react";
import React from "react";

const countStore = createStore(0);

export const Counter = () => {
  const count = countStore();
  return (
    <>
      count: {count}
      <button onClick={() => countStore.set((prev) => prev + 1)}>+</button>
    </>
  );
};
