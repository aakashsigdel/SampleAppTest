import React, {
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native'

export default class SignUpSocial extends Component {
  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>
          {'Under Construction'}
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    fontSize: 24
  }
})
