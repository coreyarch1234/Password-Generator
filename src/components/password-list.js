import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { deletePassword } from '../actions/index';

import Password from './password';

class PasswordList extends Component {

    makeList() {
        return this.props.passwords.map((password, index) => {
            console.log('the return password');
            console.log(password);
            return (
                <div key={index}>

                    <Password
                        key={index}
                        password={password}
                        onDelete ={() =>{
                            this.props.deletePassword(index);
                        }}

                    />

                </div>
            )
        });
    }

    render() {
        return (
          <div>
            {this.makeList()}
          </div>
        );
    }
}

const styles = {

}

// export default PasswordList;
const mapStateToProps = (state) => {
    return {
        passwords: state.passwords
     }
}

const matchDispatchToProps = (dispatch) => {
    return bindActionCreators({
        deletePassword: deletePassword
    }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(PasswordList);
