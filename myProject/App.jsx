import React from 'react';
import {Text, View, Image, ScrollView, TextInput} from 'react-native';

const Dashboard = () => {
  return (
   <ScrollView>
        <Text>Some text</Text>
        <View>
          <Text>Some more text</Text>
          <Image
            source={require(''./images/gokul.jpg)}
            style={{width: 200, height: 200}}
          />
        </View>
        <TextInput
          style={{
            height: 40,
            borderColor: 'gray',
            borderWidth: 1,
          }}
          defaultValue="You can type in me"
        />
      </ScrollView>
  );
};
export default Dashboard;