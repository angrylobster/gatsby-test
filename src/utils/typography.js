import Typography from "typography";
import themeElkGlen from "typography-theme-elk-glen"; // need to add dependency
themeElkGlen.overrideThemeStyles = ({ rhythm }, options) => ({
    'h1': {
      marginBottom: rhythm(1/2),
      marginTop: rhythm(2),
    }
  })
  export default new Typography(themeElkGlen);