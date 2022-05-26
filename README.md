# Node Configuration Workshop

We will discuss the configuration needed for node using: 
1. Typescript
1. ESLint
1. Prettier

## Learning Goals

## Steps

```bash
> npm i typescript --save-dev
> npm run build
> npx tsc --init
> 
```

```json
{
  "compilerOptions": {
    "target": "es5",                          
    "module": "commonjs",                     
    "lib": ["ES2018", "DOM"], 
    "outDir": "./build",                        
    "strict": true,                           
    "noImplicitAny": true,                 
  },
  "exclude": ["node_modules", "tests"]
}
```
