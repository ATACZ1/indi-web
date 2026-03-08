module.exports = {
  theme: {
    extend: {
      colors: {
        brand: {
          light: '#F8FAFC', // Pozadí sekcí
          dark: '#0F172A', // Nadpisy
          muted: '#475569', // Běžný text
          primary: '#0D9488', // Hlavní tlačítka (Teal 600)
          hover: '#14B8A6', // Tlačítka po najetí (Teal 500)
        },
      },
      fontFamily: {
        // Inter pro běžný text (třída font-sans)
        sans: ['Inter', 'sans-serif'],
        // Plus Jakarta Sans pro nadpisy (třída font-display)
        display: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
    },
  },
};
