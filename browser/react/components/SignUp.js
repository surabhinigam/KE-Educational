import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import getMuiTheme from 'material-ui/styles/getMuiTheme'
//import mui from 'mui';

//let ThemeManager = new mui.Styles.ThemeManager();
    
     let injectTapEventPlugin = require('react-tap-event-plugin');
     injectTapEventPlugin();

    //  let childContextTypes = {
    //     muiTheme: React.PropTypes.object
    // }

    // getChildContext() {
    //     return {
    //         muiTheme: getMuiTheme()
    //     }
    // }

/**
 * Dialog with action buttons. The actions are passed in as an array of React objects,
 * in this example [FlatButtons](/#/components/flat-button).
 *
 * You can also close this dialog by clicking outside the dialog, or with the 'Esc' key.
 */
export default class SignUp extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      open: this.props.open
    }
  }

  handleClose() {
    this.setState({open: false});
  };

  

  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={this.handleClose}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        keyboardFocused={true}
        onTouchTap={this.handleClose}
      />,
    ];

    return (
      <div>
        <Dialog
          title="Dialog With Actions"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          The actions in this window were passed in as an array of React objects.
        </Dialog>
      </div>
    );
  }
}
