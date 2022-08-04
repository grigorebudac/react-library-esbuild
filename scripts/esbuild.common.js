const esbuild = require("esbuild");
const glob = require("glob");
const { nodeExternalsPlugin } = require("esbuild-node-externals");

const buildTypes = {
  cjs: {
    splitting: false,
    format: "cjs",
  },
  esm: {
    splitting: true,
    format: "esm",
  },
};

module.exports = function (buildType = "esm") {
  const { format, splitting } = buildTypes[buildType];

  return function (customOptions = {}) {
    const files = glob.sync("{./src/**/*.tsx,./src/**/*.ts}");

    esbuild
      .build({
        entryPoints: files,
        splitting,
        format,
        outdir: `dist`,
        treeShaking: true,
        minify: true,
        bundle: true,
        sourcemap: true,
        chunkNames: "__chunks__/[name]-[hash]",
        target: ["es2015"],
        tsconfig: "./tsconfig.json",
        platform: "node",
        plugins: [nodeExternalsPlugin()],
        ...customOptions,
      })
      .then(() => {
        console.log(
          "\x1b[36m%s\x1b[0m",
          `[${new Date().toLocaleTimeString()}] build succeeded for ${format} types`
        );
      })
      .catch(() => process.exit(1));
  };
};