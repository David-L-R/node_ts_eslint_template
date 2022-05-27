# Node Configuration Workshop

We will discuss the configuration needed for node using: 
1. Typescript
1. ESLint
1. Prettier

## Learning Goals

By the end of this tutorial, you will be able to
- Initiate a Typescript project
- Add relevant scripts
- Configure linters for the project
- Configure formatting for the project
- Extend additional rules, if you want

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
> npm nodemon #nodemon is a tool that helps develop Node.js based applications by automatically restarting the node application when file changes in the directory are detected.

# install typescript and node support
> npm i typescript --save-dev
> npm i ts-node --save-dev 

# install @types for all packages
> npm i @types/node --save-dev 
> npm i @typescript-eslint/eslint-plugin --save-dev 
> npm i @typescript-eslint/parser --save-dev 

# convert TS files to JS files
> npm run build
```

```bash
# OR everything together 
> npm i eslint prettier eslint-config-prettier eslint-plugin-prettier nodemon typescript ts-node @types/node @typescript-eslint/eslint-plugin  @typescript-eslint/parser --save-dev
```

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

Don't create `tsconfig.json` by yourself! instead use this command:
```
# create a tsconfig.json
> npx tsc --init 
```
Now, inside `tsconfig.json`, don't copy paste the following code, but look up those keys, and make sure they are uncommented and equal in value to the following keys:

For example, make sure that the key `target` is equal to `es5`. 


### tsconfig.json
```json
{
	"compilerOptions": {
		"target": "es5", /* Set the JavaScript language version for emitted JavaScript and include compatible library declarations. */,           
		"lib": ["ES2018", "DOM"], /* Specify a set of bundled library declaration files that describe the target runtime environment. */,

		"module": "commonjs", /* Specify what module code is generated. */                     
		"allowJs": true /* Allow JavaScript files to be a part of your program. Use the 'checkJS' option to get errors from these files. */,
		"outDir": "./build", /* Specify an output folder for all emitted files. */,                  
		"esModuleInterop": true /* Emit additional JavaScript to ease support for importing CommonJS modules. This enables 'allowSyntheticDefaultImports' for type compatibility. */,
		"forceConsistentCasingInFileNames": true /* Ensure that casing is correct in imports. */,


		"strict": true /* Enable all strict type-checking options. */,
		"noImplicitAny": true /* Enable error reporting for expressions and declarations with an implied 'any' type. */,
		"strictNullChecks": true /* When type checking, take into account 'null' and 'undefined'. */,            
		
		"skipDefaultLibCheck": true /* Skip type checking .d.ts files that are included with TypeScript. */,
		"skipLibCheck": true /* Skip type checking all .d.ts files. */
	},
	"exclude": ["node_modules", "tests"]
}
```
Feel free to check out other options for ts-config as well!

### .prettierrc

Create a `.prettierrc` file inside `root` and copy the following code into the empty file:
```json
{
	"printWidth": 120,
	"singleQuote": true,
	"tabWidth": 2,
	"useTabs": true,
	"semi": false,
	"trailingComma": "es5"
}
```
Feel free to check out other options for prettier as well!

### .eslintrc

Create a `.eslintrc` file inside `root` and copy the following code into the empty file:
```json
{
	"extends": [
		"plugin:@typescript-eslint/recommended",
		"prettier",
		"eslint:recommended",
		"plugin:@typescript-eslint/recommended"
	],
	"parser": "@typescript-eslint/parser",
	"plugins": ["@typescript-eslint", "prettier"],
	"rules": {
		"prettier/prettier": 2, // Means error,
		"no-console": 1,
		"no-var": 2
	},
	"parserOptions": {
		"ecmaVersion": 2018,
		"sourceType": "module"
	},
	"env": {
		"es6": true
	}
}
```
Feel free to check out other options for eslint as well!

### .gitignore

Create a `.gitignore` file inside `root` and copy the following code into the empty file:

```
node_modules
```
### .eslintignore

Create a `.eslintignore` file inside `root` and copy the following code into the empty file:

```
node_modules
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

Or, to keep it simple ([read more](https://gist.github.com/silver-xu/1dcceaa14c4f0253d9637d4811948437#husky)):
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

## Resources
- [Typescript](https://www.typescriptlang.org/): TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.
- [typescript-eslint](https://github.com/typescript-eslint/typescript-eslint): Monorepo for all the tooling which enables ESLint to support TypeScript
- typescript-eslint: [official docs](https://typescript-eslint.io/)
- [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier): Turns off all rules that are unnecessary or might conflict with Prettier.
- [eslint-plugin-prettier](https://github.com/prettier/eslint-plugin-prettier): Runs Prettier as an ESLint rule and reports differences as individual ESLint issues.
- [nodemon](https://www.npmjs.com/package/nodemon): nodemon is a tool that helps develop Node.js based applications by automatically restarting the node application when file changes in the directory are detected.
