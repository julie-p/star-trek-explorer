import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-episodes-details',
  templateUrl: './episodes-details.component.html',
  styleUrls: ['./episodes-details.component.css']
})
export class EpisodesDetailsComponent implements OnInit {

  data;
  uid;
  constructor( private api: ApiService, private route: ActivatedRoute ) {
    this.uid = this.route.snapshot.params.uid;
    this.api.getDetails(this.uid).subscribe(data => {
      this.data = data.episode;
      console.log(data)
    })
  }
  ngOnInit(): void {
  }
}
