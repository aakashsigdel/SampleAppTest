import React, {
  AppRegistry,
  Component
} from 'react-native'
import App from './pages'

class SampleAppDemo extends Component {
  render() {
    return (
      <App />
    )
  }
}

AppRegistry.registerComponent('SampleAppDemo', () => SampleAppDemo)
