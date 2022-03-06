type PostId = number;
type IsoDate = string;
type ImgSrc = string;

export interface Post {
  id: PostId;
  img: ImgSrc;
  date: IsoDate;
  title: string;
  author: string;
  body: string;
}
