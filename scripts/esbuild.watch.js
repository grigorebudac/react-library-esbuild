const executeBuildCommand = require("./esbuild.common");

executeBuildCommand()({
  watch: {
    onRebuild(error) {
      if (error) {
        console.error("Watch build failed:", error);
      } else {
        console.log(
          "\x1b[36m%s\x1b[0m",
          `[${new Date().toLocaleTimeString()}] rebuild succeeded`
        );
      }
    },
  },
});
