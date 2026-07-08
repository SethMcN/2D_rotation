# DVD Screensaver

A tiny DVD-logo-style screensaver on an HTML canvas. Click **Spawn square** and a
coloured square appears at a random spot with a diagonal velocity, then bounces
off the walls forever. Spawn as many as you like and watch them criss-cross.

Written in TypeScript and compiled to a single ES module — no framework, just
`tsc`.

## Run it

It loads the compiled `dvd.js` as an ES module, so serve it over HTTP rather than
opening the file directly:

```sh
npx serve .          # or: python3 -m http.server
```

Open the printed URL and click **Spawn square**.

## Develop

The logic lives in `dvd.ts`. Recompile after editing:

```sh
npm install          # one-time: pulls in TypeScript
npx tsc              # emits dvd.js from dvd.ts (see tsconfig.json)
```

## Live

A self-contained copy runs in my project lab:
**https://lab.sethm.dev/projects/dvd-screensaver.html**
