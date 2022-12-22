import React, { useEffect } from "react";
import * as monaco from "monaco-editor";

export const App = () => {
  const [text, setText] = React.useState("");
  const editorRef = React.useRef<monaco.editor.IStandaloneCodeEditor>();

  useEffect(() => {
    editorRef.current = monaco.editor.create(
      document.getElementById("monaco")!,
      {
        value: text,
        language: "javascript",
      }
    );
    editorRef.current.onKeyUp((e) => {
      console.log(e);
      const newText = editorRef.current?.getValue();
      console.log(newText);
    });

    editorRef.current.addAction({
      keybindings: [monaco.KeyMod.CtrlCmd | monaco.KeyCode.KeyS],
      id: "save",
      label: "Save",
      run: () => {
        console.log("save");
      },
    });

    return () => {
      editorRef.current?.dispose();
      editorRef.current = undefined;
    };
  }, []);

  return (
    <div>
      hello
      <div
        id="monaco"
        style={{ height: 300, border: "1px solid gray" }}
        onBlur={() => {
          const newText = editorRef.current?.getValue();

          console.log(newText);
        }}
      ></div>
    </div>
  );
};
