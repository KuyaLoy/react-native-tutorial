import {
  Image,
  Linking,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
export default function ActionCard() {
  function openWebsite(websiteLink: string) {
    Linking.openURL(websiteLink);
  }

  return (
    <View>
      <Text style={styles.headingText}>ActionCard</Text>
      <View style={styles.container}>
        <View style={[styles.card, styles.elevatedCard]}>
          <View style={styles.headingContainer}>
            <Text style={styles.headerText}>
              What's new in Javascript 21 - ES12
            </Text>
          </View>
          <Image
            source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}
            style={styles.cardImage}
          />
          <View style={styles.bodyContainer}>
            <Text numberOfLines={3}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque
              dolorem in recusandae blanditiis earum autem numquam ipsum quis,
              fugit doloremque voluptatibus ratione maiores molestias suscipit,
              unde accusantium sapiente iste dolorum.
            </Text>
          </View>
          <View style={styles.footerContainer}>
            <TouchableOpacity
              style={styles.socialLinks}
              onPress={() => openWebsite('https://www.eurogulf.ae/')}>
              <Text>Read More</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.socialLinks}
              onPress={() => openWebsite('https://www.eurogulf.ae/')}>
              <Text>Follow Me</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },
  card: {
    width: 350,
    height: 360,
    borderRadius: 6,
    marginVertical: 12,
    marginHorizontal: 16,
  },
  elevatedCard: {
    backgroundColor: '#E07c24',
    elevation: 3,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#333',
    shadowOpacity: 0.4,
  },
  headingContainer: {
    height: 40,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    color: '#000000',
    fontSize: 16,
    fontWeight: '600',
  },
  cardImage: {
    height: 190,
  },
  bodyContainer: {
    padding: 10,
  },
  footerContainer: {
    padding: 8,
    paddingHorizontal: 10,
    flexDirection: 'row',
    //alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  socialLinks: {
    fontSize: 16,
    color: '#000',
    backgroundColor: '#ffffff',
    paddingHorizontal: 20,
    paddingVertical: 6,
    borderRadius: 6,
  },
});
