const ONCLOSE = "ONCLOSE";
const ONOPEN = "ONOPEN";

const initState = {
  open: false
};

const slideBarRedux = (state = initState, action) => {
  switch (action.type) {
    case "ONCLOSE":
      return { ...state, open: false };
    case "ONOPEN":
      return { ...state, open: true };
    default:
      return state;
  }
};

const onClose = () => {
  return { type: ONCLOSE };
};

const onOpen = () => {
  return { type: ONOPEN };
};

export { slideBarRedux, onClose, onOpen };
