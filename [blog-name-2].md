# Access Modifiers in TypeScript OOP: public, private, protected, and readonly

TypeScript enhances object-oriented programming with access modifiers that control how class members can be accessed. These modifiers—public, private, protected, and readonly—help enforce encapsulation and prevent unintended modifications. Understanding them is essential for writing secure and maintainable code.

By default, all class members are public. Public members can be accessed from anywhere: inside the class, subclasses, or external code.

```typescript
class Person {
  public name: string;
  constructor(name: string) {
    this.name = name;
  }
}
const p = new Person("Alice");
console.log(p.name); // Accessible
```

Private members are accessible only within the class itself. They cannot be accessed from outside or even from subclasses.

```typescript
class BankAccount {
  private balance: number = 0;
  deposit(amount: number) {
    this.balance += amount; // OK
  }
}
// const acc = new BankAccount();
// acc.balance; // Error: private
```

Protected members work like private ones but remain accessible in subclasses. This supports inheritance while limiting external access.

```typescript
class Animal {
  protected species: string;
  constructor(species: string) {
    this.species = species;
  }
}
class Dog extends Animal {
  bark() {
    console.log(`A ${this.species} barks`); // OK
  }
}
```

Readonly marks a property so it can be set only during initialization (in the declaration or constructor). After that, it cannot be reassigned.

```typescript
class Config {
  readonly apiUrl: string;
  constructor(url: string) {
    this.apiUrl = url;
  }
  // this.apiUrl = "new"; // Error
}
```

Use public for general access, private for internal state, protected for inheritance hierarchies, and readonly for immutable values. Combining these modifiers strengthens encapsulation and clarifies design intent in TypeScript classes.