import React from "react";

export default function WeatherIcon({ iconUrl, alt = "", size = 48 }) {
  if (!iconUrl) return null;

  return (
    <img
      src={iconUrl}
      alt={alt}
      width={size}
      Height={size}
      style={{ verticalAlign: "middle" }}
    />
  );
}
