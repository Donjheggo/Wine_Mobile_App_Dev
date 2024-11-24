import { Loader } from "~/lib/icons/loader";
import { useEffect, useRef } from "react";
import { Animated, Easing } from "react-native";

export default function CustomLoader() {
  const spinValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Create the spinning animation
    const spin = Animated.loop(
      Animated.timing(spinValue, {
        toValue: 1,
        duration: 1000,
        easing: Easing.linear,
        useNativeDriver: true,
      })
    );

    // Start the animation
    spin.start();

    // Clean up the animation when component unmounts
    return () => spin.stop();
  }, []);

  // Create the interpolated rotation value
  const rotate = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });

  return (
    <Animated.View style={{ transform: [{ rotate }] }}>
      <Loader className="text-muted-foreground" size={40} />
    </Animated.View>
  );
}
