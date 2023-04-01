type MyElement = {
  type: string;
  props: any;
  children: any[];
};

const createElement = (
  type: string,
  props: any,
  ...children: any[]
): MyElement => {
  return { type, props, children };
};

const ReactDomRender = (element: MyElement, parentElement: HTMLElement) => {
  const { type, props, children } = element;
  const domElement = document.createElement(type);

  if (props) {
    Object.keys(props).forEach((key) => {
      if (key === "style") {
        const style = props[key];
        Object.keys(style).forEach((styleKey) => {
          const styleValue = style[styleKey];
          // domElement.style.color = styleValue;
          domElement.style[styleKey as any] = styleValue;
        });
      }
    });
  }

  if (children) {
    children.forEach((child) => {
      if (typeof child === "string") {
        const textNode = document.createTextNode(child);
        domElement.appendChild(textNode);
      } else {
        // if it's element
        ReactDomRender(child, domElement);
      }
    });
  }

  parentElement.appendChild(domElement);
};

const App = () => {
  return createElement(
    "div",
    null,
    createElement("p", null, "This is a paragraph"),
    createElement("div", { style: { color: "red" } }, "This is a nested div")
  );
};

ReactDomRender(App(), document.getElementById("app")!);
