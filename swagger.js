const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info: {
        title: 'Contacts API',
        description: 'Contacts API'
    },
    host: 'localhost:3000',
    schemes: ['https', 'http']
}

const outputFile = './swagger.json';
const endpiontsFiles = ['./routes/index.js'];

swaggerAutogen(outputFile, endpiontsFiles, doc);