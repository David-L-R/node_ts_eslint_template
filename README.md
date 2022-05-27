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
> npm i prettier-eslint --save-dev #optional
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
> npm i @typescript-eslint/parser --save-dev 

# create a tsconfig.json
> npx tsc --init 

# convert TS files to JS files
> npm run build
```

```bash
# OR everything together 
> npm i eslint prettier prettier-eslint eslint-config-prettier eslint-plugin-prettier nodemon typescript ts-node @types/node @typescript-eslint/eslint-plugin  @typescript-eslint/parser --save-dev
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
	 "bracketSameLine": true,
	 "bracketSpacing": false,
	 "printWidth": 120,
	 "singleQuote": true,
	 "tabWidth": 2,
	 "useTabs": true
}
```

```json
// .eslintrc
{
	"extends": ["plugin:@typescript-eslint/recommended"],
	"parser": "@typescript-eslint/parser",
	"plugins": ["@typescript-eslint"],
	"rules": {}
}

```json
// .gitignore
node_modules
```

```


```json
// .eslintignore
node_modules
```

## Automation 
```
# commiting will format the code
> npx mrm@2 lint-staged
```	

## VSCode Extensions

### Install in vs-code

**ESLint:** Will integrate ESLint erros into the IDE as you make them!
https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint

**Prettier:** Will save your code every time you save the file! 
https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode
* If the code is not being formatted on-save, there is an error in the code that needs to be solved first!

### Choose formatter

After installing Prettier, you need to make sure the IDE uses it as the default formatter:

1. Open command the pallete:
Linux/Win10: `ctrl` + `shift` + `p`
Mac: `command` + `shift` + `p`

2. Type "document"

3. Choose "Format Document With..."

4. Choose Prettier :) 

<img width="726" alt="Screenshot 2022-05-27 at 11 15 08" src="https://user-images.githubusercontent.com/31222514/170669986-7db4cedd-2b85-4164-b6d9-92b65bc93207.png">

<img width="726" alt="Screenshot 2022-05-27 at 11 16 31" src="https://user-images.githubusercontent.com/31222514/170670902-3d00f06f-8036-4bac-b602-0f1454b2c45f.png">

Make sure prettier format the code after save:
1. Go to settings
1. Search "format on save"
1. Mark ✔ for "format on save" and ✔ for "foamrt on paste" (so when you paste a piece of code, it will be formatted automatically)

## Bonus: integrate ESLint into your GIT

Using Husky, we can integrate ESLint in our GIT process, so to block pushing code if it is not up to standards! 
https://github.com/okonet/lint-staged
