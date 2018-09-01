import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
import { QuranService } from "../../services/quran.service";
import { QuranRoot } from "../../Models/Quran";
import { Sura } from "../../Models/Quran";
@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  data: QuranRoot;
  allSura: Array<Sura>;

  constructor(
    public navCtrl: NavController,
    private quranService: QuranService
  ) {
    this.allSura = [];
    this.quranService
      .getQuranData()
      .then(data => {
        this.data = data;

        this.allSura = this.data.quran.sura;
      })
      .catch(error => {
        console.log("erro" + error);
      });
    console.log(this.allSura);
  }
}
