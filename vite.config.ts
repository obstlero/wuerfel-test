import { defineConfig } from 'vite';

// GitHub Pages liefert die Seite unter https://obstlero.github.io/wuerfel-test/ aus.
// Deshalb ist der Basispfad überall (lokal, Vorschau, Build) "/wuerfel-test/".
export default defineConfig({
  base: '/wuerfel-test/',
});
