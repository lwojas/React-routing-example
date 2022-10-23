export const globalInterface = {
  Dispatch(action, props) {
    if (globalInterface.actions[action]) {
      globalInterface.actions[action](props);
    } else {
      console.log(action + " - This action is not recgonised");
    }
  },
  actions: {},

  DisplayToolTip(props) {
    // console.log(globalInterface);
    if (globalInterface.tips.tipOn) {
      globalInterface.tips.tipOn(props);
    }
  },
  HideToolTip(props) {
    if (globalInterface.tips.tipOff) {
      globalInterface.tips.tipOff(props);
    }
  },
};

// export globalInterface.tip = {};
