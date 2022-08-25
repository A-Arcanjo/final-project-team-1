import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    searchIcon: {
        color: '#ffa101',
    },
    colorText: {
        color: '#fff',
    },

    [theme.breakpoints.down('xs')]: {
        containerSearch: {
            width: '55%',
        },
    },

}));
