/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    tailwindcss: {},
    env: {
      OPENAI_API_KEY: process.env.OPENAI_API_KEY,
      NEXTAUTH_URL: process.env.NEXTAUTH_URL,
      GOOGLE_MAPS_API_KEY: process.env.GOOGLE_MAPS_API_KEY,
    },
  },
};

export default config;
