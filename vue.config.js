module.exports = {
  devServer: {
    proxy: "https://jsonplaceholder.typicode.com/"
  },
  transpileDependencies: [
    'vuetify'
  ]
}
