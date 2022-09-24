import { createWorkerFactory, useWorker } from "@shopify/react-web-worker";

// init shopify createWorkerFactory
const createWorker = createWorkerFactory(
  () => import("../../public/worker/libWorker")
);

export default function useShopifyWorker(
  nums: Array<number>
): Array<() => Promise<void>> {
  // shopify web worker hook
  const shopifyWorker = useWorker(createWorker);
  // call other-worker using shopify web worker
  const runShopifyWorker = async () => {
    try {
      const result = await shopifyWorker.default(nums);
      console.log("shopify worker result ", { result });
    } catch (error) {
      console.log("error ", error);
    }
  };

  return [runShopifyWorker];
}
