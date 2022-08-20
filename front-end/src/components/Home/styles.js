import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({

    appBar: {
        borderRadius: 15,

    },

    appBarSearch: {
        borderRadius: 4,
        marginTop: '1rem',
        marginBottom: '1rem',
        display: 'flex',
        padding: '16px',
        flexDirection: 'vertical',
    },
    pagination: {
        borderRadius: 4,
        marginTop: '1rem',
        padding: '16px',



    },
    gridContainer: {

        [theme.breakpoints.down('xs-3')]: {
            flexDirection: 'column-reverse',
        },
        marginTop: '30px',
        marginBottom: '30px',

    },

    searchButton: {
        marginTop: '20px',
    }


}));