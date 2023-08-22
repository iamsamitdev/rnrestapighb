import {
    StyleSheet,
    Image,
    TouchableOpacity,
    Text,
    StatusBar
  } from "react-native";
  import React from "react";
  import Onboarding from "react-native-onboarding-swiper";
  
  const Welcome = ({ navigation }: any) => {
    const Done = ({ ...props }) => (
      <TouchableOpacity {...props}>
        <Text style={{ fontSize: 16, marginHorizontal: 20 }}>เสร็จสิ้น</Text>
      </TouchableOpacity>
    );
  
    return (
      <>
        <StatusBar hidden={true} />
        <Onboarding
          onSkip={() => navigation.replace("Login")}
          onDone={() => navigation.replace("Login")}
          skipLabel="ข้าม"
          nextLabel="ถัดไป"
          DoneButtonComponent={Done}
          pages={[
            {
              backgroundColor: "teal",
              image: (
                <Image
                  source={require("../assets/images/slide1.png")}
                  style={{ width: "50%", height: "50%" }}
                />
              ),
              title: "Application for Saving Lives",
              subtitle: "We make it easy for you to order food from us"
            },
            {
              backgroundColor: "magenta",
              image: (
                <Image
                  source={require("../assets/images/slide2.png")}
                  style={{ width: "50%", height: "50%" }}
                />
              ),
              title: "Smart Money",
              subtitle: "We have wallet feature to make you pay easier"
            },
            {
              backgroundColor: "green",
              image: (
                <Image
                  source={require("../assets/images/slide3.png")}
                  style={{ width: "50%", height: "50%" }}
                />
              ),
              title: "Saving Lives",
              subtitle:
                "By ordering from us, you're saving lives. We donate 10% of our profit to charity"
            },
          ]}
        />
      </>
    );
  };
  
  export default Welcome;
  
  const styles = StyleSheet.create({});
  