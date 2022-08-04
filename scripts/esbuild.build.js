const executeBuildCommand = require("./esbuild.common");

const cjsBuild = executeBuildCommand("cjs");
const esmBuild = executeBuildCommand("esm");

cjsBuild();
esmBuild();
