import { View, Text, SafeAreaView } from 'react-native';
import React from 'react';
import { images, icons, COLORS, SIZES } from '../constants'
import { Stack, useRouter } from 'expo-router';
import { Nearbyjobs, Popularjobs, ScreenHeaderBtn, Welcome } from '../components';

export default function Home() {
    return (
        <SafeAreaView
            style={{ flex: 1, backgroundColor: COLORS.lightWhite }}
        >
            <Stack.Screen
                options={{
                    headerStyle: { backgroundColor: COLORS.lightWhite },
                    headerShadowVisible: false,
                    headerLeft: () => (
                        <ScreenHeaderBtn iconUrl={icons.menu} dimension="60%" />
                    ),
                    headerRight: () => (
                        <ScreenHeaderBtn iconUrl={icons.profile} dimension="100%" />
                    )
                }}
            />
        </SafeAreaView>
    )
}