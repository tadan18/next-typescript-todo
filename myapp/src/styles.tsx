import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

export const TitleStyles = makeStyles((theme: Theme) => 
  createStyles({
    title: {
      position: "relative",
      display: "inline-block",
      textDecoration: "none",
      cursor: "pointer",
      "&:after": {
        position: "absolute",
        bottom: 2,
        left: 0,
        content: "''",
        width: "100%",
        height: 2,
        background: "#333",
        opacity: 0,
        visibility: "hidden",
        transition: ".3s",
      },
      "&:hover::after": {
        bottom: -4,
        opacity: 1,
        visibility: "visible",
      }
    }
  })
)