import React, {PropTypes} from 'react';
import TextField from 'material-ui/TextField';

class LoginForm extends React.Component {
    render() {
        return <div>
            <TextField hintText="Username"/><br/>
            <br/>
            <TextField hintText="Password"/>
            <button onClick={this.props.onClick}>Log in</button>
        </div>
    }
}

export default LoginForm;
