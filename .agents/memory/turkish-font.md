---
name: Turkish font fix
description: How Turkish special characters are handled in the Parasayte portfolio
---

The Thmanyah font family is Arabic-first and does not reliably render Turkish-specific Latin Extended characters (ğ, ş, ı, İ, ç, ö, ü).

**Fix applied:** Added `data-lang={lang}` to the root div, then scoped CSS:

```css
[data-lang="tr"] {
  font-family: 'Plus Jakarta Sans', 'Thmanyah Sans', 'Inter', sans-serif;
}
[data-lang="tr"] h1, [data-lang="tr"] h2, ... {
  font-family: 'Syne', 'Plus Jakarta Sans', sans-serif;
}
```

**Why:** Plus Jakarta Sans and Syne both have full Latin Extended coverage. Thmanyah stays as fallback so partial overlap still renders in brand style.

**How to apply:** Any time a new language with extended Latin chars is added, scope it via `[data-lang="xx"]` rather than relying on Thmanyah.
