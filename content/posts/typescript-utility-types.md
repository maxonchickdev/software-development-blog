---
slug: typescript-utility-types
title: TypeScript Utility Types You Should Know
excerpt: Pick, Omit, Partial, and more.
date: 2026-03-11
---

TypeScript's built-in utility types help you transform existing types without writing boilerplate. Here are the most useful ones.

## Pick and Omit

Extract or exclude properties from an object type:

```typescript
interface User {
  id: number;
  name: string;
  email: string;
  password: string;
}

type PublicUser = Pick<User, "name" | "email">;

type CreateUserInput = Omit<User, "id">;
```

## Partial and Required

Make all properties optional or required:

```typescript
type UserUpdate = Partial<User>;

type StrictConfig = Required<Config>;
```

## Record

Build an object type with specific keys and value type:

```typescript
type Status = "pending" | "success" | "error";
type StatusMessages = Record<Status, string>;

const messages: StatusMessages = {
  pending: "Please wait...",
  success: "Done!",
  error: "Something went wrong.",
};
```

Use these utilities to keep your types DRY and expressive.
