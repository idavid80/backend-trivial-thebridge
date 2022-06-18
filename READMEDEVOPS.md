# DevOps!


# Instalación de   Plugin de ESLint

ESLint es la herramienta predominante para la tarea de "limpiar" código javascript tanto en el servidor (node.js) como en el navegador.
```
npm install --save-dev eslint
```
## Configuración

```
npx eslint --init

```
Esto arrancará un asistente para configurar **ESLint** en nuestro proyecto, preguntándonos algunas cuestiones sobre el proyecto a revisar.

## Instalación de JEST
```
npm i --save-dev jest
```



## Fichero de configuración de ejemplo de ESLint** denominado `.eslintrc.js`

```

module.exports = {    
env: {      
	browser: true,        /* El objetivo del código es ejecutar en navegadores */      
	es2021: true          /* El código estará escrito en ECMAScript 2021 */    },    
extends: [      
	"eslint:recommended", /* Reglas marcadas con ✓ en eslint.org/docs/rules/ */      
	"standard"            /* Reglas del paquete eslint-config-standard */    ],    
	parserOptions: {
   ecmaVersion: 12,      /* Establece la versión de ECMAScript que se usará */      			   					   sourceType: "module"  /* Indica si se usan módulos ESM o solo scripts */    },    
      rules: {      
      "indent": ["error", 2],      
      "linebreak-style": ["error", "unix"],      
      "quotes": ["error", "double"],      
      "semi": ["error", "always"]    
      }
   }
```




## Revisión de errores.

```bash
npx eslint src/js/index.js
```

## Reparar errores con Autofix.
```
npx eslint --fix src/js/index.js

```
Corrige automáticamente todos los que puede (_no todos los errores son autocorregibles_) al guardar el fichero.