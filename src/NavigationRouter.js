import { createBottomTabNavigator, createStackNavigator } from "react-navigation";
import React from "react";
import {Image} from "react-native";
import IconMaterialUi from "react-native-vector-icons/MaterialIcons";

import Tab1Screen1 from "./Tab1Screen1";
import Tab1Screen2 from "./Tab1Screen2";
import Tab2Screen1 from "./Tab2Screen1";
import Tab2Screen2 from "./Tab2Screen2";
import Tab3Screen1 from "./Tab3Screen1";
import Tab3Screen2 from "./Tab3Screen2";
import Tab4Screen1 from "./Tab4Screen1";
import Tab5Screen1 from "./Tab5Screen1";

const tabs = createBottomTabNavigator({

    Tab1: createStackNavigator(
        {
            Tab1Screen1: {
                screen: Tab1Screen1,
            },
            Tab1Screen2: {
                screen: Tab1Screen2,
            }
        }, {
            navigationOptions: {
                tabBarLabel: "Home",
                tabBarIcon: <IconMaterialUi name={"person"} size={24}/>
            }
        }),

    Tab2: createStackNavigator({

        Tab2Screen1: {
            screen: Tab2Screen1,
        },
        Tab2Screen2: {
            screen: Tab2Screen2,
        }

    } , {
        navigationOptions: {
            tabBarLabel: "Quests"
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
            tabBarLabel: "Profil"
        }
    }),


});

export default tabs;
