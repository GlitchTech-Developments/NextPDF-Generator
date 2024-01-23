/** @type {import('prettier').Config & import('prettier-plugin-tailwindcss').PluginOptions} */
const config = {
  // General options
  printWidth: 80,
  tabWidth: 4,
  trailingComma: "all",
  singleQuote: true,
  semi: true,

  // TailwindCSS plugin options
  tailwindAttributes: ["className", "class"],
  tailwindFunctions: ["tw", "clsx", "cn"],
  tailwindConfig: "./tailwind.config.ts",

  // Plugins
  plugins: [
    "@trivago/prettier-plugin-sort-imports",
    "prettier-plugin-tailwindcss",
  ],
};

export default config;
