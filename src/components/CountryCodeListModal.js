import React, {
  Component,
  Image,
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native'

const countries = [
  {name: 'Nepal', value: '+977', image: require('../assets/images/nepal.png')},
  {name: 'Australia', value: '+61', image: require('../assets/images/australia.png')},
  {name: 'Qatar', value: '+974', image: require('../assets/images/qatar.png')},
  {name: 'Canada', value: '+1', image: require('../assets/images/canada.png')},
  {name: 'Finland', value: '+358', image: require('../assets/images/finland.png')}
]
export default class CountryCodeListModal extends Component {
  _renderCountries (countries) {
    return countries.map((country, index) => {
      return (
        <TouchableOpacity
          activeOpacity={0.6}
          onPress={() => this.props.toggleModal(country)}
          style={styles.countryContainer}
          key={country.value}
        >
          <Image
            source={country.image}
            style={styles.image}
          />
          <Text style={styles.country}>
            {country.value}
          </Text>
          <Text style={styles.country}>
            {country.name}
          </Text>
        </TouchableOpacity>
      )
    })
  }

  render () {
    return (
      <Modal
        animated
        transparent
        visible={this.props.modalVisible}
      >
        <View style={styles.container}>
          <Text style={styles.header}>
            {'Select Country Code'}
          </Text>
          <ScrollView
            contentContainerStyle={styles.scrollView}
          >
            {this._renderCountries(countries)}
          </ScrollView>
        </View>
      </Modal>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.8)'
  },
  header: {
    marginTop: 20,
    fontSize: 18,
    color: 'white',
    alignSelf: 'center',
    marginBottom: 20
  },
  scrollView: {
    flex: 1
  },
  countryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 15,
    paddingBottom: 5,
    borderBottomColor: 'lightgrey',
    borderBottomWidth: 1
  },
  image: {
    width: 32,
    height: 20
  },
  country: {
    fontSize: 15,
    color: 'white'
  },
})
