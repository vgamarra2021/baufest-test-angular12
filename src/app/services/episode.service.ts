import { Injectable } from '@angular/core';
import { BaseClient } from './base-client';
import { apiConfig } from '../config/api.config';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class EpisodeService extends BaseClient {
  baseUrl: string = apiConfig.episodesUrl;

  constructor(protected http: HttpClient) {
    super(http);
  }
}
