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
      <View style={[styles.card, styles.elevatedCard]}>
        <View style={styles.container}>
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
            onPress={() => openWebsite('https://www.eurogulf.ae/')}>
            <Text>Read More</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },
  card: {},
  elevatedCard: {},
  container: {},
  headerText: {},
  cardImage: {
    height: 100,
  },
  bodyContainer: {},
  footerContainer: {},
});
