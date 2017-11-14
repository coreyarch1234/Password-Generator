import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Password from './password';

class PasswordList extends Component {

    makeList() {
        return this.props.passwords.map((password, index) => {
            return (
                <div key={index}>

                    <Password
                        key={index}
                        password={password}

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

export default PasswordList;
// const mapStateToProps = (state) => {
//     return {
//         passwords: state.passwords
//      }
// }
//
// const matchDispatchToProps = (dispatch) => {
//     return bindActionCreators({
//         generatePassword: generatePassword
//     }, dispatch);
// }
//
// export default connect(mapStateToProps, matchDispatchToProps)(PasswordList);
