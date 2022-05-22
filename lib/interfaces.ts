export interface RandomUserSchema {
  name: {
    first: string;
    last: string;
    title: string;
  };
  gender: string;
  email: string;
  login: {
    username: string;
  };
  registered: {
    date: string;
  };
}

export interface ResponseRandomUserSchema {
  results: RandomUserSchema[];
  info: {
    results: number;
    seed: string;
    page: number;
    version: string;
  };
}
