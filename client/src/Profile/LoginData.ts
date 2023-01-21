export interface LoginData {
  userId: number;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

export interface PostLoginData {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

const logins: LoginData[] = [
  {
    userId: 1,
    email: 'dexter@gmail.com',
    password: '1234',
    firstName: 'Dexter',
    lastName: 'Stephens',
  },
  {
    userId: 2,
    email: 'jack@gmail.com',
    password: '12345',
    firstName: 'Jack',
    lastName: 'Huish',
  },
  {
    userId: 3,
    email: 'kemri@gmail.com',
    password: '123456',
    firstName: 'Kemri',
    lastName: 'Stephens',
  },
  {
    userId: 4,
    email: 'blake@gmail.com',
    password: '1234567',
    firstName: 'Blake',
    lastName: 'Perriera',
  },
];

const wait = (ms: number): Promise<void> => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

export const PostUser = async (
  login: PostLoginData,
): Promise<LoginData | undefined> => {
  await wait(500);
  const userId = Math.max(...logins.map((l) => l.userId)) + 1;
  const newLogin: LoginData = {
    ...login,
    userId: userId,
  };
  logins.push(newLogin);
  return newLogin;
};
