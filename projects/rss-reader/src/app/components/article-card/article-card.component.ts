import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CodeViewerDialogComponent, ShareDialogComponent } from '../../dialogs';
import { FeedEntry } from '../../models/feed-entry';
import { NewsAPITopHeadlinesArticle } from '../../models/news-api/top-headlines-article';
import { Settings } from '../../models/settings';

@Component({
  selector: 'app-article-card',
  templateUrl: './article-card.component.html',
  styleUrls: ['./article-card.component.css']
})
export class ArticleCardComponent implements OnInit {
  hasImage: boolean;
  imageSrc: string;
  target: string;
  settings: Settings;
  /**
   * The feed entry that this card represents.
   * @deprecated Use {@link ArticleCardComponent#article}.
   */
  @Input() feed?: FeedEntry;
  /**
   * The headline article that this card represents.
   * @deprecated Use {@link ArticleCardComponent#article}.
   */
  @Input() headline?: NewsAPITopHeadlinesArticle;
  /** The article that this card represents. */
  @Input() article: FeedEntry | NewsAPITopHeadlinesArticle;

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
    if (window.localStorage.getItem('settings')) {
      this.settings = JSON.parse(window.localStorage.getItem('settings')) as Settings;
      if (this.settings.hasOwnProperty('openNewTab')) {
        this.target = this.settings.openNewTab ? '_blank' : '_self';
      }
      if (this.settings.hasOwnProperty('showImages')) {
        this.hasImage = this.settings.showImages;
      }
    }

    if ('pubDate' in this.article) {
      // Article is of type FeedEntry.
      // tslint:disable-next-line:deprecation
      this.feed = this.article as FeedEntry;
    } else if ('publishedAt' in this.article) {
      // Article is of type NewsAPITopHeadlinesArticle.
      // tslint:disable-next-line:deprecation
      this.headline = this.article as NewsAPITopHeadlinesArticle;
    } else {
      throw new Error('The article passed in was not of type "FeedEntry" or "NewsAPITopHeadlinesArticle".');
    }
  }

  share(article: FeedEntry | NewsAPITopHeadlinesArticle) {
    this.dialog.open(ShareDialogComponent, {
      data: article
    });
  }

  isEmpty(variable: string): boolean {
    return (!variable || 0 === variable.length);
  }

  showCode(article) {
    this.dialog.open(CodeViewerDialogComponent, {
      data: article
    });
  }
}