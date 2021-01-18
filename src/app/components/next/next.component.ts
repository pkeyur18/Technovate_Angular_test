import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-next",
  templateUrl: "./next.component.html",
  styleUrls: ["./next.component.css"],
})
export class NextComponent implements OnInit {
  currentPage: boolean = false;
  nextPage: boolean = true;
  prevPage: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  goPrev() {
    this.prevPage = true;
    this.currentPage = false;
    this.nextPage = false;
  }

  goCurrent() {
    this.prevPage = false;
    this.currentPage = true;
    this.nextPage = false;
  }
}
