const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Simple Page</title>
            <style>
                body {
                    margin: 0;
                    height: 100vh;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    font-family: Arial, sans-serif;
                    background-color: #f5f5f5;
                }
                .text {
                    text-align: center;
                }
            </style>
        </head>
        <body>
            <div class="text">
                <h1>Assalam o Alaikum</h1>
                <p>from Muhammad Waqas</p>
                <p>Cloud Computing Section : v1</p>
                <p>CCP</p>
                
            </div>
        </body>
        </html>
    `);
});

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});

