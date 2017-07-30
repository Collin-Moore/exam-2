import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from "@angular/router";

@Component({
  selector: 'app-math',
  templateUrl: './math.component.html',
  styleUrls: ['./math.component.scss']
})
export class MathComponent implements OnInit {

  public numerator: number;
  public denominator: number;
  public result: number;

  constructor(private router: ActivatedRoute) { }

  ngOnInit() {
    this.router.params.subscribe((params: Params) => {
      this.numerator = params['numerator'];
      this.denominator = params['denominator'];
      this.result = this.numerator/this.denominator;
     });
  }

}
