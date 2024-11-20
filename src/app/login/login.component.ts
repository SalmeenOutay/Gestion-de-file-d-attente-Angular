import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  check: number = 0;

  ngOnInit(): void {
    this.toggleLoginBoxAutomatically();
  }

  toggleLoginBoxAutomatically(): void {
    const cta = document.querySelector(".cta") as HTMLElement;

    if (cta) {
      const text = cta.nextElementSibling as HTMLElement;
      const loginText = cta.parentElement as HTMLElement;

      if (text && loginText) {
        // Automatically toggle the classes
        text.classList.toggle('show-hide');
        loginText.classList.toggle('expand');

        if (this.check === 0) {
          cta.innerHTML = "<i class='fas fa-chevron-up'></i>";
          this.check++;
        } else {
          cta.innerHTML = "<i class='fas fa-chevron-down'></i>";
          this.check = 0;
        }
      }
    }
  }
  onclick(){
    alert("login succsesfuly");
  }
}
