export const mfConfig = {
  name: "login",
  exposes: {
    './Login': './src/components/Login.js',
    './Register': './src/components/Register.js',
    './InfoTooltip': './src/components/InfoTooltip.js'
  },
  shared: ["react", "react-dom"],
};
