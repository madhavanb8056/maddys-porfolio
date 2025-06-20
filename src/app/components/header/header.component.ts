import { Component, OnInit  } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  isSidebarOpen = false;
  isMobile = false;
  showResume = false;
  resumeUrl = 'assets/pdf/Ponmadhavan_resume_angular.pdf';
  resumeImage = 'assets/images/Madhavan resume angular.png';

  ngOnInit(): void {
    this.checkMobile();
    window.addEventListener('resize', () => this.checkMobile());
  }

  checkMobile(): void {
    this.isMobile = window.innerWidth <= 768; // Or 640/600 as per your design
  }

  toggleSidebar(): void {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  // header.component.ts
  ngAfterViewInit(): void {
    const header = document.querySelector('header');
    header?.classList.add('animate__animated', 'animate__slideInDown');
  }
}
