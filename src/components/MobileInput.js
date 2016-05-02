import React, {
  Component,
  StyleSheet,
  TouchableOpacity,
  View
} from 'react-native'
import Input from './Input'
import CountryCodeDropDown from './CountryCodeDropDown'
import { VIEWPORT } from '../constants'

export default class MobileInput extends Component {
  render () {
    return (
      <View style={styles.container}>
        <CountryCodeDropDown />
        <Input
          placeholder={this.props.placeholder}
          keyboardType={'number-pad'}
          setInput={this.props.setInput}
          width={VIEWPORT.width / 2}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center'
  }
})
