import React from "react";

export default function WeatherIcon({ iconUrl, alt = "", size = 64 }) {
  if (!iconUrl) return null;

  return (
    <img
      src={iconUrl}
      alt={alt}
      width={size}
      Height={size}
      style={{ verticalAlign: "middle", transform: "scale(1.1)" }}
    />
  );
}
