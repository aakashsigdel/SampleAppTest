import React, {
  Component,
  PropTypes,
  StyleSheet,
  TextInput,
  View
} from 'react-native'

export default class Input extends Component {
  render () {
    return (
      <View style={styles.container}>
        <TextInput
          style={[{width: this.props.width}, styles.textInput]}
          onChangeText={this.props.setInput}
          autoFocus={this.props.autoFocus}
          autoCorrect={this.props.autoCorrect}
          keyboardType={this.props.keyboardType}
          autoCapitalize={this.props.autoCapitalize}
          placeholder={this.props.placeholder}
          secureTextEntry={this.props.secureTextEntry}
          maxLength={this.props.maxLength}
          placeholderTextColor={'#9B9B9B'}
          underlineColorAndroid={'transparent'}
        />
      </View>
    )
  }
}

Input.defaultProps = {
  secureTextEntry: false,
  placeholder: 'Your Text',
  keyboardType: 'default',
  autoCapitalize: 'none',
  autoCorrect: false,
  autoFocus: false,
  label: 'YOUR TEXT',
  maxLength: 200
}

Input.propTypes = {
  secureTextEntry: PropTypes.bool,
  placeholder: PropTypes.string,
  keyboardType: PropTypes.oneOf([
    'default',
    'email-address',
    'numeric',
    'phone-pad',
    'ascii-capable',
    'numbers-and-punctuation',
    'url',
    'number-pad',
    'name-phone-pad',
    'decimal-pad',
    'twitter',
    'web-search'
  ]),
  autoCapitalize: PropTypes.oneOf([
    'none',
    'sentences',
    'words',
    'characters'
  ]),
  autoCorrect: PropTypes.bool,
  autoFocus: PropTypes.bool,
  setInput: PropTypes.func.isRequired,
  label: PropTypes.string,
  maxLength: PropTypes.number
}

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 0.3,
    borderBottomColor: 'grey',
    justifyContent: 'flex-end',
    marginLeft: 20,
    marginRight: 20
  },
  textInput: {
    height: 50,
    fontSize: 12
  }
})
