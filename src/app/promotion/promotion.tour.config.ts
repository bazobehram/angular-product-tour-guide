export const STEPS_BUTTONS = {
  back: {
    classes: 'back-button',
    secondary: true,
    text: 'Back',
    type: 'back',
  },
  cancel: {
    classes: 'cancel-button',
    secondary: true,
    text: 'Exit',
    type: 'cancel',
  },
  next: {
    classes: 'next-button',
    text: 'Next',
    type: 'next',
  },
};

export const defaultStepOptions = {
  classes: 'shepherd-theme-arrows custom-default-class',
  scrollTo: true,
  cancelIcon: {
    enabled: true,
  },
};

export const steps = [
  {
    attachTo: {
      element: 'header h1',
      on: 'bottom',
    },
    buttons: [STEPS_BUTTONS.cancel, STEPS_BUTTONS.back, STEPS_BUTTONS.next],
    classes: 'custom-class-name-1 custom-class-name-2',
    id: 'welcome',
    title: 'Welcome to Our Exclusive Promotion Tour!',
    text: '',
  },
  {
    attachTo: {
      element: '.promo-section:nth-child(1) h2',
      on: 'bottom',
    },
    buttons: [STEPS_BUTTONS.cancel, STEPS_BUTTONS.back, STEPS_BUTTONS.next],
    classes: 'custom-class-name-1 custom-class-name-2',
    id: 'discover-paradise',
    title: 'Discover Paradise',
    text: 'Join us for an unforgettable journey to a tropical paradise. Relax on pristine beaches, explore lush jungles, and savor delicious local cuisine. Book now and get 20% off your trip!',
  },
  {
    attachTo: {
      element: '.promo-section:nth-child(2) h2',
      on: 'bottom',
    },
    buttons: [STEPS_BUTTONS.cancel, STEPS_BUTTONS.back, STEPS_BUTTONS.next],
    classes: 'custom-class-name-1 custom-class-name-2',
    id: 'adventure-awaits',
    title: 'Adventure Awaits',
    text: "Embark on thrilling adventures, from hiking to zip-lining. Our expert guides will ensure you have a safe and exhilarating experience. Don't miss out on this amazing opportunity!",
  },
  {
    attachTo: {
      element: '.promo-section:nth-child(3) h2',
      on: 'bottom',
    },
    buttons: [STEPS_BUTTONS.cancel, STEPS_BUTTONS.back, STEPS_BUTTONS.next],
    classes: 'custom-class-name-1 custom-class-name-2',
    id: 'luxury-stay',
    title: 'Luxury Stay',
    text: 'Indulge in luxury accommodations with stunning ocean views. Enjoy spa treatments, gourmet dining, and personalized service. Your dream vacation awaits you!',
  },
  {
    attachTo: {
      element: '#booking h2',
      on: 'top',
    },
    buttons: [STEPS_BUTTONS.cancel, STEPS_BUTTONS.back, STEPS_BUTTONS.next],
    classes: 'custom-class-name-1 custom-class-name-2',
    id: 'booking',
    title: 'Book Your Adventure Today!',
    text: "Fill out the form below to reserve your spot on our exclusive promotion tour. Don't miss this opportunity of a lifetime!",
  },
  {
    attachTo: {
      element: 'footer',
      on: 'top',
    },
    buttons: [STEPS_BUTTONS.back, STEPS_BUTTONS.cancel],
    classes: 'custom-class-name-1 custom-class-name-2',
    id: 'footer',
    title: 'Fake Promotion Tours',
    text: '© 2023 Fake Promotion Tours. All rights reserved.',
  },
];
