import { Cycle } from "./reducer";

export enum ActionTypes {
  ADD_NEW_CYCLE = "ADD_NEW_CYCLE",
  INTERRUPT_CURRENT_CYCLE = "INTERRUPT_CURRENT_CYCLE",
  MARK_CURRENT_CYCLE_AS_FINISHED = "MARK_CURRENT_CYCLE_AS_FINISHED",
}

export interface ActionProps {
  type: ActionTypes;
  payload?: {
    newCycle: Cycle;
  };
}

export function addNewCycleAction(newCycle: Cycle): ActionProps {
  return {
    type: ActionTypes.ADD_NEW_CYCLE,
    payload: {
      newCycle,
    },
  };
}

export function markCurrentCycleAsFinishedAction(): ActionProps {
  return {
    type: ActionTypes.MARK_CURRENT_CYCLE_AS_FINISHED,
  };
}

export function interruptCurrentCycleAction(): ActionProps {
  return {
    type: ActionTypes.INTERRUPT_CURRENT_CYCLE,
  };
}
