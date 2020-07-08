import * as React from 'react';
import { StyleSheet } from 'react-native';
import { ButtonLink } from '../components'
import { Categories } from '../constants';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

export default function TabOneScreen(props: any) {
  console.log('props => ', props);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>What is your emergency?</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      {Categories.map((category, i) => (
        <ButtonLink
          key={i}
          navigation={props.navigation}
          title={category.display}
          to={category.to}
          />
      ))}
      <EditScreenInfo path="/screens/TabOneScreen.tsx" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
