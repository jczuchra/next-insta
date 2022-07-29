export function getTextWidth(text: string, classes: string) {
  const div = document.getElementById('ruler');
  div.className = div?.classList?.value + ' ' + classes;
  div.innerHTML = text;
  return div.clientWidth;
}
