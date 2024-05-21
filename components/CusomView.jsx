import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';

const CustomView = ({ children, style }) => {
  const marginLeft = useSharedValue(-100); // Начальная позиция за пределами экрана слева

  useEffect(() => {
    // Анимация появления в центр
    marginLeft.value = withTiming(0, { duration: 1000 }); // Анимация длительностью 1 секунда
  }, [marginLeft]);

  const animatedStyle = useAnimatedStyle(() => {
    return {
        marginLeft: [ marginLeft.value ],
    };
  });

  return (
    <Animated.View style={[style, animatedStyle]}>
      {children}
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {

  },
});

export default CustomView;