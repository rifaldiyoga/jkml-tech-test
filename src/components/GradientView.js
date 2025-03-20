import React from 'react';
import { View, StyleSheet } from 'react-native';

const GradientView = ({ colors, style, children }) => {
  return (
    <View style={[styles.gradientContainer, style]}>
      {colors.map((color, index) => (
        <View 
          key={index}
          style={[
            StyleSheet.absoluteFill,
            { 
              backgroundColor: color,
              opacity: 1 - (index * (1 / colors.length)),
              zIndex: -1
            }
          ]}
        />
      ))}
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  gradientContainer: {
    overflow: 'hidden',
  },
});

export default GradientView;