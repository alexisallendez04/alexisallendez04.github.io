# 📁 Estructura de Demos

Organiza cada sitio web en su propia carpeta dentro de `demos/`.

## 📂 Estructura recomendada:

```
demos/
├── mar-mejia/
│   ├── index.html
│   ├── styles.css
│   ├── script.js
│   └── (otros archivos del sitio)
├── mili-castineira/
│   ├── index.html
│   └── (archivos del sitio)
├── cristina/
│   ├── index.html
│   └── (archivos del sitio)
├── ana-garcia/
│   ├── index.html
│   └── (archivos del sitio)
└── laura-martinez/
    ├── index.html
    └── (archivos del sitio)
```

## 🔗 Cómo actualizar las rutas:

1. Mueve cada sitio a su carpeta dentro de `demos/`
2. Asegúrate de que cada carpeta tenga un `index.html`
3. Las rutas en `index.js` ya están configuradas como:
   - `demos/mar-mejia/index.html`
   - `demos/mili-castineira/index.html`
   - etc.

## 📝 Notas:

- Si el nombre de tu carpeta es diferente, actualiza la ruta en `index.js`
- Cada sitio debe tener su propio `index.html` como archivo principal
- Los botones "Ver sitio" en el portafolio apuntarán automáticamente a estas rutas

