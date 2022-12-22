import { useState } from "react";
import { Editor } from "./Editor";
import "./userWorker";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      hey
      <Editor />
    </div>
  );
}

export default App;
