import React from 'react'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'

const EmptyProducts = () => {

  return (
    <>
      <Paper>
        <Typography component="h2" variant="h2" gutterBottom>
          Inventory List is empty
        </Typography>
      </Paper>
    </>
  )
}

export default EmptyProducts