import WorkerBuilder from "../worker/worker-builder";
import worker from "../worker/worker-one";

export default function useNormalWorker(
  nums: Array<number>
): Array<() => void> {
  // call normal-worker without using any libs
  const runNormalWorker = () => {
    // initiate worker
    const workerBuilder = new WorkerBuilder(worker);

    // post message to worker
    workerBuilder.postMessage(nums);

    // receive message from worker
    workerBuilder.onmessage = (message) => {
      console.log("worker message: ", message.data);
      workerBuilder.terminate();
    };

    // receive error from worker
    workerBuilder.onerror = (error) => {
      console.log("worker error: ", error.message);
      workerBuilder.terminate();
    };
  };
  return [runNormalWorker];
}
