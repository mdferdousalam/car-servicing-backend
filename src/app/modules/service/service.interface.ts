export interface IService {
  name: string;
  description: string;
  price: number;
  image: string;
  duration: number;
  isDeleted: boolean;
  createdAt: Date;
  updatedAt: Date;
}
