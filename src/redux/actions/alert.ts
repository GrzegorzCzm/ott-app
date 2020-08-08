export const CLOSE_ALERT = "CLOSE_ALERT";
export const SHOW_ALERT = "SHOW_ALERT";

export const closeAlertAction = () => ({
  type: CLOSE_ALERT,
});

export const showAlertAction = (text: Text) => ({
  type: SHOW_ALERT,
  payload: text,
});
