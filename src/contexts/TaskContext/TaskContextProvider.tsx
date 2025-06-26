import { useEffect, useReducer, useState } from "react";
import { TaskContext } from "./TaskContext";
import { initialTaskState } from "./initialTaskState";

type TaskContextProviderProps = {
  children: React.ReactNode;
};

export function TaskContextProvider({ children }: TaskContextProviderProps) {
  const [state, setState] = useState(initialTaskState);

  type ActionType = {
    type: String;
    payLoad?: number;
  };

  const [numero, dispatch] = useReducer((
    state,action:ActionType) => {
      console.log(state,action);
    })

    switch(action.type){
      return state,
    }
    {
      secondRemaning : 0;
    }

  //useEffect(() => {
  // console.log(state);
  //}, [state]);

  return (
    <TaskContext.Provider value={{ state, setState }}>
     <h1>O estado é: {JSON.stringify(myState)}</h1>
      <button onClick={() => dispatch({ type: 'INCREMENT', payload: 10 })}></button>
      incrementar +10
    </TaskContext.Provider>
  );
}
