# js-bistro

## 📌 Descripción

Librería de JavaScript ligera para **procesar pedidos hechos en un restaurante**, que permite gestionar de forma simple el flujo de órdenes, totales de ventas, promociones y reportes.

## ✨ Características

- Procesar información de pedidos ingresada como arrays.
- Calcular totales de cada pedido y el total de ventas diarias.
- Aplicar promociones según condiciones específicas (ej. postre gratis).
- Generar reportes de pedidos y ventas.
- Clasificar pedidos por monto (Bajo, Medio, Alto).
- Implementar funciones utilitarias (IVA, formateo de moneda, etc.).

## 🧱 Estructura del proyecto

```
js-bistro/
└── js-bistro.js   # Archivo principal del proyecto
```

## 🔧 Requisitos

- Ejecutable en **navegador** (consola) o en **Node.js**.
- Node.js >= 18 (recomendado).

## 🚀 Instalación

Clona el repositorio y entra en la carpeta del proyecto:

```bash
git clone https://github.com/devdavco/js-bistro.git
cd js-bistro
```

En **navegador**:

```html
<script src="./js-bistro.js"></script>
```

En **Node.js (CommonJS)**:

```js
const jsBistro = require('./js-bistro');
```

En **Node.js (ESM)**:

```js
import jsBistro from './js-bistro.js';
```

## 🧪 Uso básico / Ejemplos

```js
// Definir menú y pedidos
const menu = [
  { id: 1, nombre: "Pizza", categoria: "comida", precio: 20000 },
  { id: 2, nombre: "Hamburguesa", categoria: "comida", precio: 15000 },
  { id: 3, nombre: "Refresco", categoria: "bebida", precio: 5000 },
];

const pedido = ["Ana", 1, 3];

// Procesar pedido
const resultado = procesarPedido(pedido);
console.log(resultado);
// ["bebida", 1, 3, "Ana"]
```

### Casos de uso

- Registrar y procesar pedidos.
- Calcular totales de ventas.
- Aplicar promociones automáticas según condiciones.
- Mostrar reportes en consola.

## ⚙️ API

### `procesarPedido(pedido: Array): Array`

- **Parámetros**: `pedido` → array con cliente y lista de ids de platos.
- **Retorna**: array modificado con reglas de negocio (bebida inicial, nombre al final).

## 🧰 Scripts (npm)

```json
{
  "scripts": {
    "dev": "node js-bistro.js"
  }
}
```

## 🧷 Compatibilidad

- Navegadores modernos.
- Node.js >= 18.

## 🧪 Pruebas

Se recomienda probar el archivo directamente en consola (navegador o Node.js).

## 📦 Distribución

Entrega en un único archivo `js-bistro.js`. Puede ejecutarse en navegador o Node.js.

## 🗺️ Roadmap

- Mejorar modularidad.
- Agregar interfaz gráfica.
- Integración con base de datos.

## 🤝 Contribuir

1. Haz un **fork** del repo.
2. Crea una rama: `git checkout -b feat/mi-feature`.
3. Haz commit: `git commit -m "feat: añade mi-feature"`.
4. Sube la rama: `git push origin feat/mi-feature`.
5. Abre un **Pull Request**.

## 👥 Autores y contribuidores

- **David Corrales** ([@devdavco](https://github.com/devdavco))
- **JoseOtero15** ([@JoseOtero15](https://github.com/JoseOtero15))

## 📄 Licencia

MIT

---

### Changelog

- `v0.1.0` – Versión inicial basada en Trabajo Práctico Integrador.

### Agradecimientos

Proyecto académico para consolidar fundamentos de **JavaScript Básico**.
