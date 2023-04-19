import { Component } from '@angular/core';

@Component({
  selector: 'app-zodiacs',
  templateUrl: './zodiacs.component.html',
  styleUrls: ['./zodiacs.component.scss']
})
export class ZodiacsComponent {
  myDate: Date = new Date(); 
  async getDate(){
    let data = "";
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        date: this.myDate
      })
    };
    await fetch('http://localhost:3000/zodiak',requestOptions)
      .then(response => response.json())
      .then(res=>data=res.zodiac);
    alert(data);
  }
}

