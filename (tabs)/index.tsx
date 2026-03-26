import { StyleSheet, Text, View } from 'react-native';
import AppBar from '../AppBar';

export default function Home() {
  return (
    <View style={styles.container}>

      <AppBar title="My App Fitness"/>
      
      <View style={styles.content}>
        <Text style={styles.text}>My App Fitness</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
  },
});
