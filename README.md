# Node Configuration Workshop

We will discuss the configuration needed for node using: 
1. Typescript
1. ESLint
1. Prettier

## Learning Goals

## Steps

```bash
# create a new project
> npm init -y

# install all dev-dependencies 
> npm i --save-dev typescript
> npm i --save-dev ts-node 
> npm i --save-dev @types/node

# will create a tsconfig.json
> npx tsc --init 

# when you want to convert TS to JS
> npm run build
```

```json
// package.json

{
  "scripts": {
      "build": "npx tsc"
  }
}
```

```json
// tsconfig.json
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
