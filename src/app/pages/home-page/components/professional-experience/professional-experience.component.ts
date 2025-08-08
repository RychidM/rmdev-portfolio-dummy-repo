import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FadeInDirective } from '../../../../shared/directives/fade-in/fade-in.directive';
import { AccordionDirective } from '../../../../shared/directives/accordion/accordion.directive';
import { MagneticItemDirective } from '../../../../shared/directives/magnetic-item-directive/magnetic-item.directive';

@Component({
  selector: 'app-professional-experience',
  imports: [CommonModule, MagneticItemDirective, AccordionDirective, FadeInDirective],
  templateUrl: './professional-experience.component.html',
  styleUrl: './professional-experience.component.scss'
})
export class ProfessionalExperienceComponent {
  title: string = "Professional";
  subTitle: string = "Experience";

  experiences = [
    {
      title: "Mobile | FrontEnd Engineer",
      subTitle: "appsNmobile Solutions Ltd",
      content: `Designed and deployed advanced liveness detection, improving ID verification accuracy by 86%. 
      Enhanced app responsiveness via Dart Isolates for offloading heavy computations. 
      Expanded functionality by integrating native iOS/Android SDKs. 
      Integrated multiple third-party SDKs for richer functionality.`,
      isOpen: false,
      techStack: ["Flutter", "Angular", "SwiftUI", "Dart", "JS", "TS", "Kotlin", "Swift"],
    },
    {
      title: "Mobile Engineer",
      subTitle: "Bridge BluePrint Solutions",
      content: `Engineered and launched BluePOS, a POS solution that boosted transaction throughput for retail clients.
      Enhanced reliability with Google Cloud logging and alerting, enabling real-time diagnostics.
      Shipped Blue Palette e-commerce app with integrated payments and live delivery tracking`,
      isOpen: false,
      techStack: ["Flutter", "Dart", "Jetpack Compose", "Kotlin"],
    }
  ];

  toggleXP(selectedIndex: number) : void {
    this.experiences.forEach((item, index) => {
      if (selectedIndex === index) {
        item.isOpen = !item.isOpen;
      } else {
        item.isOpen = false;
      }
    });
  }
}
