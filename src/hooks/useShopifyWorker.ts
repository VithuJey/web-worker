import { createWorkerFactory, useWorker } from "@shopify/react-web-worker";
import React from "react";

// init shopify createWorkerFactory
const createWorker = createWorkerFactory(() => import("../worker/worker-two"));

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
