const path = require("path");

module.exports = {
  mode: "development",
  devtool: false,
//   entry: {
//     main: "./src/index.js",
//     foo: { import: "./src/foo.js", dependOn: "main" },
//   },
  entry: {
    main: { import: "./src/index.js", runtime: "common-runtime" },
    foo: { import: "./src/foo.js", runtime: "common-runtime" },
  },
  output: {
    clean: true,
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
  },
};
