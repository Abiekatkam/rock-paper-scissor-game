/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        blob_animation: "blob_keyframes 7s infinite",
        text_animation: "text_keyframes 3s infinite",
        loading_animation: "moveLeftRight 3s ease-in-out infinite",
        rotation_animation: "rotation 1s linear infinite",
      },
      keyframes: {
        blob_keyframes: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.1)",
          },
          "66%": {
            transform: "translate(20px, -20px) scale(0.9)",
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1)",
          },
        },

        text_keyframes: {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },

        moveLeftRight: {
          "0%": {
            transform: "translateX(calc(-100% + 10px))",
          },

          "50%": {
            transform: "translateX(calc(200px - 10px))",
          },

          "100%": {
            transform: "translateX(calc(-100% + 10px))",
          },
        },

        rotation: {
          "0%": {
            transform: "rotate(0deg)",
          },

          "100%": {
            transform: "rotate(360deg)",
          },
        },
      },
    },
  },
  plugins: [],
};
