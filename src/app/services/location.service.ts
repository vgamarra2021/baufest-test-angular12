import { Injectable } from '@angular/core';
import { BaseClient } from './base-client';
import { apiConfig } from '../config/api.config';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class LocationService extends BaseClient {
  baseUrl: string = apiConfig.locationsUrl;

  constructor(protected http: HttpClient) {
    super(http);
  }
}
