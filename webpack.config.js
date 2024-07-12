module.exports = {
    // ... otras configuraciones
    module: {
        rules: [
            // ... otras reglas
            {
                test: /\.svg$/,
                use: [
                    {
                        loader: '@svgr/webpack',
                        options: {
                            throwIfNamespace: false, // Aquí está la clave para resolver el problema
                        },
                    },
                ],
            },
        ],
    },
};