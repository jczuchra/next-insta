interface User {
  username: string;
  avatar?: string;
}

export interface PostProps {
  img: string;
  author: User;
  _description: string;
  place?: string;
  liked: boolean;
  saved: boolean;
  likes: number;
  _date: Date;
}
