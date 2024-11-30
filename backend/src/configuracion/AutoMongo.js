const mongoose = require("mongoose");
const Categorias = require("../modelos/categoria"); 
const Productos = require("../modelos/producto"); 

const datosMongo = async () => {
  // Verificar si ya existen categorías
  const contarCategorias = await Categorias.countDocuments();
  if (contarCategorias === 0) {
    // Insertar categorías predeterminadas
    const categorias = await Categorias.insertMany([
      {
        nombre: "Tortas",
        descripcion: "Deliciosas tortas para cada ocasión",
      },
      {
        nombre: "Postres",
        descripcion: "Postres irresistibles para cualquier momento"
    },
    {
        nombre: "Galletería",
        descripcion: "Galletas artesanales y llenas de sabor"
    },
    {
        nombre: "Panadería",
        descripcion: "Pan fresco y variado todos los días"
    }
      // Añade más categorías según sea necesario
    ]);
    console.log("   Categorías iniciales insertadas");

    // Insertar productos usando los IDs de las categorías insertadas
    await Productos.insertMany([
        {
            nombre: "Torta Red Velvet",
            descripcion: "Torta de textura húmeda color rojo vinotinto con chocolate en polvo, crema elaborada con queso y crema de leche para su relleno y cubierta y decorada con miga de la misma torta.",
            precio: 75000,
            imagenUrl: "./media/torta-RedVelvet.jpg",
            stock: 10,
            categoria: categorias[0]._id
        },
        {
            nombre: "Torta Vainilla – Durazno",
            descripcion: "Bizcocho de vainilla con firme textura cubierto y relleno de crema natural y trozos de duraznos",
            precio: 68000,
            imagenUrl: "./media/torta-VainillaDurazno.webp",
            stock: 15,
            categoria: categorias[0]._id
        },
        {
            nombre: "Torta Florida",
            descripcion: "Bizcochuelo artesanal de vainilla relleno con una capa de salsa de ciruelas y otra de duraznos; cubierta en crema y miga de galleta. Decorada con variedad de frutas tropicales.",
            "precio": 80000,
            imagenUrl: "./media/torta-Florida.webp",
            stock: 8,
            categoria: categorias[0]._id
        },
        {
            "nombre": "Torta Villamora",
            "descripcion": "Pan de vainilla con blueberrys ligeramente humectado con jarabe de limón, relleno con mermelada de frutos rojos y betún de vainilla, decorado con mermelada de frutos rojos, betún de vainilla, blueberrys, zarzamoras y fresa.",
            "precio": 86000,
            "imagenUrl": "./media/torta-Villamora.jpg",
            "stock": 5,
            "categoria": categorias[0]._id
        },
        {
            "nombre": "Mousse de fresa",
            "descripcion": "Delicioso cheesecake tipo americano, combinado con la artesanal jalea de fresa.",
            "precio": 70000,
            "imagenUrl": "./media/postre-MousseDeFresa.png",
            "stock": 20,
            "categoria": categorias[1]._id
        },
        {
            "nombre": "Pasión de macadamia",
            "descripcion": "Tarta con galleta crocante con almendra y granola, rellena de mousse de macadamia caramelizada con Baileys.",
            "precio": 72000,
            "imagenUrl": "./media/postre-PasionDeMacadamia.jpg",
            "stock": 15,
            "categoria": categorias[1]._id
        },
        {
            "nombre": "Postre de Tiramisú",
            "descripcion": "Postre italiano elaborado con bizcocho de soletilla empapado de café, doble capa de queso Mascarpone y una delicada capa de cocoa en su cobertura.",
            "precio": 75000,
            "imagenUrl": "./media/postre-Tiramisu.png",
            "stock": 10,
            "categoria": categorias[1]._id
        },
        {
            "nombre": "Cremoso de Coco",
            "descripcion": "Postre semifrío, base de bizcochuelo blanco mojado con jarabe vainilla, cremoso con sabor a coco y trozos de coco tostado.",
            "precio": 68000,
            "imagenUrl": "./media/postre-CremosoDeCoco.jpg",
            "stock": 12,
            "categoria": categorias[1]._id
        },
        {
            "nombre": "Galleta Alfajor",
            "descripcion": "Delicioso alfajor relleno de arequipe y decorado con coco.",
            "precio": 7500,
            "imagenUrl": "./media/galleta-Alfajor.jpg",
            "stock": 30,
            "categoria": categorias[2]._id
        },
        {
            "nombre": "Estuche trufas",
            "descripcion": "Bolitas de torta con relleno de coco, maní, frutas cristalizadas y vino; cubiertas de chocolate blanco y chocolate oscuro.",
            "precio": 24000,
            "imagenUrl": "./media/galleta-EstucheTrufas.png",
            "stock": 20,
            "categoria": categorias[2]._id
        },
        {
            "nombre": "Corazones de Canela",
            "descripcion": "Deliciosos corazones de canela en hojaldre.",
            "precio": 2000,
            "imagenUrl": "./media/panaderia-CorazonesDeCanela.webp",
            "stock": 50,
            "categoria": categorias[3]._id
        },
        {
            "nombre": "Rollo de Canela",
            "descripcion": "Producto semihojaldrado en forma de rollo con sabor a canela.",
            "precio": 5000,
            "imagenUrl": "./media/panaderia-RolloDeCanela.jpg",
            "stock": 40,
            "categoria": categorias[3]._id
        },
        {
            "nombre": "Pan Trenza Chocolate",
            "descripcion": "Pan trenza relleno de chocolate y decorado con chips de chocolate.",
            "precio": 15500,
            "imagenUrl": "./media/panaderia-PanTrenzaChocolate.jpg",
            "stock": 25,
            "categoria": categorias[3]._id
        }
      // Añade más productos según sea necesario
    ]);
    console.log("   Productos iniciales insertados");
  } else {
    console.log("   Categorías ya existen");
    console.log("   No se insertarán productos nuevos");
  }
};

module.exports = datosMongo