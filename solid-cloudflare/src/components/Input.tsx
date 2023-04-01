import { createSignal } from "solid-js";

export function MyInput() {
  const [input, setInput] = createSignal("");
  const [count, setCount] = createSignal(0);
  return (
    <>
      <input
        type="text"
        value={input()}
        onInput={(e) => {
          setInput(e.currentTarget.value);
        }}
      />

      <div>
        <button onClick={() => setCount(count() + 1)}>Click me</button>

        <p>this count : {count()}</p>
      </div>
    </>
  );
}
