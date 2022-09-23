`📖 Reverse-engineered Google Translate API`

This is a small library that uses Google's Translate API writte with 💖 and TypeScript and is meant to be simple and lightweight.

## Usage
```ts
import { translate } from 'mod.ts';

const translation = await translate('Hello World!', 'en', 'de');

console.log(translation); // Hallo Welt!
```

## Web API
You can also use the Web API version of the library. It's available at [`gtrs.deno.dev`](https://gtrs.deno.dev)

### /
Returns the translation of the query string
- txt - The text to translate
- f - The source language
- t - The target language

### /langs
Returns a list of all supported languages