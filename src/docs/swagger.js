const swaggerJSDoc = require('swagger-jsdoc');

const swaggerDefinition = {
    openapi: '3.0.0',
    info: {
        title: 'Cleaning API',
        version: '1.0.0',
        description: 'API de productos de limpieza y usuarios'
    },
    servers: [
        {
            url: 'http://localhost:5100'
        }
    ]
};

const options = {
    swaggerDefinition,
    apis: ['./src/routes/*.js']
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;