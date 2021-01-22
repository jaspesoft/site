import { Component, HostListener, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private titleService: Title) { }

  ngOnInit(): void {
    this.titleService.setTitle('Mi titulo');
  }

  @HostListener('scroll', ['$event'])
  scroll(event): void {
    const elemens = document.querySelectorAll('.letter-menu');

    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.getElementById('toolbar').style.background = '#731a1d';

      [].forEach.call(elemens, (div) => {
        div.classList.remove('f-red-wine');
        div.classList.add('f-white');
      });

    } else {

      [].forEach.call(elemens, (div) => {
        div.classList.remove('f-white');
        div.classList.add('f-red-wine');
      });

      document.getElementById('toolbar').style.background = 'transparent';
    }
  }

}
