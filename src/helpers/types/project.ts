type CategoryTypes =
  | "Web Application"
  | "Mobile Application"
  | "Library"

export type ProjectTypes = {
  id: number;
  title: string;
  url: string;
  category: CategoryTypes[];
  publishDate: string;
  images: string[];
  content: string;
  info: {
    technologies: {
      title: string;
      techs: string[];
    }[];
    features: {
      title: string;
      feature: string[];
    }[];
  };
};
