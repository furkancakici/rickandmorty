module.exports = {
   darkMode: 'class',
   content: [
      './src/pages/**/*.{js,ts,jsx,tsx}',
      './src/components/**/*.{js,ts,jsx,tsx}',
      './src/containers/**/*.{js,ts,jsx,tsx}',
   ],
   theme: {
      extend: {},
   },
   daisyui: {
      themes: ['garden', 'forest'],
   },
   plugins: [
      require('daisyui'),
      require('tailwindcss-important'),
      require('tailwindcss-children'),
   ],
};
