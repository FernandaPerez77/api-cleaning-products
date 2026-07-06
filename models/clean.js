const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true // Elimina espacios en blanco innecesarios al inicio y final
    },
    brand: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true // Ej: 'Desinfectantes', 'Detergentes', 'Accesorios'
    },
    size: {
        type: String, // Ej: '1 Litro', '500 ml', '5 Kg'
        required: true
    },
    price: {
        type: Number,
        required: true,
        min: 0 // Evita que el precio sea negativo
    },
    stock: {
        type: Number,
        default: 0,
        min: 0 // Evita que el stock sea negativo
    }
}, {
    timestamps: true // Opcional: Agrega automáticamente 'createdAt' y 'updatedAt'
});

// Exportamos el modelo como 'Product' (Producto)
module.exports = mongoose.model('Product', productSchema);