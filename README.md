# ¿Qué es Portfolio I+D?

Se trata del portfolio de proyectos del equipo interdisplinario de investigación que tiene la empresa de software Flock IT. El portfolio es una herramienta para comunicar las últimas investigaciones del equipo, los proyectos realizados para clientes comerciales o partners y las pruebas de concepto que se realizan con la finalidad de impulsar el conocimiento técnico y la innovación en el equipo. 

### Equipo

- Mariano Ortega - CTO, Innovation Manager, Information Technology Engineer.
- Matías Araujo - Ing. electrónico, I+D Analytics.
- Martín Kaen - Desarrollador de software, I+D Analytics.
- Eduardo Suyama - Ing. electrónico, I+D Analytics.
- Marilyn Botheatoz - Arquitecta, I+D Analytics.
- Francisco Sempé - Lic. en Ciencias de la Computación, I+D Analytics.
- Denis Hugo Perafan - Desarrollador de software, I+D Analytics.

### ¿Qué tipo de proyectos hacemos?

- Desarrollo de software
- Diseño de productos digitales
- IA
- Desarrollo de aplicaciones mobile
- IOT
- UX Research
- Testing
- Ciberseguridad
- Desarrollo de soluciones en blockchain
- Desarrollo de soluciones en Computing Cloud
- Sistemas de Gestión de Datos
- Automatización de Procesos Empresariales
- Soluciones en realidad aumentada (RA) y realidad virtual (VR)
- Desarrollo de Aplicaciones Web Progresivas (PWA)
- and more to come!

### Skills

react, nodejs, java, python, javascript, c++, unity, astro, nextjs, chatgpt, aws, nestjs, supabase, strapi, flutter, react native, flutterflow, figma, ia, blockchain, bezi, laravel, and many more…

---

### Run Portfolio I+D en local

- Clonar el repositorio:

```jsx
git clone https://github.com/meryboth/porfolioid.git
```

- Instalar dependencias:

```jsx
cd portfolioid
npm install
```

- Levantar el entorno:

```jsx
npm run dev
```

### Visualizando el Proyecto

Una vez que el servidor de desarrollo esté en funcionamiento, puedes visualizar el proyecto accediendo a la dirección URL proporcionada por el servidor. Por lo general, será **`http://localhost:3000`**.

---

# Notion como Content Manager

Esta aplicación web utiliza Notion como CMS consumiendo la API de Notion. La API de Notion es una herramienta poderosa que permite a los desarrolladores interactuar con los datos y el contenido almacenado en Notion desde sus propias aplicaciones. 

Dos aspectos importantes a tener en cuenta sobre la API de Notion:

### **RESTful API**

La API de Notion sigue el estilo arquitectónico REST (Representational State Transfer), lo que significa que utiliza métodos HTTP estándar (GET, POST, PUT, DELETE) para realizar operaciones sobre recursos, como páginas, bases de datos, bloques, etc.

### **Recursos y Endpoints**

La API de Notion permite interactuar con una variedad de recursos, incluyendo páginas, bases de datos, listas de tareas, archivos, comentarios, usuarios, etc. Cada recurso tiene su propio conjunto de endpoints para realizar operaciones CRUD (Crear, Leer, Actualizar, Borrar).

### Configuración de variables de entorno

Ejemplo de archivo .env para configurar las variables de entorno que vinculan el proyecto con la base de datos de notion:

- Secret Notion Key: es una key que se genera online en la plataforma de notion a partir de la generación de una nueva integración. Si deseas crear una nueva integración en tu plataforma de notion puedes hacerlo visitando el siguiente enlace: [My Notion Integrations](https://www.notion.so/my-integrations). La secret key es única para cada cuenta de notion y para cada integración.
- Secret Notion DataBase Id: es un ID único que se encuentra en cada base de datos de notion. Para conseguirlo hay que:

a) Colocar en público la page que contiene la base de datos

