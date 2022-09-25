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

The `hooks/` directory has three hooks to run the web workers. `useWebApiWorker.ts` runs using inbuilt web-worker API. `useKoaleWorker.ts` runs using [Koale](https://github.com/alewin/useworker) library.

The `worker` directory contains worker scripts `libWorker.ts` and `webApiWorker.ts`. The `libWorker.ts` and `webApiWorker.ts` files has function that is going to run on web workers. `webApiWorker.ts` funciton is to run on `useWebApiWorker` and `libWorker.ts` funciton is to run on `useKoaleWorker` hook.

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
