const { defineConfig } = require("@vue/cli-service");

const path = require("path");

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = defineConfig({
  configureWebpack: {
    resolve: {
      alias: {
        "@": resolve("src"),
      },
    },
  },
  transpileDependencies: true,
  pluginOptions: {
    windicss: {
      preflight: false,
    },
  },
});
