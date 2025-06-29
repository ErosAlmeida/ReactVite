import { TaskStateModel } from "../../models/TaskStateModel";
import { TaskActionModel, TaskActionTypes } from "./taskActions";

export function TaskReducer(
  state: TaskStateModel,
  action: TaskActionModel
): TaskStateModel {
  switch (action.type) {
    case TaskActionTypes.START_TASK: {
      return state;
    }
    case TaskActionTypes.INTERRUPT_TASK: {
      return state;
    }
    case TaskActionTypes.RESET_STATE: {
      return state;
    }
  }

  //sempre deve retornar o estado
  return state;
}
