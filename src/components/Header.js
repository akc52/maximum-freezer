import React from "react"
import Logout from './Logout'
import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

const styles = {
  root: {
    flexGrow: 1,
  },
}

class Header extends React.Component {

  render() {
    return (
      <div>
        <AppBar position="static" color="default">
          <Toolbar>
            <Typography component="h1" variant="h1" gutterBottom>
            { this.props.company } Freezer Inventory
              { 
                // TO DO move login/logout
              }
            </Typography>
            <Logout setUser={this.props.setUser} />
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}

export default withStyles(styles)(Header)
