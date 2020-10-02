import React from "react";
import { Engine } from "@c11/engine.react";
import App from "./App";

const todos = {
  id00: {
    id:'id00',
    title:'React Engine',
    completed: false,
    description: "learn react engine",
  },
  id01: {
    id:'id01',
    title:'Lorem Ipsum',
    completed: false,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  id02: {
    id:'id02',
    title:'Node Engine',
    completed: false,
    description: "learn node engine",
  },
};
const engine = new Engine({
  state: {
    initial: {
      todo: {
        byId: todos,
        action: {
          type: undefined,
          value: undefined,
        },
      },
      mode: {
        type: 'list',
        data: {},
      },
    },
  },
  view: {
    root: "#app",
    element: <App />,
  },
});

window.db = engine.getContext().db;
