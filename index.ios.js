import React, {
  AppRegistry,
  Component,
  View
} from 'react-native'
import App from './src/pages'

class SampleAppDemo extends Component {
  render () {
    return (
      <View style={{flex: 1, marginTop: 20}}>
        <App />
      </View>
    )
  }
}

AppRegistry.registerComponent('SampleAppDemo', () => SampleAppDemo)
