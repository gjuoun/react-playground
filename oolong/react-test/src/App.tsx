import { createStore } from "@oolong/react";
import { useState } from "react";

const counterStore = createStore(0);

function App() {
  const count = counterStore();
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => counterStore.set(count + 1)}>+</button>
    </div>
  );
}

export default App;
