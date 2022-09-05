import { makeStyles } from '@material-ui/core/styles'; //import not as default import but ad a named import with {}
import { deepPurple } from '@material-ui/core/colors';

//arrow function will return an Object
export default makeStyles((theme) => ({
    container: {
        margin: '0'
    },
    mainContainer: {
        borderRadius: 15,
        margin: '30px 0',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px 50px',
    },
    heading: {
      display: "none",
    },
    userName: {
      display: "none",
    },
    image: {
      marginLeft: "5px",
    },
    toolbar: {
      display: "flex",
      justifyContent: "flex-end",
      width: "160px",
    },
 

  actionDiv: {
    textAlign: "center",
  },
}));
