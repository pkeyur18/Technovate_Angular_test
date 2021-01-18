import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-current",
  templateUrl: "./current.component.html",
  styleUrls: ["./current.component.css"],
})
export class CurrentComponent implements OnInit {
  currentPage: boolean = true;
  nextPage: boolean = false;
  prevPage: boolean = false;
  constructor() {}

  ngOnInit(): void {}

  goPrev() {
    this.prevPage = true;
    this.currentPage = false;
    this.nextPage = false;
  }

  goNext() {
    this.prevPage = false;
    this.currentPage = false;
    this.nextPage = true;
  }
}
