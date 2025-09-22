import axios from 'axios';
import { User, ApiResponse } from '../types';

export class UsersService {
  private readonly baseUrl = 'https://jsonplaceholder.typicode.com';

  async getUserById(id: number): Promise<ApiResponse<User>> {
    try {
      const response = await axios.get(`${this.baseUrl}/users/${id}`, {
        timeout: 5000
      });

      const userData: User = response.data;

      return {
        success: true,
        data: userData,
        timestamp: new Date().toISOString()
      };
    } catch (error) {
      console.error('Error fetching user by ID:', error);
      
      if (axios.isAxiosError(error) && error.response?.status === 404) {
        return {
          success: false,
          error: `User with ID ${id} not found`,
          timestamp: new Date().toISOString()
        };
      }

      return {
        success: false,
        error: 'Failed to fetch user data',
        timestamp: new Date().toISOString()
      };
    }
  }

  async getAllUsers(limit?: number): Promise<ApiResponse<User[]>> {
    try {
      const response = await axios.get(`${this.baseUrl}/users`, {
        timeout: 5000
      });

      let users: User[] = response.data;
      
      if (limit && limit > 0) {
        users = users.slice(0, limit);
      }

      return {
        success: true,
        data: users,
        timestamp: new Date().toISOString()
      };
    } catch (error) {
      console.error('Error fetching all users:', error);
      return {
        success: false,
        error: 'Failed to fetch users data',
        timestamp: new Date().toISOString()
      };
    }
  }

  async getUserPosts(userId: number): Promise<ApiResponse<any[]>> {
    try {
      const response = await axios.get(`${this.baseUrl}/users/${userId}/posts`, {
        timeout: 5000
      });

      return {
        success: true,
        data: response.data,
        timestamp: new Date().toISOString()
      };
    } catch (error) {
      console.error('Error fetching user posts:', error);
      return {
        success: false,
        error: 'Failed to fetch user posts',
        timestamp: new Date().toISOString()
      };
    }
  }
}