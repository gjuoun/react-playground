import { CSRWrapper } from "./CSRWrapper";

export default function Home() {
  return (
    <div>home page 

      <CSRWrapper data={{name: "xiong", age: 28}}>
        yan xiong
      </CSRWrapper>
    </div>
  )
}
