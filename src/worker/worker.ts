export default () => {
  self.onmessage = (message) => {
    // post message to JS thread
    self.postMessage(`Received --> ${message.data}`);
    self.postMessage(`Sending --> Hello from Web Worker`);
  };
};
