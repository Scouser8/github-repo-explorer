import { Box } from "@mui/material";
import Repository from "./Repository";
import { memo } from "react";

type Props = {
  repositories: Repository[];
  starredRepositories: Record<string, boolean>;
  refetchRepositories: Function;
};

const RepositoriesList = (props: Props) => {
  const { repositories, starredRepositories, refetchRepositories } = props;

  return (
    <Box>
      {repositories.map((repo) => (
        <Repository
          key={repo.id}
          repository={repo}
          refetchRepositories={refetchRepositories}
          isStarred={starredRepositories[repo.full_name]}
        />
      ))}
    </Box>
  );
};

export default memo(RepositoriesList);
