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
> npm i eslint --save-dev # linter (code analysis tool used to flag programming errors)
> npm i prettier --save-dev # opinionated code formatter
> npm i eslint-config-prettier --save-dev # Turns off all rules that are unnecessary or might conflict with Prettier.
> npm i eslint-plugin-prettier --save-dev # Runs Prettier as an ESLint rule and reports differences as individual ESLint issues.

# install 
> npm nodemon

# install typescript and node support
> npm i typescript --save-dev
> npm i ts-node --save-dev 

# install @types for all packages
> npm i @types/node --save-dev 
> npm i @typescript-eslint/eslint-plugin --save-dev 
> npm i @typescript-eslint/parser --save-dev 

# create a tsconfig.json
> npx tsc --init 

# convert TS files to JS files
> npm run build
```

```bash
# OR everything together 
> npm i eslint prettier eslint-config-prettier eslint-plugin-prettier nodemon typescript ts-node @types/node @typescript-eslint/eslint-plugin  @typescript-eslint/parser --save-dev
```

### Resources (read more)
- 
- 
- prettier-eslint https://github.com/prettier/prettier-eslint

## Scripting

```json
// package.json

{
  "scripts": {
	"start": "nodemon index.ts"
	"build": "npx tsc"
	"lint": "eslint . --ext .ts"
	"prettier": "prettier --config .prettierrc 'src/**/*.ts' --write"
  }
}
```

## Configuration

We are going to configure ESLint, Prettier and Typescript using configuration files. 
Those files should be in the `root` folder:

### tsconfig.json
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
Feel free to check out other options for ts-config as well!

### .prettierrc
```json

{
	 "bracketSameLine": true,
	 "bracketSpacing": false,
	 "printWidth": 120,
	 "singleQuote": true,
	 "tabWidth": 2,
	 "useTabs": true
}
```
Feel free to check out other options for prettier as well!

### .eslintrc
```json
{
	"extends": ["plugin:@typescript-eslint/recommended"],
	"parser": "@typescript-eslint/parser",
	"plugins": ["@typescript-eslint"],
	"rules": {}
}
```
Feel free to check out other options for eslint as well!

### .gitignore
```
node_modules
```
### .eslintignore
```
node_modules
```

## Automation 

```
# commiting will format the code
> npx mrm@2 lint-staged
```	

## Configure IDE (vs-code)

### Install Extension

**ESLint:** Will integrate ESLint erros into the IDE as you make them!
https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint

**Prettier:** Will save your code every time you save the file! 
https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode
* If the code is not being formatted on-save, there is an error in the code that needs to be solved first!

### Configure Extensions

Open setting.json and add
```json
{
 	"editor.defaultFormatter": "esbenp.prettier-vscode", // prettier as default!
	"editor.formatOnSave": true, // saving code will format it
 	"editor.formatOnPaste": true, // [optional]: pasting code will format it
	
	// Eslint
	"eslint.validate": ["javascript"],
	"editor.codeActionsOnSave": {
   	"source.fixAll.eslint": true
	},
 	
}
```

## Bonus

### Integrate ESLint into your GIT

Linting makes more sense when run before committing your code. By doing so you can ensure no errors go into the repository and enforce code style. But running a lint process on a whole project is slow, and linting results can be irrelevant. Ultimately you only want to lint files that will be committed.

https://github.com/okonet/lint-staged

Or, to keep it simple:
```bash
> npm i husky --save-dev
```

Add to `package.json`:
```json
{
  "husky": {
    "hooks": {
      "pre-commit": "yarn lint"
    }
  }
}
```

### Add Emmet


## Resources
- [typescript-eslint](https://github.com/typescript-eslint/typescript-eslint): Monorepo for all the tooling which enables ESLint to support TypeScript
- typescript-eslint: [official docs](https://typescript-eslint.io/)
- [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier): Turns off all rules that are unnecessary or might conflict with Prettier.
- [eslint-plugin-prettier](https://github.com/prettier/eslint-plugin-prettier): Runs Prettier as an ESLint rule and reports differences as individual ESLint issues.
