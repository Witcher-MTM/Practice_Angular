import { Component } from '@angular/core';

@Component({
  selector: 'app-zodiacs',
  templateUrl: './zodiacs.component.html',
  styleUrls: ['./zodiacs.component.scss'],
})
export class ZodiacsComponent {
  myDate: Date = new Date();
  imgUrl: string = '';
  async getDate() {
    let data = '';
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        date: this.myDate,
      }),
    };
    await fetch('http://localhost:3000/zodiak', requestOptions)
      .then((response) => response.json())
      .then((res) => (data = res.zodiac));
    switch (data) {
      case 'Овен':
        this.imgUrl = '../../assets/imgs/Asset 1@3x.png';
        break;
      case 'Телец':
        this.imgUrl = '../../assets/imgs/Asset 2@3x.png';
        break;
      case 'Близнецы':
        this.imgUrl = '../../assets/imgs/Asset 3@3x.png';
        break;
      case 'Рак':
        this.imgUrl = '../../assets/imgs/Asset 4@3x.png';
        break;
      case 'Лев':
        this.imgUrl = '../../assets/imgs/Asset 5@3x.png';
        break;
      case 'Дева':
        this.imgUrl = '../../assets/imgs/Asset 6@3x.png';
        break;
      case 'Весы':
        this.imgUrl = '../../assets/imgs/Asset 7@3x.png';
        break;
      case 'Скорпион':
        this.imgUrl = '../../assets/imgs/Asset 8@3x.png';
        break;
      case 'Стрелец':
        this.imgUrl = '../../assets/imgs/Asset 9@3x.png';
        break;
      case 'Козерог':
        this.imgUrl = '../../assets/imgs/Asset 10@3x.png';
        break;
      case 'Водолей':
        this.imgUrl = '../../assets/imgs/Asset 11@3x.png';
        break;
      case 'Рыбы':
        this.imgUrl = '../../assets/imgs/Asset 12@3x.png';
        break;
    }
  }
}
