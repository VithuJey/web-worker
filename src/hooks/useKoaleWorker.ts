import { useWorker } from "@koale/useworker";
import worker from "../../public/worker/libWorker";

export default function useKoaleWorker(
  nums: Array<number>
): Array<() => Promise<void>> {
  // koale web worker hook
  const [koaleWorker] = useWorker(worker);

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
