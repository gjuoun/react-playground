import React, { useEffect } from "react";
import * as monaco from "monaco-editor";

export const App = () => {
  useEffect(() => {
    const editor = monaco.editor.create(document.getElementById("monaco")!, {
      value: 'function x() {console.log("Hello world!");}',
      language: "javascript",
    });
    return () => {
      editor.dispose();
    };
  }, []);

  return (
    <div>
      hello
      <div id="monaco" style={{ height: 300, border: "1px solid gray" }}></div>
    </div>
  );
};
