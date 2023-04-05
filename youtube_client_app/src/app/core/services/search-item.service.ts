/* eslint-disable class-methods-use-this */
import { Injectable } from '@angular/core';
import { StatisticsInterface } from 'src/app/shared/models/search-item.model';
import { Nullable } from 'src/app/shared/models/types';
import { VideoResponseItem } from 'src/app/shared/models/video-response.model';

@Injectable({
  providedIn: 'root',
})
export class SearchItemService {
  public getTitle(searchItem: Nullable<VideoResponseItem>): string {
    if (searchItem) {
      return searchItem.snippet.title;
    }
    return 'no data';
  }

  public getSmallThumbnailUrl(searchItem: Nullable<VideoResponseItem>): string {
    if (searchItem) {
      const imgUrl =
        searchItem.snippet.thumbnails.standard?.url ||
        searchItem.snippet.thumbnails.default.url;
      return `url(${imgUrl})`;
    }
    return 'no data';
  }

  public getFullThumbnailUrl(searchItem: Nullable<VideoResponseItem>): string {
    if (searchItem) {
      const imgUrl = searchItem.snippet.thumbnails.medium.url;
      return `url(${imgUrl})`;
    }
    return 'no data';
  }

  public getPublishedAt(searchItem: Nullable<VideoResponseItem>): string {
    if (searchItem) {
      return searchItem.snippet.publishedAt;
    }
    return 'no data';
  }

  public getSocialsInfo(
    searchItem: Nullable<VideoResponseItem>
  ): Nullable<StatisticsInterface> {
    if (searchItem) {
      return searchItem.statistics;
    }
    return null;
  }

  public getDescription(searchItem: Nullable<VideoResponseItem>): string {
    if (searchItem) {
      return searchItem.snippet.description;
    }
    return 'no data';
  }
}
