# Node Configuration Workshop

We will discuss the configuration needed for node using: 
1. Typescript
1. ESLint
1. Prettier

## Learning Goals

## Installation

```bash
# create a new project
> npm init -y

# install all ESLint & Prettier dev-dependencies
> npm i eslint --save-dev
> npm i prettier --save-dev
> npm i eslint-config-prettier --save-dev
> npm i eslint-plugin-prettier --save-dev

# install 
> npm nodemon

# install typescript and node support
> npm i typescript --save-dev
> npm i ts-node --save-dev 

# install @types for all packages
> npm i @types/node --save-dev 
> npm i @typescript-eslint/eslint-plugin --save-dev 
> npm i @typescript-eslint/parser

# create a tsconfig.json
> npx tsc --init 

# commiting will format the code
> npx mrm@2 lint-staged

# convert TS files to JS files
> npm run build
```

```
# OR everything together 
> npm i eslint prettier eslint-config-prettier eslint-plugin-prettier node-ts typescript @types/node @typescript-eslint/eslint-plugin  @typescript-eslint/parser --save-dev
```

## Scripting

```json
// package.json

{
  "scripts": {
      "start": "nodemon index.ts"
      "build": "npx tsc"
<!--       "lint": "eslint . --ext .ts" -->
<!--       "prettier": "prettier --config .prettierrc 'src/**/*.ts' --write" -->
  }
}
```

## Configuration

We are going to configure ESLint, Prettier and Typescript using configuration files. 
Those files should be in the `root` folder:

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

// Feel free to check out other options as well!
```

```json
// .prettierrc
{
  "": ""
}
```

```json
// .eslintrc
{
  "": ""
}
```


```json
// .eslintignore
{
  "": ""
}
```


