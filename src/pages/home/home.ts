import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
import { QuranService } from "../../app/services/quran.service";

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  constructor(
    public navCtrl: NavController,
    private quranService: QuranService
  ) {
    this.quranService.getQuranData().subscribe(function(data) {
      console.log(data);
    });
  }
}
