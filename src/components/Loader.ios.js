import React, {
  ActivityIndicatorIOS,
  Component
} from 'react-native'

export default class Loader extends Component {
  render () {
    return (
      <ActivityIndicatorIOS
        size={'small'}
      />
    )
  }
}
