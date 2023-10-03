import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import StateWithClassComponent from './StateWithClassComponent';
import StateWithFunctionalComponent from './StateWithFunctionalComponent';

/**
 * Header
 * MyProfile
 * Division
 * FriendSection
 * FriendList
 */

const Header = (props) => {
  return <Text>{props.title}</Text>;
}
const MyProfile = () => {
  return (
    <Profile profileSize={40} uri="https://d2u3dcdbebyaiu.cloudfront.net/uploads/atch_img/132/b5773363bb83478555eb74e37e4ceeb7_res.jpeg" name="남재민"/>
  );
}
const Division = () => {
  return <Text>Division</Text>;
}
const FriendSection = () => {
  return <Text>FriendSection</Text>;
}
const FriendList = () => {
  return (
    <View>
      <Profile profileSize={30} uri="https://d2u3dcdbebyaiu.cloudfront.net/uploads/atch_img/132/b5773363bb83478555eb74e37e4ceeb7_res.jpeg" name="김재민"/>
      <Profile profileSize={30} uri="https://d2u3dcdbebyaiu.cloudfront.net/uploads/atch_img/132/b5773363bb83478555eb74e37e4ceeb7_res.jpeg" name="박재민"/>
      <Profile profileSize={30} uri="https://d2u3dcdbebyaiu.cloudfront.net/uploads/atch_img/132/b5773363bb83478555eb74e37e4ceeb7_res.jpeg" name="서재민"/>
      <Profile profileSize={30} uri="https://d2u3dcdbebyaiu.cloudfront.net/uploads/atch_img/132/b5773363bb83478555eb74e37e4ceeb7_res.jpeg" name="강재민"/>
      <Profile profileSize={30} uri="https://d2u3dcdbebyaiu.cloudfront.net/uploads/atch_img/132/b5773363bb83478555eb74e37e4ceeb7_res.jpeg" name="이재민"/>
    </View>
  );
}

// 함수형 컴포넌트
// const Profile = (props) => {
  // return (
  //   <View style={{flexDirection: 'row'}}>
  //     <Image source={{
  //       uri: props.uri
  //     }}
  //     style={{
  //       width: props.profileSize,
  //       height: props.profileSize
  //     }}
  //     />
  //     <Text>{props.name}</Text>
  //   </View>
  // )
// }

// 클래스형 컴포넌트
class Profile extends React.Component {
  render() {
    return (
      <View style={{flexDirection: 'row'}}>
        <Image source={{
          uri: this.props.uri
        }}
        style={{
          width: this.props.profileSize,
          height: this.props.profileSize
        }}
        />
        <Text>{this.props.name}</Text>
      </View>
    )
  }
}

export default function App() {
  return (
    <View style={styles.container}>
      <Header title="친구"/>
      <MyProfile/>
      <Division/>
      <FriendSection/>
      <FriendList/>

      {/* <StateWithClassComponent/> */}
      <StateWithFunctionalComponent/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});