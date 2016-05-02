import React, { Component, View } from 'react-native'
import ScrollableTabView from 'react-native-scrollable-tab-view'
import SignUpRegular from './SignUpRegular'
import SignUpSocial from './SignUpSocial'
import Header from '../components/Header'
import Validation from '../utility'

const validation = new Validation()
export default class SignUp extends Component {
  constructor () {
    super()
    this.state = {
      Username: '',
      Password: '',
      confirmPassword: '',
      Mobile: '',
      Email: '',
      Fname: '',
      Lname: '',
      CountryId: +974
    }
  }

  setInput (type) {
    return (value) => {
      this.setState({
        [type]: value
      })
    }
  }

  setFirstName (Fname) {
    this.setState({ Fname })
  }

  setLastName (Lname) {
    this.setState({ Lname })
  }

  _validate () {
    const emailValidation = validation.email(this.state.Email)
    const usernameValidation = validation.username(this.state.Username)
    const mobileValidation = validation.mobile(this.state.Mobile)
    const passwordValidation = validation.password(this.state.Password)
    const confirmPasswordValidation = validation.confirmPassword(
      this.state.Password,
      this.state.confirmPassword
    )

    console.log(emailValidation, usernameValidation, mobileValidation, passwordValidation, confirmPasswordValidation)

    return (
      emailValidation
      && usernameValidation
      && mobileValidation
      && passwordValidation
      && confirmPasswordValidation
    )
  }

  register () {
    if(this._validate()) {
      this.props.registerUser(this.state)
    } else {
      console.log('unscuccess')
    }
  }

  render () {
    return (
      <View style={{flex: 1}}>
        <Header
          onPressNext={() => this.register()}
          isLoading={this.props.isLoading}
        />
        <ScrollableTabView
          tabBarUnderlineColor='#169DAB'
          tabBarBackgroundColor='#41474D'
          tabBarActiveTextColor='white'
          tabBarInactiveTextColor='white'
          tabBarTextStyle={{fontWeight: 'bold'}}
        >
          <SignUpRegular
            tabLabel='SignUp With Email'
            setInput={(type) => this.setInput(type)}
            setFirstName={(Fname) => this.setFirstName(Fname)}
            setLastName={(Lname) => this.setLastName(Lname)}
          />
          <SignUpSocial tabLabel='SignUp Social' />
        </ScrollableTabView>
      </View>
    )
  }
}