b) Una vez pública extrer el id de la url de la page, a modo de ejemplo, el id que prosigue luego de Page- es el que identifica a esa page en concreto y permite asociar tu proyecto a dicho contenido. 

```jsx
https://example.notion.site/Page-**a106d0eb96bb4efa8145ce647339eb1c**
```

c) Para llevar adelante la conexión con éxito es importante tener la integración con la secret key desde la plataforma de Notion. Para hacerlo es preciso ingresar a la page que queremos integrar, ir a Agregar Conexiones desde el Menu de la página y elegir Integraciones. Si la integración que creamos no aparece, podemos Administrar conexiones y elegirla desde la plataforma. 

[Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/2f538ce6-ba20-4f7c-a0f9-51b29ca6ae5a/fbc6c0de-8e84-4608-9cc8-6287131190aa/Untitled.png]()
![](https://imgur.com/a/wvdCGj1)

```jsx
# integration
SECRET_NOTION_KEY="SECRET EXAMPLE"
# database id
SECRET_NOTION_DATABASE_ID="ID EXAMPLE"
```

---

# ¿Cómo subir nuevos proyectos?

Para subir nuevos proyectos es preciso ir a la base de datos y clonar un proyecto existente en la misma y actualizar sus metadatos: [Proyectos de I+D](https://www.notion.so/ed7b6f1554ae4592a48a8cb89e02ad64?pvs=21). Es preciso hacer una clonación y no cargar un registro nuevo, ya que los datos que van a necesitarse en el proyecto tienen que estar completos y con un duplado de un proyecto anterior podemos asegurarnos de esto. 

### Información requerida de un proyecto:

- Title: Representa el nombre comercial del proyecto → string
- Tags: Representa las principales tecnologías del proyecto → array of strings
- Created: Es la fecha de creación y se autocompleta → Date
- Intro: Una breve descripción del proyecto → string
- Slug: representa la url del proyecto y se autocompleta → string

### Contenido de cada proyecto:

- Cover: Cada proyecto cuenta con una imagen de Cover que debe subirse como Portada en la page específica de cada proyecto. Esta Cover puede ser tanto una imagen alojada de forma local o una url. Se aconseja lo primero para optimizar su resolución. → string

El cuerpo de la page puede tener componentes de Notion que se van a ver renderizamos como componentes específicos de Astro, creados para representar visualmente cada bloque, y son los siguientes:

## Bloques Soportados:

- ✅ paragraph
- ✅ heading 1, 2, 3
- ✅ bulleted list
- ✅ numbered list
- ✅ toggle
- ✅ quote
- ✅ callout
- ✅ code
- ✅ image
- ✅ equation
- ✅ synced block
- ❌ divider
- ❌ file
- ❌ table
- ❌ table of contents
- ❌ todo
- ❌ video

### ¿Cómo lograr persistencia en las imágenes de cada proyecto?

La API de Notion habilita las urls de sus imágenes alojadas en S3 de AWS durante un periodo de una hora, lo que hace imposible lograr persistencia en las mismas una vez que subimos un proyecto y superamos este periodo de tiempo. 

Hay dos alternativas para lograr persistencia en las imágenes del proyecto:

1. Subir la imagen a notion y subirla a la ruta public/images **con el mismo nombre**. 
2. Subir la imagen a notion y luego correr el script que descarga las imágenes en el proyecto desde el editor de código. El script está comentado y se encuentra en cada una de las pages que hacen request de data desde notion. Un ejemplo del script:

```jsx
async function downloadImage(url, filepath) {
  try {
    const response = await fetch(url);
    const reader = response.body.getReader();
    const writer = fs.createWriteStream(filepath);

    await new Promise((resolve, reject) => {
      let pump = () =>
        reader.read().then(({ done, value }) => {
          if (done) {
            resolve();
            return;
          }
          writer.write(value);
          pump();
        });
      pump();
    });

    console.log(filepath.split("/")[3] + " was downloaded successfully.");
  } catch (error) {
    console.error("Error downloading image:", error);
  }
```
