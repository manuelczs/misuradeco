import { createSystem, defaultConfig, defineConfig } from '@chakra-ui/react';

// Replace Chakra's global styles with the site's styles while retaining component defaults.
const { globalCss: defaultGlobalCss, ...baseConfig } = defaultConfig;

const config = defineConfig({
  "globalCss": {
    "*": {
      "boxSizing": "border-box",
      "margin": "0",
      "padding": "0"
    },
    "body": {
      "fontFamily": "body",
      "background": "{colors.site.background}",
      "color": "{colors.site.text}"
    }
  },
  "theme": {
    "tokens": {
      "colors": {
        "primary": {
          "50": {
            "value": "#F4F5EE"
          },
          "100": {
            "value": "#E5E8D8"
          },
          "200": {
            "value": "#CDD3B5"
          },
          "300": {
            "value": "#ADB98A"
          },
          "400": {
            "value": "#8D9D62"
          },
          "500": {
            "value": "#708238"
          },
          "600": {
            "value": "#5F7030"
          },
          "700": {
            "value": "#4D5B29"
          },
          "800": {
            "value": "#3E4925"
          },
          "900": {
            "value": "#343D21"
          }
        },
        "cream": {
          "value": "#F7F4EC"
        },
        "ivory": {
          "value": "#EFEBDD"
        },
        "sand": {
          "value": "#DDD4C2"
        },
        "beige": {
          "value": "#C8BBA5"
        },
        "taupe": {
          "value": "#9A8C78"
        },
        "accent-light": {
          "value": "#DDA080"
        },
        "accent": {
          "value": "#C66B3D"
        },
        "accent-dark": {
          "value": "#9D4F2D"
        },
        "brown-light": {
          "value": "#A38468"
        },
        "brown": {
          "value": "#6F5643"
        },
        "brown-dark": {
          "value": "#49382D"
        },
        "text": {
          "value": "#292B25"
        },
        "text-muted": {
          "value": "#686A60"
        },
        "text-light": {
          "value": "#8C8D83"
        },
        "text-inverse": {
          "value": "#F7F4EC"
        },
        "background": {
          "value": "#F7F4EC"
        },
        "background-alt": {
          "value": "#EFEBDD"
        },
        "surface": {
          "value": "#FFFFFF"
        },
        "surface-muted": {
          "value": "#E5E1D6"
        },
        "border": {
          "value": "#D8D3C6"
        },
        "border-dark": {
          "value": "#B8B1A3"
        },

        "site": {
          "background": {
            "value": "#272921"
          },
          "text": {
            "value": "#faf7ee"
          },
          "accent": {
            "value": "#d9bc8e"
          },
          "statusText": {
            "value": "#e6dac7"
          },
          "mutedText": {
            "value": "#d6d3ca"
          },
          "footerText": {
            "value": "#e0dfd7"
          },
          "footerBorder": {
            "value": "#ffffff30"
          },
          "overlayLeft": {
            "value": "rgba(22, 27, 23, .86)"
          },
          "overlayMiddle": {
            "value": "rgba(22, 27, 23, .68)"
          },
          "overlayRight": {
            "value": "rgba(22, 27, 23, .12)"
          },
          "overlayBottom": {
            "value": "rgba(22, 27, 23, .6)"
          },
          "overlayMobileLeft": {
            "value": "rgba(22, 27, 23, .85)"
          },
          "overlayMobileRight": {
            "value": "rgba(22, 27, 23, .45)"
          },
          "transparent": {
            "value": "transparent"
          }
        }
      },
      "fonts": {
        "body": {
          "value": "var(--font-montserrat), Arial, sans-serif"
        },
        "heading": {
          "value": "var(--font-montserrat), Arial, sans-serif"
        }
      }
    }
  }
});

export const system = createSystem(baseConfig, config);
