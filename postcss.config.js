module.exports = {
  plugins: [
    require("autoprefixer"),
    require("postcss-preset-env"),
    require("postcss-assets"),
    ...(process.env.JEKYLL_ENV == "production"
      ? [require("cssnano")({ preset: "default" })]
      : [])
  ]
};
