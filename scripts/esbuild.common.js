const esbuild = require("esbuild");
const glob = require("glob");
const { nodeExternalsPlugin } = require("esbuild-node-externals");
const { dtsPlugin } = require("esbuild-plugin-d.ts");

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
    const files = glob.sync("{./src/**/!(*.test).ts, ./src/**/!(*.test).tsx}");

    esbuild
      .build({
        entryPoints: files,
        splitting,
        format,
        outdir: `dist/${format}`,
        treeShaking: true,
        minify: true,
        bundle: true,
        sourcemap: true,
        chunkNames: "__chunks__/[name]-[hash]",
        target: "es6",
        tsconfig: "./tsconfig.json",
        plugins: [
          nodeExternalsPlugin(),
          dtsPlugin({
            outDir: "./dist/types",
          }),
        ],
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
