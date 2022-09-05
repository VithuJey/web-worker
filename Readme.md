# Web worker in React 🧑‍🚀

## 🚀 Project Structure

Inside this project, you'll see the following folders and files:

```
/
├── public/
├── src/
│   ├── hooks/
│   │   └── useKoaleWorker.ts
│   │   └── useNormalWorker.ts
│   │   └── useShopifyWorker.ts
│   └── worker/
│   │    └── worker-builder.ts
│   │    └── worker-one.ts
│   │    └── worker-two.ts
│   └── App.tsx
│   └── main.tsx
└── package.json
```

The `hooks/` directory has three hooks to run the web workers. `useNormalWorker.ts` runs using inbuilt web-worker API. `useKoaleWorker.ts` runs using [Koale](https://github.com/alewin/useworker) library. `useShopifyWorker.ts` runs using [Shopify](https://github.com/Shopify/quilt/tree/main/packages/web-worker) library.

The `worker` directory has `worker-builder.ts` to build `WorkerBuilder` class to access web-worker API. The `worker-one.ts` and `worker-two.ts` files has function that is going to run on web workers. `worker-one.ts` funciton is to run on `useNormalWorker` and `worker-two.ts` funciton is to run on `useKoaleWorker` and `useShopifyWorker` hooks.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command           | Action                                       |
| :---------------- | :------------------------------------------- |
| `npm install`     | Installs dependencies                        |
| `npm run dev`     | Starts local dev server at `localhost:3000`  |
| `npm run build`   | Build your production site to `./dist/`      |
| `npm run preview` | Preview your build locally, before deploying |

## 👀 Want to learn more about Web workers?

Feel free to check [Mozilla Web workers](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API) documentation.
