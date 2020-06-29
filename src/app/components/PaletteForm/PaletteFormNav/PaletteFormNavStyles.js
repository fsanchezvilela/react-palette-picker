import  { DRAWER }  from "app/constants";
import sizes from "app/styles/sizes";
const { WIDTH } = DRAWER;

const styles = (theme) => ({
    root: {
      display: 'flex',
    },
    hide:{
      display:'none',
    },
    appBar: {
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
        
      }),
      background:'white',
      color: "rgba(0,0,0,0.8)",
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: "center",
      height: '64px',
    },
    appBarShift: {
      width: `calc(100% - ${WIDTH}px)`,
      marginLeft: WIDTH,
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    menuButton: {
      marginLeft: 12,
      marginRight: 20,
    },
    navBtns: {
      marginRight: '1rem',
      "& a":{
        textDecoration: "none"
      },
      [sizes.down("xs")]:{
        marginRight:"0.5rem",
      }
    },
    button: {
      margin: '0 0.5rem',
      [sizes.down("xs")]:{
        margin:"0 0.2rem",
        padding:"0.3rem",
      }
    },
  });

export default styles;