## Using Bun to run in console

```
npx bun src/index.ts
```

## Using mastra dev

You can run your agent as a service using the `mastra dev` command: This is run mastra chat agent UI with some dev tools
```
mastra dev
```

## Accessing the Chef Assistant API

By default, mastra dev runs on `http://localhost:4111.` Your Chef Assistant agent will be available at:

```
POST http://localhost:4111/api/agents/chefAgent/generate
```