import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { DomSanitizer } from '@angular/platform-browser';
import { Settings } from '../model/settings';
import { ShareDialogComponent, CodeViewerDialogComponent } from '../dialogs';
import { SharedService } from '../shared.service';
import { FeedEntry } from '../model/feed-entry';
import { NewsAPITopHeadlinesArticle } from '../model/news-api/top-headlines-article';

@Component({
  selector: 'app-feed-card',
  templateUrl: './feed-card.component.html',
  styleUrls: ['./feed-card.component.css']
})
export class FeedCardComponent implements OnInit {
  hasImage: boolean;
  imageExts = ['jpg', 'jpeg', 'png', 'gif'];
  imageSrc: string;
  target: string;
  imageChanged = false;
  settings: Settings;
  @Input() feed?: FeedEntry;
  @Input() headline?: NewsAPITopHeadlinesArticle;
  constructor(private dialog: MatDialog, private shared: SharedService, private dom: DomSanitizer) { }

  share(feed: FeedEntry | NewsAPITopHeadlinesArticle) {
    const dialogRef = this.dialog.open(ShareDialogComponent);
    dialogRef.componentInstance.feed = feed;
  }

  isEmpty(variable: string): boolean {
    return (!variable || 0 === variable.length);
  }

  showCode(feed) {
    const dialogRef = this.dialog.open(CodeViewerDialogComponent);
    dialogRef.componentInstance.feed = feed;
  }

  viewInDialog(feed) {
    // tslint:disable-next-line:max-line-length
    const dialogRef = this.shared.openConfirmDialog({ title: 'Post', msg: this.dom.bypassSecurityTrustHtml(`<iframe src="${feed.link}" width="90%" height="90%"></iframe>`), isHtml: true, panelClass: 'post-dialog' });
    dialogRef.afterClosed().subscribe(result => {
      if (result === 'ok') {
        // Open post in new tab
        window.open(feed.link);
      } else {

      }
    });
  }

  imageChange() {
    this.imageChanged = !this.imageChanged;
    this.hasImage = !this.hasImage;
  }

  replaceImg(isThumbnail?: boolean) {
    this.hasImage = true;
    if (isThumbnail) {
      if (this.feed) {
        if (this.feed.enclosure.thumbnail) {
          this.imageSrc = encodeURI(this.feed.enclosure.thumbnail);
        } else if (this.feed.thumbnail) {
          this.imageSrc = encodeURI(this.feed.thumbnail);
        }
      } else {
        this.imageSrc = encodeURI(this.feed.enclosure.link);
      }
    }
  }

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
    if (this.feed) {
      if ((this.feed.thumbnail || (this.feed.enclosure && this.feed.enclosure.length === undefined)) && this.settings.showImages) {
        if (this.feed.enclosure.thumbnail || this.feed.thumbnail) {
          this.replaceImg(true);
        } else if (this.feed.enclosure.link) {
          this.replaceImg(false);
        }
      }
    }
  }
}