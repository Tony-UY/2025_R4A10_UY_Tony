import { Component } from '@angular/core';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.sass'],
  standalone: true
})
export class CustomerComponent {
  currentIndex = 0;

  testimonials = [
    {
      name: "Edward Newgate",
      role: "Founder Circle",
      image: "assets/customer1.png",
      review: "Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedious form, long calls, or administrative hassle) and securely."
    },
    {
      name: "Jane Doe",
      role: "CEO Healthcare",
      image: "assets/customer2.png",
      review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      name: "John Smith",
      role: "Medical Specialist",
      image: "assets/customer3.png",
      review: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    }
  ];

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.testimonials.length;
  }

  prevSlide() {
    this.currentIndex = (this.currentIndex - 1 + this.testimonials.length) % this.testimonials.length;
  }

  goToSlide(index: number) {
    this.currentIndex = index;
  }
}
