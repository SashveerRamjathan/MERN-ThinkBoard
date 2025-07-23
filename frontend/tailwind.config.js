import daisyui from "daisyui";

/**
 * Tailwind CSS configuration file.
 *
 * @module tailwind.config
 * @property {string[]} content - Array of file paths to scan for class names.
 * @property {object} theme - Theme configuration object.
 * @property {object} theme.extend - Object to extend default theme settings.
 * @property {Array} plugins - Array of Tailwind CSS plugins to use.
 * @property {object} daisyui - DaisyUI plugin configuration.
 * @property {string[]} daisyui.themes - Array of DaisyUI themes to enable.
 */

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [daisyui],
  daisyui: {
    themes: ["forest"],
  },
};
