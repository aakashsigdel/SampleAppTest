import React, {
  Component,
  PropTypes,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import Loader from './Loader'
import { VIEWPORT } from '../constants'

export default class Header extends Component {
  _renderRightIcon () {
    if (this.props.isLoading) {
      return <Loader />
    }
    return (
      <Icon
        name={'android-arrow-forward'}
        size={25}
        color={'white'}
      />
    )
  }

  render () {
    return (
      <View style={styles.container}>
        <View style={styles.spacer}></View>
        <Text style={styles.titleText}>
          {'Application Title'}
        </Text>
        <TouchableOpacity
          activeOpacity={0.6}
          onPress={this.props.onPressNext}
          style={styles.icon}
        >
          {this._renderRightIcon()}
        </TouchableOpacity>
      </View>
    )
  }
}

Header.propTypes = {
  onPressNext: PropTypes.func.isRequired
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: VIEWPORT.height * 0.095, // 64/667 header bar height to 64 ppoints in phone6
    width: VIEWPORT.width,
    backgroundColor: '#41474D',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingRight: 20
  },
  titleText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold'
  },
  icon: {
    width: 50,
    height: 50,
    alignItems: 'flex-end',
    justifyContent: 'center'
  }
})
