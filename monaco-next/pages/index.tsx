import Head from "next/head";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";

const MonacoEditor = dynamic(import("react-monaco-editor"), { ssr: false });

export default function Home() {
  const [postBody, setPostBody] = useState("");
  // etc
  return (
    <div>
      {/* etc */}
      <MonacoEditor
        editorDidMount={() => {}}
        width="800"
        height="600"
        language="markdown"
        theme="vs"
        value={postBody}
        options={{
          minimap: {
            enabled: true,
          },
        }}
        onChange={setPostBody}
      />
    </div>
  );

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="text-blue-400"></div>
      <MonacoEditor />
    </>
  );
}
