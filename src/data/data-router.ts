import { v4 as uuidv4 } from 'uuid';
import { Home, Callback,Context, Effect, Memo, Reducer } from "../routes";

export const routes = [
  {
    index: true,
    Component: Home,
  },
  {
    path: "use-callback",
    Component: Callback,
  },
  {
    path: "use-context",
    Component: Context,
  },
  {
    path: "use-effect",
    Component: Effect,
  },
  {
    path: "use-memo",
    Component: Memo,
  },
  {
    path: "use-reducer",
    Component: Reducer,
  },
];

export const components = [
  {
    id: uuidv4(),
    url: "use-callback",
    component: Callback,
  },
  {
    id: uuidv4(),
    url: "use-context",
    component: Context,
  },
  {
    id: uuidv4(),
    url: "use-effect",
    component: Effect,
  },
  {
    id: uuidv4(),
    url: "use-memo",
    component: Memo,
  },
  {
    id: uuidv4(),
    url: "use-reducer",
    component: Reducer,
  },
];
