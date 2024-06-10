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
