# Type Aliases vs Interfaces in TypeScript: Core Differences

TypeScript offers two main ways to define custom types: type aliases and interfaces. Both describe object shapes and can often be used interchangeably. However, they differ in flexibility, extension mechanisms, and special features. Understanding these differences helps you write cleaner, more maintainable code.

Interfaces excel at defining the structure of objects and support declaration merging. You can declare the same interface multiple times, and TypeScript combines them automatically. They also use the `extends` keyword for inheritance, which provides clear error messages on conflicts.

```typescript
interface User {
  name: string;
}
interface User {
  age: number;
}
// Merged: { name: string; age: number }

interface Admin extends User {
  role: string;
}
```

Type aliases are more versatile. They can represent primitives, unions, tuples, function types, mapped types, and conditional types—features interfaces cannot handle alone.

```typescript
type ID = string | number;
type Point = [number, number];
type Status = "loading" | "success" | "error";

type UserWithRole = User & { role: string }; // Intersection
```

Declaration merging is unique to interfaces and useful for augmenting third-party libraries or global types. Types throw an error on duplicate names.

Choose interfaces when modeling public object APIs, domain entities, or class contracts that may need extension or merging. Prefer type aliases for unions, complex compositions, utility types, or anything beyond simple object shapes. Many teams default to interfaces for objects and switch to types when needed, or the reverse for consistency.

In short, interfaces suit extensible object contracts, while types offer broader expressive power. Select based on the specific type requirements and team conventions to keep your TypeScript codebase robust and readable.
