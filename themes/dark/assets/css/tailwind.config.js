module.exports = {
    content: ["./**/*.html", "./**/*.md"],
    theme: {
      extend: {}
    },
    variants: {},
    plugins: [require('daisyui')],
    daisyui: {
        themes: false,
        logs: false,
    },
  }