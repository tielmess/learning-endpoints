// Weather API types
export interface WeatherData {
  location: {
    name: string;
    country: string;
    region: string;
  };
  current: {
    temp_c: number;
    temp_f: number;
    condition: {
      text: string;
      icon: string;
    };
    humidity: number;
    wind_kph: number;
    feelslike_c: number;
  };
}

// Quotes API types
export interface Quote {
  text: string;
  author: string;
  category?: string;
}

// User API types
export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

// Crypto API types
export interface CryptoPrice {
  symbol: string;
  name: string;
  price: number;
  change_24h: number;
  change_percentage_24h: number;
  market_cap: number;
  volume_24h: number;
  last_updated: string;
}

// Generic API response type
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  timestamp: string;
}