# Web worker in React 🕸

## 🚀 Project Structure

Inside this project, you'll see the following folders and files:

```
/
├── public/
│   └── worker/
│   │    └── libWorker.ts
│   │    └── webApiWorker.ts
├── src/
│   ├── hooks/
│   │   └── useKoaleWorker.ts
│   │   └── useWebApiWorker.ts
│   └── App.tsx
│   └── main.tsx
└── package.json
```

The `worker` directory under `public` directory contains worker scripts `libWorker.ts` and `webApiWorker.ts`. The `libWorker.ts` and `webApiWorker.ts` files has function that is going to run on web workers. `webApiWorker.ts` will run using `useWebApiWorker` hook and `libWorker.ts` will run using `useKoaleWorker` hook.

The `hooks` directory under `src` directory has two hooks to run the web workers. `useWebApiWorker.ts` runs using inbuilt Web Workers API. `useKoaleWorker.ts` runs using [Koale](https://github.com/alewin/useworker) library.

Any other static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command           | Action                                       |
| :---------------- | :------------------------------------------- |
| `npm install`     | Installs dependencies                        |
| `npm run dev`     | Starts local dev server at `localhost:3000`  |
| `npm run build`   | Build your production site to `./dist/`      |
| `npm run preview` | Preview your build locally, before deploying |

## 👀 Want to learn more about Web workers?

Feel free to check [Web Workers](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API) documentation on MDN.
