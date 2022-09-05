import { useWorker } from "@koale/useworker";
import worker from "../worker/worker-two";

export default function useKoalaWorker(
  nums: Array<number>
): Array<() => Promise<void>> {
  // koale web worker hook
  const [koaleWorker] = useWorker(worker);
  // call other-worker using shopify web worker
  const runKoaleWorker = async () => {
    try {
      const result = await koaleWorker(nums);
      console.log("koale worker result ", { result });
    } catch (error) {
      console.log("error ", error);
    }
  };

  return [runKoaleWorker];
}
