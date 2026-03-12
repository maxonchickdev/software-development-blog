---
slug: react-hooks-patterns
title: React Hooks Patterns for Clean Components
excerpt: Custom hooks and composition.
date: 2026-03-10
---

Extract logic into custom hooks to keep components focused on rendering. Here's a pattern for form handling.

## Custom Hook: useFormField

```tsx
import { useState, useCallback } from "react";

function useFormField(initialValue = "") {
  const [value, setValue] = useState(initialValue);
  const [touched, setTouched] = useState(false);

  const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }, []);

  const onBlur = useCallback(() => setTouched(true), []);

  const reset = useCallback(() => {
    setValue(initialValue);
    setTouched(false);
  }, [initialValue]);

  return { value, touched, onChange, onBlur, reset };
}
```

## Using the Hook

```tsx
function LoginForm() {
  const email = useFormField("");
  const password = useFormField("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ email: email.value, password: password.value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        value={email.value}
        onChange={email.onChange}
        onBlur={email.onBlur}
      />
      <input
        type="password"
        value={password.value}
        onChange={password.onChange}
        onBlur={password.onBlur}
      />
      <button type="submit">Sign in</button>
    </form>
  );
}
```

One hook per field. Composable. Testable.
