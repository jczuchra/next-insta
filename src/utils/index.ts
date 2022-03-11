import { AppContext } from './appContext';
import { initialState } from './initialState';
import { reducer, UPDATE_VALUE } from './reducer';

export function getTextWidth(text, classes) {
  const div = document.getElementById('ruler');
  div.className = div.classList.value + ' ' + classes;
  div.innerHTML = text;
  const metrics = div.clientWidth;
  return metrics;
}

export { AppContext, initialState, reducer, UPDATE_VALUE };
