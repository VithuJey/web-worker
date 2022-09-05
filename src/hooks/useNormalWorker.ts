import WorkerBuilder from "../worker/worker-builder";
import normalWorker from "../worker/worker-one";

export default function useNormalWorker(
  nums: Array<number>
): Array<() => void> {
  // call normal-worker without using any libs
  const runNormalWorker = () => {
    // initiate worker
    const worker = new WorkerBuilder(normalWorker);

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
  return [runNormalWorker];
}
