import React, {
  Component,
  ScrollView,
  StyleSheet,
  Text,
  View
} from 'react-native'
import Input from '../components/Input'
import MobileInput from '../components/MobileInput'
import Header from '../components/Header'
import Validation from '../utility'

const validation = new Validation()
export default class SignUpRegular extends Component {
  setName (fullName) {
    const [Fname, ...LnameArray] = fullName.split(' ')
    const Lname = LnameArray.length === 0
      ? ''
      : LnameArray.reduce((output, input) => output + ' ' + input)
    this.props.setFirstName(Fname)
    if (Lname)
      this.props.setLastName(Lname)
  }

  render () {
    return (
      <ScrollView
        style={styles.container}
      >
        <Text style={styles.header}>
          {'Sign Up with your email'}
        </Text>
        <View style={styles.inputsContainer}>
          <View style={styles.input}>
            <Input
              placeholder={'Username'}
              setInput={this.props.setInput('Username')}
            />
          </View>
          <View style={styles.input}>
            <Input
              placeholder={'Password'}
              secureTextEntry
              setInput={this.props.setInput('Password')}
            />
          </View>
          <View style={styles.input}>
            <Input
              placeholder={'Confirm Password'}
              secureTextEntry
              setInput={this.props.setInput('confirmPassword')}
            />
          </View>
          <View style={styles.input}>
            <MobileInput
              placeholder={'MobileNumber'}
              secureTextEntry
              setInput={this.props.setInput('Mobile')}
              maxLength={10}
            />
          </View>
          <View style={styles.input}>
            <Input
              placeholder={'Email'}
              keyboardType={'email-address'}
              setInput={this.props.setInput('Email')}
            />
          </View>
          <View style={styles.input}>
            <Input
              placeholder={'Full Name'}
              autoCapitalize={'words'}
              setInput={(fullName) => this.setName(fullName)}
            />
          </View>
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 10,
    fontFamily: 'Avenir'
  },
  input: {
    marginBottom: 6
  }
})
