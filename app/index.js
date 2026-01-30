const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Secure Pipeline</title>
            <style>
                body {
                    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                    background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
                    color: white;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 100vh;
                    margin: 0;
                }
                .container {
                    text-align: center;
                    background: rgba(255, 255, 255, 0.1);
                    padding: 3rem;
                    border-radius: 15px;
                    box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.3);
                    backdrop-filter: blur(10px);
                    border: 1px solid rgba(255, 255, 255, 0.18);
                }
                h1 {
                    font-size: 2.5rem;
                    margin-bottom: 0.5rem;
                }
                h2 {
                    font-weight: 300;
                    color: #a2c2e8;
                    letter-spacing: 2px;
                    text-transform: uppercase;
                }
                .badge {
                    display: inline-block;
                    margin-top: 20px;
                    padding: 10px 20px;
                    background: #00d4ff;
                    color: #000;
                    border-radius: 50px;
                    font-weight: bold;
                }
            </style>
        </head>
        <body>
            <div class="container">
                <h1>Assalam o alaikum</h1>
                <p>from Muhammad Waqas</p>
                <div class="badge">Secure Pipeline</div>
                <h2>Cloud Computing</h2>
            </div>
        </body>
        </html>
    `);
});

app.listen(3000, () => console.log('Server is running at http://localhost:3000'));
