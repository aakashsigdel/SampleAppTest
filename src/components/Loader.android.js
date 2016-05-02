import React, {
  ProgressBarAndroid,
  Component
} from 'react-native'

export default class Loader extends Component {
  render () {
    return (
      <ProgressBarAndroid
        styleAttr='Small'
        color={'white'}
      />
    )
  }
}

