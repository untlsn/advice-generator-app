module.exports = {
  extract: {
    include: ['**/*.{vue,css}'],
    exclude: ['node_modules', '.git'],
  },
  theme: {
    extend: {
      spacing: {
        header: '4rem',
        catalogs: '3rem',
      },
      colors: {
        gray: {
          dark: '#202632',
          normal: '#313a49',
        },
        neon: '#53FFAB',
        text: '#CFE2E8',
      },
    },
  },
};
