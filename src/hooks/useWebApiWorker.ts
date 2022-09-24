export default function useWebApiWorker(
  nums: Array<number>
): Array<() => void> {
  // call Web API worker without using any libs
  const runWebApiWorker = () => {
    // initiate worker
    const worker = new Worker("./worker/webApiWorker.ts");

    // post message to worker
    worker.postMessage(nums);

    // receive message from worker
    worker.onmessage = (message) => {
      console.log("worker message: ", message.data);
      worker.terminate();
    };

    // receive error from worker
    worker.onerror = (error) => {
      console.log("worker error: ", error.message);
      worker.terminate();
    };
  };
  return [runWebApiWorker];
}
