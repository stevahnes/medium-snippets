figma.showUI(__html__, {
  visible: true,
  width: 300,
  height: 100,
});

let count: number = 0;

figma.ui.onmessage = (msg) => {
  if (msg.type === "focus") {
    count++;
    figma.ui.postMessage({ value: count });
  }
};
