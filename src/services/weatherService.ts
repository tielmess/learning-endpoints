import axios from 'axios';
import { WeatherData, ApiResponse } from '../types';

export class WeatherService {
  private readonly baseUrl = 'http://api.weatherapi.com/v1';
  // Get API key from environment variables.  
  private readonly apiKey = process.env.WEATHER_API_KEY || ''; 

  async getWeatherByCity(city: string): Promise<ApiResponse<WeatherData>> {
    if (!this.apiKey) {
      return {
        success: false,
        error: 'Weather API key not configured. Please set WEATHER_API_KEY environment variable.',
        timestamp: new Date().toISOString()
      };
    }

    try {
      // Using WeatherAPI - get your free API key at https://www.weatherapi.com/
      const response = await axios.get(`${this.baseUrl}/current.json`, {
        params: {
          key: this.apiKey,
          q: city,
          aqi: 'no'
        },
        timeout: 5000
      });

      const weatherData: WeatherData = {
        location: {
          name: response.data.location.name,
          country: response.data.location.country,
          region: response.data.location.region
        },
        current: {
          temp_c: response.data.current.temp_c,
          temp_f: response.data.current.temp_f,
          condition: {
            text: response.data.current.condition.text,
            icon: response.data.current.condition.icon
          },
          humidity: response.data.current.humidity,
          wind_kph: response.data.current.wind_kph,
          feelslike_c: response.data.current.feelslike_c
        }
      };

      return {
        success: true,
        data: weatherData,
        timestamp: new Date().toISOString()
      };
    } catch (error) {
      console.error('Weather API error:', error);
      
      if (axios.isAxiosError(error)) {
        const status = error.response?.status;
        const message = error.response?.data?.message || error.message;
        
        return {
          success: false,
          error: `Weather API failed (${status}): ${message}`,
          timestamp: new Date().toISOString()
        };
      }
      
      return {
        success: false,
        error: `Weather API error: ${error instanceof Error ? error.message : 'Unknown error'}`,
        timestamp: new Date().toISOString()
      };
    }
  }
}