import React from 'react'
import Typography from '@material-ui/core/Typography'

const ItemListContainer = ( {greeting} ) => {
    return (
        <div>
            <Typography variant="h1" color="initial" align="center">
                {greeting}
            </Typography>
        </div>
    )
}

export default ItemListContainer