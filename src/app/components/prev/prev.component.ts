import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-prev",
  templateUrl: "./prev.component.html",
  styleUrls: ["./prev.component.css"],
})
export class PrevComponent implements OnInit {
  currentPage: boolean = false;
  nextPage: boolean = false;
  prevPage: boolean = true;

  constructor() {}

  ngOnInit(): void {}

  goCurrent() {
    this.prevPage = false;
    this.currentPage = true;
    this.nextPage = false;
  }

  goNext() {
    this.prevPage = false;
    this.currentPage = false;
    this.nextPage = true;
  }
}
