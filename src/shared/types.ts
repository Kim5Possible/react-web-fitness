export enum Pages {
  Home = "home",
  Benefits = "benefits",
  OurClasses = "ourclasses",
  ContactUs = "contactus",
}

export interface BenefitsType {
  icon: JSX.Element;
  title: string;
  description: string;
}

export interface ClassesType {
  name: string;
  description?: string;
  image: string;
}
