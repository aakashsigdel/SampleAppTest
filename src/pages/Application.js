import React, {
  Component,
  StyleSheet,
  View
} from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import SignUp from './SignUp'
import { registerUser } from '../appState/actions/user'

// this is the component for navigation
class Application extends Component {
  render () {
    console.log(this.props)
    return (
      <View style={styles.container}>
        <SignUp
          registerUser={this.props.registerUser}
          isLoading={this.props.user.isLoading}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E2E2E2'
  }
})

const mapStateToProps = (state) => {
  return state
}

const mapDispatchToProps = (dispatch) => {
  return {
    registerUser: bindActionCreators(registerUser, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Application)
