const path = require("path");

module.exports = function override(config, env) {
  config.resolve.alias = {
    ...config.resolve.alias,
    "@": path.resolve(__dirname, "src"),
    "@assets": path.resolve(__dirname, "src/assets"),
    "@components": path.resolve(__dirname, "src/components"),
    "@routes": path.resolve(__dirname, "src/routes"),
    "@containers": path.resolve(__dirname, "src/containers"),
    "@hooks": path.resolve(__dirname, "src/hooks"),
    "@types": path.resolve(__dirname, "src/@types"),
    "@constants": path.resolve(__dirname, "src/constants"),
    "@helpers": path.resolve(__dirname, "src/helpers"),
    "@interfaces": path.resolve(__dirname, "src/interfaces"),
    "@lib": path.resolve(__dirname, "src/lib"),
    "@pages": path.resolve(__dirname, "src/pages"),
    "@store": path.resolve(__dirname, "src/store"),
    "@styles": path.resolve(__dirname, "src/styles"),
  };

  return config;
};
