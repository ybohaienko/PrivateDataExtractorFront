module.exports = {
    'outputDir': 'target/dist',
    'assetsDir': 'static',
    'devServer': {
        'port': 8079,
        'proxy': {
            '/api': {
                'target': 'http://localhost:8080',
                'ws': true,
                'changeOrigin': true
            }
        }
    },
    'transpileDependencies': [
        'vuetify'
    ]
}
