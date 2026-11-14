# Age Calculator

Static HTML/CSS/JavaScript project by Asrith. Open `index.html` in a browser,
or serve the folder with `python -m http.server 8080` and visit
http://localhost:8080. No Node dependencies, API keys, database or backend.

The main page validates dates, rejects future dates and calculates complete
years, months and days. Month-end anniversaries are clamped to the last day
of that month: for example 31 January → 28 February counts as one complete
month in a non-leap year. It uses the visitor's local calendar date.

`AgeCalculator.html` and `AGE.js` are the original alternate page. Use
`index.html` for the validated main application.

Run date-logic tests with Node.js 22 or 24:

```text
node --test tests/age.test.js
```

## Hosting

Vercel deployment: https://asrith-age-calculator.vercel.app

Hosted private preview: https://asrith-age-calculator-1114.muhammedasrith.chatgpt.site
(sign in with the owning ChatGPT account).

Upload `index.html` and `age-core.js` together to any static host. You can
also enable GitHub Pages from this repository's main branch/root. All age
calculations run in the browser; birth dates are not sent to an API.
