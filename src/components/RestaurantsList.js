import React from 'react'

import {
    // Container,
    Grid,
    // makeStyles,
    // useTheme,
} from '@material-ui/core'

// const useStyles = makeStyles((theme) => ({
//     root: {
//         // display: 'flex',
//         width: '90%'
//     },
//     list: {
//         display: 'flex'
//     }
// }))


const RestaurantsList = ({ children }) => {
    // const classes = useStyles()

    return (
        <Grid container spacing={2}>
            {children}
        </Grid>
    )
}

export default RestaurantsList