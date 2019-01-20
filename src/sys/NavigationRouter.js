import {createBottomTabNavigator, createStackNavigator, createSwitchNavigator} from "react-navigation";
import React from "react";
import {Image} from "react-native";
import IconMaterialUi from "react-native-vector-icons/MaterialIcons";
import IconFontAwesome from "react-native-vector-icons/FontAwesome";

import Home from "../features/home/Home";
import SignUp from "../features/signUp/SignUp";
import Login from "../features/Login/Login";

import Tab1Screen2 from "../Tab1Screen2";
import Tab2Screen1 from "../Tab2Screen1";
import Tab2Screen2 from "../Tab2Screen2";
import Tab3Screen1 from "../Tab3Screen1";
import Tab3Screen2 from "../Tab3Screen2";
import Tab4Screen1 from "../Tab4Screen1";
import Tab5Screen1 from "../Tab5Screen1";

const tabs = createBottomTabNavigator({

    Tab1: createStackNavigator(
        {
            Tab1Screen1: {
                screen: Home,
            },
            Tab1Screen2: {
                screen: Tab1Screen2,
            }
        }, {
            navigationOptions: {
                tabBarLabel: "Home",
                tabBarIcon: <IconFontAwesome name={"home"} size={24} color={"black"}/>

            }
        }),

    Tab2: createStackNavigator(
        {

            Tab2Screen1: {
                screen: Tab2Screen1,
            },
            Tab2Screen2: {
                screen: Tab2Screen2,
            }

        }, {
            navigationOptions: {
                tabBarLabel: "Quests",
                tabBarIcon: <Image source={require("../images/home/1x/baseline_home_black_18dp.png")}/>
            }
        }),

    Tab3: createStackNavigator({

        Tab3Screen1: {
            screen: Tab3Screen1,
        },
        Tab3Screen2: {
            screen: Tab3Screen2,
        }

    }, {
        navigationOptions: {
            tabBarLabel: "Karte"
        }
    }),

    Tab4: createStackNavigator({

        Tab4Screen1: {
            screen: Tab4Screen1,
        },
        /*Tab4Screen2: {
            screen: Tasdasdasdasdab4Screen2,
        }
        */
    }, {
        navigationOptions: {
            tabBarLabel: "Nachrichten"
        }
    }),

    Tab5: createStackNavigator({

        Tab5Screen1: {
            screen: Tab5Screen1,
        },
        /*Tab5Screen2: {
            screen: Tasdasdasdasdab5Screen2,
        }
        */
    }, {
        navigationOptions: {
            tabBarLabel: "Profil",
            tabBarIcon: <IconMaterialUi name={"person"} size={24}/>
        }
    }),


});

export default createSwitchNavigator(
    {
        SignUp: SignUp,
        Login: Login,
        App: tabs,
    }, {
        initialRouteName: "SignUp",
    }
)
