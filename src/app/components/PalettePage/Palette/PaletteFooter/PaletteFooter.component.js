import React from 'react'
import { withStyles } from '@material-ui/styles';
import styles from "./PaletteFooterStyles";

function PaletteFooter(props) {
  const { emoji,paletteName,classes } = props;
  return (
    <footer className={classes.PaletteFooter}>
      { paletteName }
      <span className={classes.Emoji}>{ emoji }</span>
    </footer>
  )
}

export default withStyles(styles)(PaletteFooter);