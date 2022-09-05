// normal web worker implementation
export default class WorkerBuilder extends Worker {
  constructor(worker: () => void) {
    super("");
    const code = worker.toString();
    const blob = new Blob([`(${code})()`]);
    return new Worker(URL.createObjectURL(blob));
  }
}
