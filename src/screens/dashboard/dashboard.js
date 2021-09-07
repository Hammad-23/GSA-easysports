import React from 'react';
import {
  View,
  Text,
  ScrollView,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Header from '../../components/Header';
import Feather from 'react-native-vector-icons/Feather';
import Cards from '../../components/dashboardCards/cards';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
// import * as Progress from 'react-native-progress';
export default function Dashboard() {
  return (
    <>
      <View style={style.header}>
        <View style={{marginLeft: 20}}>
          <Feather name="menu" size={25} color="#313d49" />
        </View>
      </View>

      <ScrollView contentContainerStyle={style.main}>
        <View style={style.content}>
          <View style={{marginTop: 10}}>
            <Text style={{fontSize: 30}}>Dashboard</Text>
          </View>

          <View style={style.cardContainer}>
            <Cards
              color="#313d49"
              title="EARNINGS(MONTHLY)"
              price="$40,000"
              icon={MaterialIcons}
              name="shopping-bag"
            />
          </View>

          <View style={style.cardContainer}>
            <Cards
              color="#39bf8d"
              title="EARNINGS(ANUALLY)"
              price="$215,000"
              icon={Fontisto}
              name="dollar"
            />
          </View>

          <View style={style.cardContainer}>
            <Cards
              color="#57afbd"
              title="TASKS"
              price="50%"
              icon={FontAwesome}
              name="tasks"
            />
          </View>

          <View style={style.cardContainerLast}>
            <Cards
              color="#f6bf70"
              title="PENDING REQUESTS"
              price="18"
              icon={Ionicons}
              name="chatbubbles-sharp"
            />
            {/* <ProgressBar progress={0.3} width={200} /> */}
          </View>
        </View>
      </ScrollView>
    </>
  );
}

const style = StyleSheet.create({
  header: {
    backgroundColor: '#FFFF',
    height: '10%',
    justifyContent: 'center',
  },
  main: {
    alignItems: 'center',
  },
  content: {
    width: '80%',
  },
  cards: {
    width: '100%',
    height: 120,
    backgroundColor: '#FFFF',
  },
  color: {
    backgroundColor: '#313d49',
    height: '100%',
    width: 5,
  },
  cardContainer: {
    marginTop: 20,
  },
  cardContainerLast: {
    marginTop: 20,
    marginBottom: 20,
  },
});
