import Flubber from "./Flubber";

export default {
  npm_name: "@kissmybutton/motorcortex-flubber",
  incidents: [
    {
      exportable: Flubber,
      name: "Flubber",
      attributesValidationRules: {
        animatedAttrs: {
          type: "object",
          props: {
            d: {
              type: "any"
            }
          }
        }
      }
    }
  ],
};
