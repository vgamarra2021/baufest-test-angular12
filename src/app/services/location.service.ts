import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiConfig } from '../config/api.config';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root',
})
export class LocationService extends BaseService {
  baseUrl: string = apiConfig.locationsUrl;

  constructor(protected http: HttpClient) {
    super(http);
  }
}
