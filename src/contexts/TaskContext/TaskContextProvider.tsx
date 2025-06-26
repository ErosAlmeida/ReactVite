import { useEffect, useReducer, useState } from "react";
import { TaskContext } from "./TaskContext";
import { initialTaskState } from "./initialTaskState";

type TaskContextProviderProps = {
  children: React.ReactNode;
};

export function TaskContextProvider({ children }: TaskContextProviderProps) {
  const [state, setState] = useState(initialTaskState);

  const [numero, dispatch] = (useReducer =
    ((state, action) => {
      console.log(state, action);
      return state;
    },
    0));

  //useEffect(() => {
  // console.log(state);
  //}, [state]);

  return (
    <TaskContext.Provider value={{ state, setState }}>
      <h1>o numero é {numero}</h1>
      <button
        onClick={() => {
          dispatch("INCREMENT");
        }}
      >
        incrementar
      </button>
    </TaskContext.Provider>
  );
}
