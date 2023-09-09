# Analytic Geometry

A program to draw analytic geometry graphs on canvas.

## Usage

We can write JavaScript code in the playground.

### `colors`

Use `colors` to specify color of graph.

- We use [tailwindcss colors themes](https://tailwindcss.com/docs/customizing-colors).

### `createFormula`

Use `createFormula` to add formulas:

[ [Goto The Playground](https://analytic-geometry.xieyuheng.com/playground/Y3JlYXRlRm9ybXVsYSh7CiAgZGVzY3JpcHRpb246ICdzaW4nLAogIGY6ICh4KSA9PiBNYXRoLnNpbih4KSwKICBjb2xvcjogY29sb3JzLnJvc2VbNDAwXSwKfSkKCmNyZWF0ZUZvcm11bGEoewogIGRlc2NyaXB0aW9uOiAneCAqKiAyJywKICBmOiAoeCkgPT4geCAqKiAyLAogIGNvbG9yOiBjb2xvcnMucm9zZVs0MDBdLAp9KQoKY3JlYXRlRm9ybXVsYSh7CiAgZGVzY3JpcHRpb246ICd4ICogc2luKHgpJywKICBmOiAoeCkgPT4geCAqIE1hdGguc2luKHgpLAogIGNvbG9yOiBjb2xvcnMucm9zZVs0MDBdLAp9KQ) ]

```js
createFormula({
  description: 'sin',
  f: (x) => Math.sin(x),
  color: colors.rose[400],
})

createFormula({
  description: 'x ** 2',
  f: (x) => x ** 2,
  color: colors.rose[400],
})

createFormula({
  description: 'x * sin(x)',
  f: (x) => x * Math.sin(x),
  color: colors.rose[400],
})
```

### `createMotions`

Use `createMotions` to add motions:

[ [Goto The Playground](https://analytic-geometry.xieyuheng.com/playground/Y3JlYXRlTW90aW9uKHsKICBkZXNjcmlwdGlvbjogJ0NpcmNsZSBvZiByYWRpYW4gMy4nLAogIHg6ICh0KSA9PiBNYXRoLnNpbih0KSAqIDMsCiAgeTogKHQpID0-IE1hdGguY29zKHQpICogMywKICByYW5nZTogWzAsIE1hdGguUEkgKiAyXSwKICBjb2xvcjogY29sb3JzLm9yYW5nZVs0MDBdLAp9KQoKLy8gaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvQnV0dGVyZmx5X2N1cnZlXyh0cmFuc2NlbmRlbnRhbCkKCmNvbnN0IHNpbjV0aW1lcyA9IAogICh0KSA9PiBNYXRoLnNpbihNYXRoLnNpbihNYXRoLnNpbihNYXRoLnNpbihNYXRoLnNpbih0KSkpKSkKCmNyZWF0ZU1vdGlvbih7CiAgZGVzY3JpcHRpb246ICdCdXR0ZXJmbHkgY3VydmUuJywKICB4OiAodCkgPT4KICAgIDQgKgogICAgTWF0aC5zaW4odCkgKgogICAgKE1hdGguRSAqKiBNYXRoLmNvcyh0KSAtCiAgICAgIDIgKiBNYXRoLmNvcyg0ICogdCkgLQogICAgICBzaW41dGltZXModCAvIDEyKSksCiAgeTogKHQpID0-CiAgICAzICoKICAgIE1hdGguY29zKHQpICoKICAgIChNYXRoLkUgKiogTWF0aC5jb3ModCkgLQogICAgICAyICogTWF0aC5jb3MoNCAqIHQpIC0KICAgICAgc2luNXRpbWVzKHQgLyAxMikpLAogIHJhbmdlOiBbMCwgTWF0aC5QSSAqIDEyXSwKICBwcmVjaXNpb246IDAuMDEsCiAgY29sb3I6IGNvbG9ycy5vcmFuZ2VbNDAwXSwKfSk) ]

```js
createMotion({
  description: 'Circle of radian 3.',
  x: (t) => Math.sin(t) * 3,
  y: (t) => Math.cos(t) * 3,
  range: [0, Math.PI * 2],
  color: colors.orange[400],
})

// https://en.wikipedia.org/wiki/Butterfly_curve_(transcendental)

const sin5times =
  (t) => Math.sin(Math.sin(Math.sin(Math.sin(Math.sin(t)))))

createMotion({
  description: 'Butterfly curve.',
  x: (t) =>
    4 *
    Math.sin(t) *
    (Math.E ** Math.cos(t) -
      2 * Math.cos(4 * t) -
      sin5times(t / 12)),
  y: (t) =>
    3 *
    Math.cos(t) *
    (Math.E ** Math.cos(t) -
      2 * Math.cos(4 * t) -
      sin5times(t / 12)),
  range: [0, Math.PI * 12],
  precision: 0.01,
  color: colors.orange[400],
})
```

## Development

```sh
npm install     # Install dependencies
npm run dev     # Start the dev server
npm run check   # Type check
npm run format  # Format the code
```

## Contributions

To make a contribution, fork this project and create a pull request.

Please read the [STYLE-GUIDE.md](STYLE-GUIDE.md) before you change the code.

Remember to add yourself to [AUTHORS](AUTHORS).
Your line belongs to you, you can write a little
introduction to yourself but not too long.

## License

[GPLv3](LICENSE)
