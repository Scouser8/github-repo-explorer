import { Box } from "@mui/material";
import Repository from "./Repository";

type Props = { repositories: Repository[]; refetchRepositories: Function };

const RepositoriesList = (props: Props) => {
  const { repositories, refetchRepositories } = props;
  return (
    <Box>
      {repositories.map((repo) => (
        <Repository
          repository={repo}
          refetchRepositories={refetchRepositories}
        />
      ))}
    </Box>
  );
};

export default RepositoriesList;
