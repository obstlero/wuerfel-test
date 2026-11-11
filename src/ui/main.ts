import './style.css';
import { wuerfeln } from '../sim/wuerfel';

const button = document.querySelector<HTMLButtonElement>('#wuerfeln')!;
const ergebnis = document.querySelector<HTMLOutputElement>('#ergebnis')!;

button.addEventListener('click', () => {
  ergebnis.textContent = String(wuerfeln());
  // kurze Animation neu starten, damit man auch bei gleicher Zahl sieht, dass gewürfelt wurde
  ergebnis.classList.remove('neu');
  void ergebnis.offsetWidth;
  ergebnis.classList.add('neu');
});
