type RepositoryOwner = {
  id: number;
  login: string;
};

type Repository = {
  id: number;
  name: string;
  full_name: string;
  description: string;
  forks: number;
  stargazers_count: number;
  owner: RepositoryOwner;
};
