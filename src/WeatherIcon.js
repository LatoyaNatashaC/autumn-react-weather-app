import React from "react";
import { WiDaySunny, WiCloudy, WiRain, WiSnow, WiFog } from "react-icons/wi";

export default function WeatherIcon(props) {
  const size = props.size || 64;

  const iconMapping = {
    "clear-sky-day": <WiDaySunny size={size} />,
    "broken-clouds-day": <WiCloudy sixe={size} />,
    "rain-day": <WiRain size={size} />,
    "snow-day": <WiSnow size={size} />,
    "mist-day": <WiFog size={size} />,
  };

  return iconMapping[props.code] || null;
}
