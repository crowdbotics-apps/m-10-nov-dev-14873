import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet
} from "react-native"
import DateTimePicker from "react-native-datepicker"
import Icon from "react-native-vector-icons/FontAwesome"
import Slider from "@react-native-community/slider"
import { CheckBox } from "react-native-elements"
import { SlideMenuIcon } from "../../../navigator/slideMenuIcon"

export default class Blank extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft: <SlideMenuIcon navigationProps={navigation} />
    }
  }

  state = { CheckBox_4: true, CheckBox_5: true }

  render = () => (
    <View>
      <Text>Sample text content</Text>
      <Button title="Press me!" onPress={() => alert("Pressed!")} />
      <CheckBox
        title="Checkbox"
        checked={this.state.CheckBox_4}
        onPress={nextChecked => this.setState({ CheckBox_4: nextChecked })}
      />
      <CheckBox
        title="Radio button"
        checked={this.state.CheckBox_5}
        onPress={nextChecked => this.setState({ CheckBox_5: nextChecked })}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16
  },

  View_1: {},
  Text_2: {},
  Button_3: {},
  CheckBox_4: {},
  CheckBox_5: {},
  View_1: {},
  Text_2: {},
  Button_3: {},
  CheckBox_4: {},
  CheckBox_5: {}
})
