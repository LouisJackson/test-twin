module.exports = {
  theme: {
    extend: {
      colors: {
        electric: "#db00ff",
        ribbon: "#0047ff",
      },
    },
  },
  plugins: [
    function ({ addComponents, theme }) {
      const breakpoints = theme("screens");
      const firstBp = Object.keys(breakpoints)[0];
      const rootVariables = [];

      Object.keys(breakpoints).forEach((bp) => {
        let styles = {
          ":root": {
            "--breakpoint": `${JSON.stringify(bp + "")}`,
          },
        };

        if (bp === firstBp) {
          styles[":root"] = {
            ...styles[":root"],
          };
          rootVariables.push({
            ...styles,
          });
        } else {
          rootVariables.push({
            [`@screen ${bp}`]: {
              ...styles,
            },
          });
        }
      });

      console.log(rootVariables);

      addComponents(rootVariables);
    },
  ],
};
