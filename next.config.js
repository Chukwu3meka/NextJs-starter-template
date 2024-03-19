/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: false,
  modularizeImports: {
    "@mui/material": { transform: "@mui/material/{{ member }}" },
    "@mui/icons-material": { transform: "@mui/icons-material/{{ member }}" },
  },

  env: {
    BASE_URL: process.env.NODE_ENV === "production" ? "https://soccermass.com" : "http://localhost:3002",
  },
};

module.exports = nextConfig;
