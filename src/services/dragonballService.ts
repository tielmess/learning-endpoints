import axios from 'axios';
import { Dragonball, ApiResponse } from '../types';

export class DragonballService {
    private readonly baseUrl = 'https://dragonball-api.com/api/characters';
    // Get API key from environment variables. 
    // This api doesn't actually need an API key. But we've many APIs do. 
    // This code is purely an example of how this works. 
    private readonly apiKey = process.env.Dragonball_API_KEY || ''; 


async getDragonballById(id: number): Promise<ApiResponse<Dragonball>> {
    try {
        const response = await axios.get(`${this.baseUrl}/${id}`, {
            timeout: 5000
        });
        return {
            success: true,
            data: response.data as Dragonball,
            timestamp: new Date().toISOString()
        };
    } catch (error) {
        console.error('Error fetching Dragonball by ID:', error);
        
        if (axios.isAxiosError(error) && error.response?.status === 404) {
            return {
                success: false,
                error: `Dragonball with ID ${id} not found`,
                timestamp: new Date().toISOString()
            };
        }
        return {
            success: false,
            error: 'An unexpected error occurred',
            timestamp: new Date().toISOString()
        };
    }
}


}