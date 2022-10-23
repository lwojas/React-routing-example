export const Interface = {
  Dispatch(action, props) {
    if (Interface.actions[action]) {
      Interface.actions[action](props);
    } else {
      console.log(action + " - This action is not recgonised");
    }
  },
  actions: {}, // Only functions can be added to this pool
};

// export Interface.tip = {};
