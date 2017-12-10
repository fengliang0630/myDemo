import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ServiceUtilService} from '../shared/service-util.service';
import {Comment} from '../beans/entryUtils';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements  OnInit {


  @Input()
  private productId: number;
  @Output()
  private productRatingChange: EventEmitter<Comment[]> = new EventEmitter();

  private comments: Comment[];
  private isCommentHidden: boolean;
  private newComment: string;
  private newRating: number;



  constructor(private sus: ServiceUtilService) {
    this.isCommentHidden = true;
    this.newComment = '';
    this.newRating = 5;
  }

  ngOnInit(): void {
    this.comments = this.sus.getCommentsByProductId(this.productId);
  }

  submitComment() {
    this.comments.unshift(new Comment(0, 1, this.newRating,
      '新添加用户', '2017-05-05', this.newComment));
    this.newRating = 5;
    this.newComment = '';
    this.isCommentHidden = true;
    this.productRatingChange.emit(this.comments);
  }

}
