export const types = {
  TEXT_CHANGE: "TEXT_CHANGE"
};

export const changeText = text => ({
  type: types.TEXT_CHANGE,
  text
});
