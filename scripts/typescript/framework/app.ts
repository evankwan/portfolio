type StateConfig = {
  [key: string]: any;
}

type ElementsConfig = {
  [key: string]: string;
}

type MethodsConfig = {
  [key: string]: Function;
}

type OnMounted = () => void;

type Watcher = {
  on: string;
  cb: Function;
}

type WatchersConfig = {
  [key: string]: Watcher;
}

export interface AppConfig {
  state: StateConfig;
  elements: ElementsConfig;
  methods: MethodsConfig;
  onMounted: OnMounted;
  watch: WatchersConfig;
}

export interface App {
  initializeMethods: (methods: MethodsConfig) => void;
  initializeSelectors: (elements: ElementsConfig) => void;
  addWatchers: (watchers: WatchersConfig) => void;
  mount: (mountConfig: AppConfig) => void;
  [key: string]: Function | any;
}

const app = {
  initializeMethods: (methods: any) => {
    Object.keys(methods).forEach((fn) => {
      app[fn] = methods[fn]
    })
  },
  initializeSelectors: (elements: any) => {
    Object.keys(elements).forEach((el) => {
      app[el] = document.getElementById(elements[el])
    })
  },
  addWatchers: (watchers: any) => {
    Object.keys(watchers).forEach((el) => {
      app?.[el].addEventListener(watchers[el].on, watchers[el].cb)
    })
  },
  mount: ({ elements, methods, onMounted, watch }: AppConfig) => {
    app.initializeSelectors(elements)
    app.initializeMethods(methods)
    app.addWatchers(watch)
    onMounted()
  },
} as App;

export default app;
