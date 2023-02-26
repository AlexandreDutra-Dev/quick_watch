export const WEATHER_API_ENDPOINT = (city: string) =>
  `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}`;

export const SEARCH_API_ENDPOINT = (latitude: number, longitude: number) =>
  `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}&units=metric`;
