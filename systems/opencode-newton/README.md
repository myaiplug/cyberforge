# OpenCode Tokens + Newton Antigravity

Remastered motion system for CyberForge.

## Tokens
- --bg-deep: #020617
- --bg-surface: #0f172a
- --cyan: #22d3ee
- --purple: #a78bfa

## Motion presets
```js
const antigravitySpring = {
  type: "spring",
  stiffness: 80,
  damping: 12,
  mass: 0.8
};

const levitate = {
  y: [-6, 6, -6],
  transition: { duration: 5.5, repeat: Infinity, ease: "easeInOut" }
};
```

Use `SYSTEM-PROMPT.md` as AI context.
