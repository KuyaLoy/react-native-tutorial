import {StyleSheet, Text, View, Image} from 'react-native';
export default function FancyCard() {
  return (
    <View>
      <Text style={styles.headingText}>Trending Places</Text>
      <View style={styles.container}>
        <View style={[styles.card, styles.cardElevated]}>
          <Image
            source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}
            style={styles.cardImage}
          />
          <View style={styles.cardBody}>
            <Text style={styles.cardTitle}>React Native</Text>
            <Text style={styles.cardLabel}>Robin Tapiru</Text>
            <Text style={styles.cardDescription}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
              veritatis sed qui esse. Tempore sunt autem odit similique, sequi
              modi quo aliquam totam eum nesciunt sint aperiam expedita et
              velit.
            </Text>
            <Text style={styles.cardFooter}>Aug 10, 1994</Text>
          </View>
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
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    width: 350,
    height: 360,
    borderRadius: 6,
    marginVertical: 12,
    marginHorizontal: 16,
  },
  cardElevated: {
    backgroundColor: '#fff',
    elevation: 3,
    shadowOffset: {
      width: 1,
      height: 1,
    },
  },
  cardImage: {
    height: 180,
    marginBottom: 8,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
  },
  cardBody: {
    flex: 1,
    flexGrow: 1,
    paddingHorizontal: 12,
  },

  cardTitle: {
    color: '#000',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  cardLabel: {
    color: '#000',
    fontSize: 14,
    marginBottom: 6,
  },
  cardDescription: {
    color: '#242b2e',
    fontSize: 12,
    marginBottom: 12,
    marginTop: 6,
    flexShrink: 1,
  },
  cardFooter: {
    color: '#000',
  },
});
