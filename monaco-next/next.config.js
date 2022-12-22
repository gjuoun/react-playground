const MonacoWebpackPlugin = require("monaco-editor-webpack-plugin");

module.exports = (phase, { defaultConfig }) => {
  /** @type {import('next').NextConfig} */
  const nextConfig = {
    reactStrictMode: true,
    webpack: (config, { isServer }) => {
      config.plugins.push[
        new MonacoWebpackPlugin({
          languages: [
            "json",
            "markdown",
            "css",
            "typescript",
            "javascript",
            "html",
            "graphql",
            "python",
            "scss",
            "yaml",
          ],
          filename: "static/[name].worker.js",
        })
      ];
      return config;
    },
    transpilePackages: ["monaco-editor"],
  };
  return nextConfig;
};
