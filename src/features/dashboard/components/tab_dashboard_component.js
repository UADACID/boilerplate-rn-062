import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { useSafeArea } from 'react-native-safe-area-context';
import { connect } from 'react-redux'

const TabDashboardComponent = ({ state, descriptors, navigation, dashboardConfig, isAuthenticated }) => {
    const focusedOptions = descriptors[state.routes[state.index].key].options;
    const insets = useSafeArea();
    if (focusedOptions.tabBarVisible === false) {
        return null;
    }

    return (
        <View style={{ flexDirection: 'row' }}>
            {state.routes.map((route, index) => {
                const { options } = descriptors[route.key];
                const label =
                    options.tabBarLabel !== undefined
                        ? options.tabBarLabel
                        : options.title !== undefined
                            ? options.title
                            : route.name;

                const isFocused = state.index === index;
                const onPress = () => {
                    if (isAuthenticated == false && dashboardConfig[index].needAuth) {
                        navigation.navigate('LoginScreen')
                        return;
                    }
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name);
                    }
                };

                const onLongPress = () => {
                    navigation.emit({
                        type: 'tabLongPress',
                        target: route.key,
                    });
                };

                return (
                    <TouchableOpacity
                        key={index}
                        activeOpacity={0.9}
                        accessibilityRole="button"
                        accessibilityStates={isFocused ? ['selected'] : []}
                        accessibilityLabel={options.tabBarAccessibilityLabel}
                        testID={options.tabBarTestID}
                        onPress={onPress}
                        onLongPress={onLongPress}
                        style={{ flex: 1, height: 60, backgroundColor: 'white', justifyContent: 'space-evenly', alignItems: 'center', marginBottom: insets.bottom / 2 }}
                    >
                        <View style={{ height: 24, width: 24, backgroundColor: 'grey' }}></View>
                        <Text style={{ color: isFocused ? '#673ab7' : '#222' }}>
                            {
                                dashboardConfig[index].title
                            }
                        </Text>
                    </TouchableOpacity>
                );
            })}
        </View>
    )
}

const mapStateToProps = (state) => ({
    isAuthenticated: state.authReducer.isAuthenticated
})

export default connect(mapStateToProps)(TabDashboardComponent)
