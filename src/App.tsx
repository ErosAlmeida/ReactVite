import "./styles/theme.css";
import "./styles/global.css";

//import { Home } from "./pages/Home";
//import { NotFound } from "./pages/NotFound";
import { Home } from "./pages/Home";
import { TaskStateModel } from "./models/TaskStateModel";
import { useState } from "react";

// export type TaskStateModel = {
//   tasks: TaskModel[];
//   secondsRemaining: number;
//   formattedSecondsRemaining: string;
//   activeTask: TaskModel | null;
//   currentCycle: number; // 1 a 8
//   config: {
//     workTime: number;
//     shortBreakTime: number;
//     longBreakTime: number;
//   };
// };
const initialState: TaskStateModel = {
  tasks: [],
  secondsRemaining: 0,
  formattedSecondsRemaining: "00:00",
  activeTask: null,
  currentCycle: 0,
  config: {
    workTime: 25,
    shortBreakTime: 5,
    longBreakTime: 15,
  },
};

export function App() {
  const [state, setState] = useState(initialState);

  return <Home state={state} setState={setState} />;
}
