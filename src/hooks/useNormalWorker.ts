export default function useNormalWorker(
  nums: Array<number>
): Array<() => void> {
  // call normal-worker without using any libs
  const runNormalWorker = () => {
    // initiate worker
    const workerBuilder = new Worker("./worker/webApiWorker.ts");

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
