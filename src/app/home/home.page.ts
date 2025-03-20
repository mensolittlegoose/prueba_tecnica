import { Component, ViewChild, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavController } from '@ionic/angular';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonAvatar, 
  IonChip, IonLabel, IonIcon, IonModal, IonCard, IonCardHeader, 
  IonCardTitle, IonCardContent, IonButton} from '@ionic/angular/standalone';
import {register as registerSwiperElements} from 'swiper/element/bundle';
registerSwiperElements();

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [CommonModule, IonHeader, IonToolbar, IonTitle, IonContent,
    IonAvatar, IonLabel, IonChip, IonIcon, IonModal, IonCard, IonCardHeader, IonCardTitle, 
    IonCardContent, IonButton],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class HomePage {
  isAuth: boolean = (localStorage.getItem("email") !== null && localStorage.getItem("password") !== "");
  userName = localStorage.getItem("email") ?? "";

  cards = [
    {
      id:1, 
      title:'1', description:'El nacimiento', 
      imageUrl:'https://cloudfront-us-east-1.images.arcpublishing.com/copesa/AWZCXRQ2GNBCNEEMYD6CBRQYX4.jpg'
    },
    {
      id:1, 
      title:'2', 
      description:'El más icónico', 
      imageUrl:'https://hips.hearstapps.com/hmg-prod/images/spider-man-memes-no-way-home-1647684597.jpg'

    },
    {
      id:1, 
      title:'3', 
      description:'Mi favorito', 
      imageUrl:'https://es.gizmodo.com/app/uploads/2023/04/6be06723a00cb678d26d863e052ff879.jpg'

    },
    {
      id:1, 
      title:'3.1', 
      description:'Mi favorito', 
      imageUrl:'https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2020/07/spider-man-miles-morales-ps5-2002167.jpg?tf=3840x'

    }
  ];
  selectedImage: string = ''; // Guardamos la imagen seleccionada

   sliderItems = [
    {
      title: 'Slide 1', 
      description: 'Descripción del primer slide.', 
      image: 'https://tdart.b-cdn.net/images/art/985_120923235331PjB1AlT7rr.jpg',
    },
    {
      title: 'Slide 2',
      description: 'Descripción del segundo slide.',
      image: 'https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2018/12/spider-man-nuevo-universo-spider-ham.jpg?tf=1200x1200',
    },
    {
      title: 'Slide 3',
      description: 'Descripción del tercer slide.',
      image: 'https://pm1.aminoapps.com/7380/9b7f89aa88015c2b56e6cdeccdb8e3e79e94b35fr1-1024-2048v2_00.jpg',
    },
  ]; 

  ismodalOpen: boolean = false
  @ViewChild('logoutModal') logoutModal!: IonModal;
  @ViewChild('greetingModal', { static: false }) greetingModal!: IonModal;
  @ViewChild('imageModal') imageModal!: IonModal;

  ngAfterViewInit() {
    setTimeout(() => {
      const shouldShowGreeting = localStorage.getItem("showGreeting");
      if (shouldShowGreeting === "true") {
        localStorage.removeItem("showGreeting");
        this.greeting();
      }
    }, 500);
  }

  constructor(private navController: NavController) {
  }

  async logout() {
    const email = localStorage.getItem("email");
    const password = localStorage.getItem("password");

    this.isAuth = (email !== null && password !== null);
    
    localStorage.removeItem("email");
    localStorage.removeItem("password");

    await this.logoutModal.present();

    if (this.logoutModal) {
      setTimeout(async () => {
        await this.logoutModal.dismiss();
        this.navController.navigateRoot('/login'); 
      }, 500);
    }
  }

  async greeting() {
    await this.greetingModal.present();
    setTimeout(async () => {
      await this.greetingModal.dismiss();
    }, 1000);
  }

  async imageOpenModal(image: string) {
    this.selectedImage = image; // Guardamos la imagen seleccionada
    await this.imageModal.present(); // Mostramos el modal
  }

  navigateTo(route: string) {
    this.navController.navigateRoot(route);
  }
}
