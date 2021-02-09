const path = require("path")

module.exports = {
  webpack: (config) => {
    config.resolve.alias.component = path.join(__dirname, "src/component")
    config.resolve.alias.config = path.join(__dirname, "src/config")
    config.resolve.alias.utils = path.join(__dirname, "src/utils")
    config.resolve.alias.styles = path.join(__dirname, "src/styles")
    config.resolve.alias.section = path.join(__dirname, "src/section")
    config.resolve.alias.context = path.join(__dirname, "src/context")
    config.resolve.alias.hooks = path.join(__dirname, "src/hooks")
    return config
  },
}
