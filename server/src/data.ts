/* eslint-disable prettier/prettier */

export enum Star {
  star_1 = '1',
  star_2 = '2',
  star_3 = '3',
  star_4 = '4',
  star_5 = '5',
}
// interface User {
//   id: string;
//   msv: number;
//   userName: string;
//   password: string;
//   course: number;
//   avatarUrl: string;
// }
interface Data {
  data: {
    id: string;
    title: string;
    description: string;
    image: string;
    star: Star;
    // author: User;
    created_at: Date;
    updated_at: Date;
  }[];
}
export const data: Data = {
  data: [
    {
      id: 'uuid1',
      title: 'java',
      description: 'java description',
      image: 'http://visualcpp.net/wp-content/uploads/2019/10/cpp_avatar.jpg',
      star: Star.star_2,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      id: 'uuid2',
      title: 'php',
      description: 'php description',
      image: 'http://visualcpp.net/wp-content/uploads/2019/10/cpp_avatar.jpg',
      star: Star.star_2,
      created_at: new Date(),
      updated_at: new Date(),
    },
  ],
};

data.data.push({
  id: 'uuid',
  title: 'c++',
  description: 'c++ description',
  image: 'http://visualcpp.net/wp-content/uploads/2019/10/cpp_avatar.jpg',
  star: Star.star_1,
  created_at: new Date(),
  updated_at: new Date(),
});
