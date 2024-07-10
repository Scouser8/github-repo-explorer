import { Box } from "@mui/material";
import Repository from "./Repository";
import { memo } from "react";
import { useRepositoryStore } from "../../store";

type Props = { refetchRepositories: Function };

const RepositoriesList = (props: Props) => {
  const { refetchRepositories } = props;

  const { searchResults, starredRepositories } = useRepositoryStore(
    (state) => state
  );

  const starredReposMap = starredRepositories?.reduce(
    (acc: Record<string, boolean>, current: Repository) => {
      const newMap = { ...acc };
      newMap[current.full_name] = true;
      return newMap;
    },
    {}
  );
  return (
    <Box>
      {searchResults.map((repo) => (
        <Repository
          key={repo.id}
          repository={repo}
          refetchRepositories={refetchRepositories}
          isStarred={starredReposMap[repo.full_name]}
        />
      ))}
    </Box>
  );
};

export default memo(RepositoriesList);
