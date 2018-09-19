export const log = [];

export default function({ light, cars, duration }) {
  return log.push({ light, cars, duration });
}

export function saveToClipboard() {
  copy(toString());
}

function copy(txt) {
  txt = document.createTextNode(txt);
  document.body.appendChild(txt);
  if (document.body.createTextRange) {
    var d = document.body.createTextRange();
    d.moveToElementText(txt);
    d.select();
    document.execCommand("copy");
  } else {
    var d = document.createRange();
    d.selectNodeContents(txt);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(d);
    document.execCommand("copy");
    window.getSelection().removeAllRanges();
  }
  txt.remove();
}

export function toString() {
  return [
    "light, cars, duration (ms)",
    ...log.map(l => `${l.light}, ${l.cars}, ${l.duration}`)
  ].join(";");
}
