import Image from "next/legacy/image";
import React from "react";

interface WeatherData {
  main: {
    temp: number;
    feels_like: number;
    humidity: number;
  };
  weather: {
    main: string;
    icon: string;
  }[];
  wind: {
    speed: number;
  };
  name: string;
}

interface ClockProps {
  format: string;
}

export const Weather: React.FC<{ data: WeatherData }> = ({ data }) => {
  const { main, weather, wind, name } = data;
  const { temp, humidity } = main;
  const celsiusTemp = (((temp - 32) * 5) / 9).toFixed(0);
  const kmhWindSpeed = (wind.speed * 1.60934).toFixed(0);
  class Clock extends React.Component<ClockProps> {
    state = {
      time: new Date().toLocaleTimeString(),
    };
    componentDidMount() {
      setInterval(() => {
        this.tick();
      }, 1000);
    }

    tick() {
      this.setState({
        time: new Date().toLocaleTimeString(),
      });
    }
    render() {
      const { format } = this.props;
      const { time } = this.state;

      return <div>{time}</div>;
    }
  }

  const translateWeather = (weatherValue: string) => {
    switch (weatherValue) {
      case "Clouds":
        return "Nuvens";
      case "Clear":
        return "Céu Limpo";
      case "Rain":
        return "Chuva";
      case "Snow":
        return "Neve";
      case "Thunderstorm":
        return "Tempestade";
      case "Drizzle":
        return "Garoa";
      case "Mist":
        return "Névoa";
      case "Smoke":
        return "Fumaça";
      case "Haze":
        return "Neblina";
      default:
        return weatherValue;
    }
  };

  return (
    <div className="relative flex flex-col justify-between max-w-[500px] w-full h-[90vh] m-auto p-4 text-gray-300 z-10">
      {/* Top */}
      <div className="relative flex justify-between pt-12">
        <div className="flex flex-col items-center">
          <Image
            src={`http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
            alt={weather[0].main}
            width="100"
            height="100"
          />
          <p className="text-2xl">{translateWeather(weather[0].main)}</p>
        </div>
        <p className="text-9xl">{celsiusTemp}&#176;</p>
      </div>
      <div className="relative flex justify-between pt-12 ml-auto">
        <div className="text-9xl">
          <Clock format="HH:mm:ss" />
        </div>
      </div>

      {/* Bottom */}
      <div className="bg-black/50 relative p-8 rounded-md">
        <p className="text-2xl text-center pb-6">Tempo em {name}</p>
        <div className="flex justify-between text-center">
          <div>
            <p className="font-bold text-2xl">{celsiusTemp}&#176;</p>
            <p className="text-xl">Sensação</p>
          </div>
          <div>
            <p className="font-bold text-2xl">{humidity}%</p>
            <p className="text-xl">Umidade</p>
          </div>
          <div>
            <p className="font-bold text-2xl">{kmhWindSpeed} Km/h</p>
            <p className="text-xl">Ventos</p>
          </div>
        </div>
      </div>
    </div>
  );
};

