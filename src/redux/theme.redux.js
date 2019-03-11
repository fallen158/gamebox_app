const initState = {
  color: "secondary"
};
const themeRedux = (state = initState, action) => {
  switch (action.type) {
    case "primary":
      return { color: action.payload };

    case "secondary":
      return { color: action.payload };

    case "inherit":
      return { color: "inherit" };
    default:
      return { ...initState };
  }
};

const setThemeColor = data => {
  console.log(data);
  console.log(23567218697);
  return { type: data, payload: data };
};

export { themeRedux, setThemeColor };
