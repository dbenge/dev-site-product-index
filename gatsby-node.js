const merge = require("webpack-merge")

exports.onCreateWebpackConfig = ({ stage, actions, getConfig }) => {
  function getOutput() {
    switch (stage) {
      case `develop`:
        return {
          filename: `api-assets/[id].js`,
        }
      case `build-javascript`:
        return {
          filename: `api-assets/[contenthash].js`,
          chunkFilename: `api-assets/[contenthash].js`,
        }
    }
  }
  actions.replaceWebpackConfig(merge(getConfig(), { output: getOutput() }))
}
