
import { alpha } from "@mui/material/styles";

const createGradient = (color1, color2) => {
  return `linear-gradient(to bottom, $(color1), $(color2))`;
};
//setup colors
const PRIMARY = {
  lighter: "#97C1FC",
  light: "#7DACFA",
  main: "#538BF7",
  dark: "#3C6BD4",
  darker: "#294EB1",
};
const SECONDARY = {
  lighter: "#D6E4FF",
  light: "#84A9FF",
  main: "#3366FF",
  dark: "#1939B7",
  darker: "#091A7A",
};
const INFO = {
  lighter: "#9FDCFE",
  light: "#86CCFD",
  main: "#5FB3FC",
  dark: "#458CD8",
  darker: "#2F69B5",
};
const SUCCESS = {
  lighter: "#89EC86",
  light: "#64D96A",
  main: "#36C14B",
  dark: "#27A546",
  darker: "#1B8A40",
};
const WARNING = {
  lighter: "#FFD898",
  light: "#FFC97E",
  main: "#FFAF54",
  dark: "#DB8A3D",
  darker: "#B7682A",
};
const ERROR = {
  lighter: "#FF9F8B",
  light: "#FF7B6F",
  main: "#FF3F3F",
  dark: "#DB2E3D",
  darker: "#BF1F3A",
};
const GREY = {
  0: "#FFFFFF",
  100: "#919EAB",
  200: "#E7F1F6",
  300: "#DODDE5",
  400: "#B5C2CC",
  500: "#919EAB",
  600: "#697C93",
  700: "#495D7B",
  800: "#2E4063",
  900: "#1B2C52",
  500_8: alpha("#919EAB", 0.08),
  500_12: alpha("#919EAB", 0.12),
  500_16: alpha("#919EAB", 0.16),
  500_24: alpha("#919EAB", 0.24),
  500_32: alpha("#919EAB", 0.32),
  500_48: alpha("#919EAB", 0.48),
  500_56: alpha("#919EAB", 0.56),
  500_80: alpha("#919EAB", 0.8),
};

const GRADIENTS = {
  primary: createGradient(PRIMARY.light, PRIMARY.main),
  secondary: createGradient(PRIMARY.light, PRIMARY.main),
  info: createGradient(PRIMARY.light, PRIMARY.main),
  success: createGradient(PRIMARY.light, PRIMARY.main),
  warning: createGradient(PRIMARY.light, PRIMARY.main),
  error: createGradient(PRIMARY.light, PRIMARY.main),
};

const CHART_COLORS = {
  violet: ["#826AF9", "#9E86FF", "#D0AEFF", "#F7D2FF"],
  blue: ["#2D99FF", "#83CFFF", "#A5F3FF", "#CCFAFF"],
  green: ["#2CD9C5", "#60F1C8", "#A4F7CC", "#C0F2DC"],
  yellow: ["#FFE700", "#FFEF5A", "#FFF7AE", "#FFF3D6"],
  red: ["#FF6C40", "#FF8F6D", "#FFBD98", "#FFF2D4"],
};

const COMMON = {
  common: { black: "#000", white: "#fff" },
  primary: { ...PRIMARY, contrastText: "#fff" },
  secondary: { ...SECONDARY, contrastText: "#fff" },
  info: { ...INFO, contrastText: "#fff" },
  success: { ...SUCCESS, contrastText: GREY[800] },
  warning: { ...WARNING, contrastText: GREY[800] },
  error: { ...ERROR, contrastText: "#fff" },
  grey: GREY,
  gradients: GRADIENTS,
  chart: CHART_COLORS,
  divider: GREY[500_24],
  action: {
    hover: GREY[500_8],
    selected: GREY[500_16],
    disabled: GREY[500_80],
    disabledBackground: GREY[500_24],
    focus: GREY[500_24],
    hoverOpacity: 0.08,
    disabledOpacity: 0.48,
  },
};

const palette = {
  light: {
    ...COMMON,
    mode: "light",
    text: { primary: GREY[800], secondary: GREY[600], disabled: GREY[500], button: "#ffffff" },
    background: { paper: "#fff", default: "#fff", neutral: GREY[200], button: "#000000" },
    action: { active: GREY[600], ...COMMON.action },
  },
  dark: {
    ...COMMON,
    mode: "dark",
    text: { primary: "#fff", secondary: GREY[500], disabled: GREY[600], button: "#000000" },
    background: { paper: "#fff", default: GREY[900], neutral: GREY[500_16], button: "#ffffff" },
    action: { active: GREY[500], ...COMMON.action },
  },
};
export default palette;
