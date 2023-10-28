export interface Welcome {
  query: string;
  result: Result[];
  ms: number;
}

export interface Result {
  _type: string;
  _id: string;
  title: string;
  Category: string;
  _createdAt: Date;
  _rev: string;
  _updatedAt: Date;
  featured_image: FeaturedImage;
  content: string;
  Excerpt: string;
}

export interface FeaturedImage {
  asset: Asset;
  _type: string;
}

export interface Asset {
  _ref: string;
  _type: string;
}
