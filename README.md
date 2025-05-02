# 🛒 MI Tienda - E-commerce React

## ✨ Descripción
E-commerce moderno con catálogo por categorías (Ropa, Electrónica, Hogar), carrito de compras y checkout. Desarrollado con React y Firebase.

## 🚀 Funcionalidades clave
- 📦 **Catálogo organizado** por categorías
- 🛒 **Carrito interactivo** con ajuste de cantidades
- 💳 **Checkout seguro** con validación de datos
- ⚡ **Filtrado rápido** de productos

## 🖼️ Capturas destacadas

### 1. Página de Inicio
![Home](![image](https://github.com/user-attachments/assets/24fc3634-5c46-44f1-8d2e-a2cb75bb8797)

*Bienvenida y categorías principales*

### 2. Vista de Productos
![Productos](![image](https://github.com/user-attachments/assets/3d9a505e-55b6-43b0-8ffb-378e688f6607)

*Listado con precios y botón de detalles*

### 3. Carrito de Compras
![Carrito](![image](https://github.com/user-attachments/assets/f798223a-e3bd-4d1c-b09c-fb7bb632c74f)

*Resumen con subtotales y total*

## 🛠️ Tecnologías usadas
- **Frontend**: React + Vite
- **Estilos**: CSS Modules
- **Backend**: Firebase (Firestore)
- **Routing**: React Router
  🔥 Cómo probarlo
Clona el repositorio:
git clone https://github.com/Alex25-10/ProyectoFinalReact-Velez.git

Instala dependencias:
npm install

Inicia la app:
npm run dev

## Estructura Detallada de Componentes

```bash
src/
├── components/
│   ├── Cart/
│   │   ├── CartItem.jsx       # Item individual del carrito (↑/↓ cantidad)
│   │   ├── CartWidget.jsx     # Icono con contador
│   │   └── CheckoutForm.jsx   # Formulario de compra (nombre/email/tel)
│   │
│   ├── Item/
│   │   ├── ItemCount.jsx      # Selector de cantidad (con validación)
│   │   ├── ItemDetail.jsx     # Vista detallada de producto
│   │   ├── ItemList.jsx       # Listado de productos (cards)
│   │   └── ItemCategory.jsx   # Filtrado por categoría (Ropa/Electrónica/Hogar)
│   │
│   ├── Layout/
│   │   ├── Navbar.jsx         # Barra de navegación con categorías
│   │   └── Footer.jsx         # (Opcional) Pie de página
│   │
│   └── UI/
│       ├── Loader.jsx         # Spinner durante carga
│       └── ErrorMessage.jsx   # Mensajes de error/feedback
│
├── context/
│   └── CartContext.js         # Lógica global del carrito (add/remove/clear)
│
├── firebase/
│   ├── config.js              # Credenciales de Firebase
│   └── services.js            # Funciones de Firestore (getProducts, createOrder)
│
├── pages/
│   ├── Home.jsx               # Página inicial con banner promocional
│   ├── Category.jsx           # Vista filtrada por categoría
│   └── Checkout.jsx           # Resumen final + formulario
│
└── App.jsx                    # Configuración de rutas principales


