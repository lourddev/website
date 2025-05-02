// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const onKonami = (f: any, a?: any) => {
  document.onkeyup = function (e) {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    /113302022928$/.test((a += [(e || (self.event as Event)).keyCode - 37])) &&
      f();
  };
};
