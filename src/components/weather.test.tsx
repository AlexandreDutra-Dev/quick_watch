import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Weather } from "./Weather";

const testData = {
  main: {
    temp: 20,
    feels_like: 18,
    humidity: 75,
  },
  weather: [
    {
      main: "Cloudy",
      icon: "04n",
    },
  ],
  wind: {
    speed: 5,
    Weather,
  },
  name: "London",
};

describe("Weather component", () => {
  test("renders with correct data", () => {
    render(<Weather data={testData} />);

    const cloudyImg = screen.getByAltText("Cloudy");
    expect(cloudyImg).toBeInTheDocument();

    const cloudyText = screen.getByText("Cloudy");
    expect(cloudyText).toBeInTheDocument();

    const tempText = screen.getByText("20°");
    expect(tempText).toBeInTheDocument();

    const feelsLikeText = screen.getByText("Feels Like");
    expect(feelsLikeText).toBeInTheDocument();

    const feelsLikeValueText = screen.getByText("18°");
    expect(feelsLikeValueText).toBeInTheDocument();

    const humidityText = screen.getByText("Humidity");
    expect(humidityText).toBeInTheDocument();

    const humidityValueText = screen.getByText("75%");
    expect(humidityValueText).toBeInTheDocument();

    const windText = screen.getByText("Winds");
    expect(windText).toBeInTheDocument();

    const windValueText = screen.getByText("5 MPH");
    expect(windValueText).toBeInTheDocument();

    const locationText = screen.getByText("Weather in London");
    expect(locationText).toBeInTheDocument();
  });
});
