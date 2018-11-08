import { Component } from '@angular/core';
import { CharacterService } from 'src/app/character.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [CharacterService]
})
export class AppComponent {
  title = 'api-task';
}
