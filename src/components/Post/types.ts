interface User {
  username: string;
  avatar?: string;
}

export interface PostProps {
  img: string;
  author: User;
  description: string;
  place?: string;
  liked: boolean;
  saved: boolean;
  likes: number;
  date: Date;
}
