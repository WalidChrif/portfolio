import { Injectable } from '@angular/core';
import { Person } from '../models/person.model';
import { dateFormatter } from '../utils/dateformatter';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  walid: Person = {
    fullName: 'Walid Chrif',
    title: 'FullStack Developer',
    phone: '+212660701821',
    email: 'walid.chrif111@gmail.com',
    website: '',
    address: 'Lotissemnt Al Hamd Rue 01 Nr 36 Sidi Moumen, Casablanca',
    profileDescription:
      'A motivated Angular and Spring Boot developer, recently graduated with a solid foundation in full-stack development. ' +
      'Despite being a recent graduate, I have demonstrated strong expertise through hands-on projects, showcasing my ability ' +
      'to build scalable, efficient web applications. Passionate about coding, I am eager to contribute my skills to innovative ' +
      'development teams and take on new challenges in software engineering.',
    links: [
      { name: 'GitHub', url: '//www.github.com/WalidChrif' },
      { name: 'LinkedIn', url: '//www.linkedin.com/in/walid-chrif' },
      {
        name: 'Facebook',
        url: '//www.facebook.com/profile.php?id=100090756348995',
      },
    ],
    experiences: [
      {
        position: 'Content Moderator',
        company: 'Majorel',
        startDate: dateFormatter(new Date(2022, 9 - 1)),
        endDate: dateFormatter(new Date(2023, 7 - 1)),
        location: 'Casablanca',
        tasks: [
          'Review user content.',
          'Enforce community guidelines.',
          'Manage reports of inappropriate content.',
        ],
      },
      {
        position: 'Web developer - Internship',
        company: 'Allinz',
        startDate: dateFormatter(new Date(2021, 4 - 1)),
        endDate: dateFormatter(new Date(2021, 8 - 1, 19)),
        location: 'Casablanca',
        tasks: [
          'Development of HTML, CSS, JavaScript projects' +
            ' (Dice game, Drum Kit...). and Java projects (Music' +
            'Library, School management...).',
        ],
        link: 'https://github.com/WalidChrif?tab=repositories',
      },
    ],
    education: [
      {
        diploma: 'Professional Licence',
        major: 'Java/JEE',
        school: 'FST Settat',
        graduationDate: dateFormatter(new Date(2023, 7 - 1)),
        tasks: [
          'Design and development of a real estate and vacation' +
            'management platform (HTML5, CSS3, Angular, Angular Material,' +
            'SpringBoot, MySql).',
        ],
        link: 'https://github.com/WalidChrif/FunTravels',
      },
      {
        diploma: 'Bachelor Degree',
        major: 'English Studies',
        school: "FLSH Ben M'sik",
        graduationDate: dateFormatter(new Date(2024, 6 - 1)),
        tasks: [
          'Research Project : Cultural Traditions in Transition; ' +
            'Contrasting the Impact of Heritage on America and Morocco.',
        ],
      },
      {
        diploma: 'Specialized Technicien Diploma',
        major: 'IT Development',
        school: 'ISTA Sidi Maarouf',
        graduationDate: dateFormatter(new Date('Jul 2020')),
        tasks: [
          'Application javaFX de prise de rendez-vous',
          'Gestion de stock',
        ],
      },
      {
        diploma: 'Baccalaureate',
        major: 'Experimental Science',
        school: 'Lycee Moulay Driss',
        graduationDate: dateFormatter(new Date(2018, 6 - 1)),
      },
    ],
    services: [
      {
        name: 'Front-end Development',
        details:
          'Building user interfaces (UI) using ' +
          'JavaScript, Angular, RXJS, TypeScript, HTML5, CSS3.',
      },
      {
        name: 'Back-end Development',
        details:
          'Creating server-side logic and APIs using ' +
          'Java, Spring Boot, Spring Core, RESTful Webservices.',
      },
      {
        name: 'Database Management',
        details:
          'Integrating databases with the back-end to store ' +
          'and retrieve data efficiently using MySQL, PostgreSQL, Hibernate.',
      },
    ],
    mainSkills: [
      { name: 'Java', percentage: 95 },
      { name: 'Spring Boot', percentage: 95 },
      { name: 'Spring Security', percentage: 90 },
      { name: 'Spring Cloud', percentage: 95 },
      { name: 'JavaScript', percentage: 95 },
      { name: 'Angular', percentage: 95 },
      { name: 'RxJS', percentage: 90 },
      { name: 'PrimeNg', percentage: 90 },
    ],
    otherSkills: [
      { name: 'HTML5', percentage: 95 },
      { name: 'CSS3', percentage: 85 },
      { name: 'Bootstrap', percentage: 95 },
      { name: 'Tailwind', percentage: 95 },
      { name: 'Spring AOP', percentage: 95 },
      { name: 'Spring DATA', percentage: 95 },
      { name: 'Spring Batch', percentage: 90 },
      { name: 'JWT', percentage: 95 },
      { name: 'MySQL', percentage: 95 },
      { name: 'MongoDB', percentage: 90 },
      { name: 'Kafka', percentage: 80 },
      { name: 'RabbitMQ', percentage: 90 },
      { name: 'Docker', percentage: 95 },
      { name: 'Kubernetes', percentage: 80 },
      // { name: 'Zipkin', percentage: 90 },
    ],
    projects: [
      {
        title: 'FunTravels',
        type: 'Real Estate and Vacation Management Platform',
        description:
          'A platform that allows users to list, search, and book real estate properties and vacation rentals.',
        technologies: [
          'HTML5',
          'CSS3',
          'Angular',
          'Angular Material',
          'SpringBoot',
          'MySql',
        ],
        link: 'https://github.com/WalidChrif/FunTravels',
        image: './assets/images/funtravelslogo.png',
      },
      {
        title: 'Portfolio',
        type: 'A website that showcases my work, my projects, my skills, and experiences',
        description:
          'A website that showcases my work, my projects, my skills, and experiences.',
        technologies: ['HTML5', 'CSS3', 'Bootstrap', 'Angular'],
        link: 'https://github.com/portfolio',
        image: './assets/images/portfolioimgcopy.jpg',
      },
      {
        title: 'ShopShop',
        type: ' E-commerce web application for music accessories ',
        description:
          'An online store that allows users to browse, search, and purchase music accessories.',
        technologies: [
          'HTML5',
          'CSS3',
          'Bootstrap',
          'Angular',
          'SpringBoot',
          'MySql',
        ],
        link: 'https://github.com/WalidChrif/ShopShop',
        image: './assets/images/shopshoplogocopy.png',
      },
    ],
  };

  getPerson(): Person {
    return this.walid;
  }
  getAboutInfo() {
    return {
      FullName: this.walid.fullName,
      Phone: this.walid.phone,
      Email: this.walid.email,
      Address: this.walid.address,
      Website: this.walid.website,
    };
  }
  getExperiences() {
    return this.walid.experiences;
  }
  getEducation() {
    return this.walid.education;
  }
  getFullName(): string {
    return this.walid.fullName;
  }
  getPhone(): string {
    return this.walid.phone;
  }
  getEmail(): string {
    return this.walid.email;
  }
  getAddress() {
    return this.walid.address;
  }
  getWebsite() {
    return this.walid.website;
  }
  getProfileDescription() {
    return this.walid.profileDescription;
  }
  getLinks() {
    return this.walid.links;
  }
  getSiteIcon(site: string) {
    return site === 'linkedin' || 'github'
      ? site.toLocaleLowerCase() + '2'
      : site.toLocaleLowerCase() + '3';
  }

  getServices() {
    return this.walid.services;
  }

  // getClass() : string {
  //   if (DataService.myClass === 'timeline-inverted') {
  //     DataService.myClass = 'timeline-unverted';
  //     return DataService.myClass;
  //   } else {
  //     DataService.myClass = 'timeline-inverted'
  //     return DataService.myClass;
  //   }
  // }

  getMainSkills() {
    return this.walid.mainSkills;
  }

  getOtherSkills() {
    return this.walid.otherSkills;
  }

  getProjects() {
    return this.walid.projects;
  }
}
