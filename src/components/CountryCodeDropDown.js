import React, {
  Component,
  Image,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native'
import CountryCodeListModal from './CountryCodeListModal'

country = {name: 'Qatar', value: '+974', image: require('../assets/images/qatar.png')}

export default class CountryCodeDropDown extends Component {
  constructor () {
    super()
    this.state = {
      modalVisible: false,
      country: country
    }
  }

  setCountryCode (country) {
    this.setState({ country })
  }

  toggleModal (country) {
    this.setState({
      modalVisible: !this.state.modalVisible
    })
    this.setCountryCode(country)
  }

  render () {
    return (
      <TouchableOpacity
        activeOpacity={0.6}
        onPress={() => this.toggleModal(this.state.country)}
        style={styles.container}
      >
        <Text style={styles.downArrow}>
          {'▼'}
        </Text>
        <Image
          source={this.state.country.image}
          style={styles.flag}
        />
        <Text style={styles.countryCode}>
          {this.state.country.value}
        </Text>
        <CountryCodeListModal
          modalVisible={this.state.modalVisible}
          toggleModal={(country) => this.toggleModal(country)}
        />
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderBottomColor: 'grey',
    borderBottomWidth: 0.3,
    padding: 15,
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginLeft: 20
  },
  downArrow: {
    fontSize: 8,
    marginRight: 10,
  },
  flag: {
    width: 32,
    height: 20,
    marginRight: 15
  }
})
