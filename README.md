# Lab-angular


#  Proyecto Angular con Pruebas Unitarias (Karma + Jasmine + Coverage)



Este proyecto implementa pruebas unitarias con Angular utilizando Jasmine y Karma. Además, se genera reporte de cobertura de código.



##  Requisitos



- Node.js (recomendado: v18.x o superior)

- npm (incluido con Node.js)

- Angular CLI (última versión estable)



---



##  Instalación completa desde 0



### Instalar Angular CLI (si aún no lo tienes)



```bash

npm install -g @angular/cli

```



###  Crear proyecto Angular



```bash

ng new proyecto-pruebas

```



- ¿Agregar enrutamiento? No

- ¿Qué formato de hojas de estilo desea utilizar? CSS



Entrar al proyecto:



```bash

cd proyecto-pruebas

```



---



## Instalar dependencias del proyecto



```bash

npm install

```



---



## 🔨 Instalar herramientas para pruebas (Jasmine + Karma)



Angular ya instala por defecto Jasmine y Karma, pero en caso de errores o para asegurar versiones:



```bash

npm install --save-dev jasmine-core karma karma-chrome-launcher karma-coverage karma-jasmine karma-jasmine-html-reporter

```



Si necesitas reinstalar Karma CLI:



```bash

npm install -g karma-cli

```



---



##  Ejecutar la aplicación



```bash

ng serve -o

```

Se abrirá en: `http://localhost:4200`



---



##  Ejecutar pruebas unitarias



```bash

ng test

```



Pruebas sin modo observador:



```bash

ng test --watch=false

```



Generar reporte de cobertura de código:



```bash

ng test --code-coverage

```



---



##  Visualizar cobertura en el navegador



### Instalar servidor HTTP simple



```bash

npm install -g http-server

```



Ejecutar servidor HTTP en carpeta del reporte:



```bash

http-server coverage/proyecto-pruebas

```



Acceder en el navegador:



```

http://localhost:8080

```



---



##  Estructura del Proyecto



```

src/app/

├── calculator.ts

├── calculator.spec.ts

├── contador/

├── saludo/

├── card/

├── advanced-card/

├── lista/

├── toggle/

```



---



##  Comandos resumen



```bash

npm install -g @angular/cli

ng new proyecto-pruebas

cd proyecto-pruebas

npm install

npm install -g karma-cli

npm install --save-dev jasmine-core karma karma-chrome-launcher karma-coverage karma-jasmine karma-jasmine-html-reporter

ng serve -o

ng test

ng test --code-coverage

npm install -g http-server

http-server coverage/proyecto-pruebas

```



---



##  Herramientas utilizadas



- Angular

- Jasmine

- Karma

- http-server

- Node.js / npm



---



##  Autor



Jairo Bonilla  

Universidad ESPE - 2025
