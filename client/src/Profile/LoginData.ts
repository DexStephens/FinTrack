export interface UserData {
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

export interface CheckLoginData {
  email: string;
  password: string;
}

const users: UserData[] = [
  {
    userId: 1,
    email: 'dexter@gmail.com',
    password: 'abcdeF1!',
    firstName: 'Dexter',
    lastName: 'Stephens',
  },
  {
    userId: 2,
    email: 'jack@gmail.com',
    password: '12345aB#',
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
): Promise<UserData | undefined> => {
  await wait(500);
  const userId = Math.max(...users.map((l) => l.userId)) + 1;
  const newLogin: UserData = {
    ...login,
    userId: userId,
  };
  users.push(newLogin);
  return newLogin;
};

export const CheckLogin = async (
  login: CheckLoginData,
): Promise<UserData | undefined> => {
  debugger;
  await wait(500);
  const userPresent = users.find(
    (l) => l.email === login.email && l.password === login.password,
  );
  if (userPresent === undefined) {
    return undefined;
  }
  return userPresent;
};
