import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-new-movie',
  templateUrl: './new-movie.component.html',
  styleUrls: ['./new-movie.component.scss']
})
export class NewMovieComponent implements OnInit {

  newMovie: FormGroup;
  constructor(private fb: FormBuilder, private ms: MovieService) { }

  ngOnInit() {
    this.newMovie = this.fb.group({
      title : ['', Validators.required],
      overview: [''],
      poster_path: [''],
      director: [''],
      rating: [''],
      year: ['']
    });
  }

  onNewMovieClick() {
    if (this.newMovie.valid) {
      this.ms.addFilm(this.newMovie.value);
    }
  }
}
