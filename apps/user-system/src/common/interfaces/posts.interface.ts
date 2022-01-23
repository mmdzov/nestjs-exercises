export interface IPostLikeSchema {
  post_id: number;
  from_user_id: number;
  liked: boolean;
}

export interface IPostSchema {
  title: string;
  subtitle: string;
  text: string;
  likes: IPostLikeSchema[];
  date: string;
  date_update: string;
}
