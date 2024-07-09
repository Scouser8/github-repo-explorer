import { ForkLeft, Star } from "@mui/icons-material";
import { Box, Button, Typography } from "@mui/material";
import { useState } from "react";
import axios from "../../axios";
import { STAR_UNSTAR_REPOSITORY_URL } from "../../constants";
import { toast } from "react-toastify";

type Props = { repository: Repository; refetchRepositories: Function };

const Repository = (props: Props) => {
  const { repository, refetchRepositories } = props;
  const [isStarred, setIsStarred] = useState(false);

  const repositoryOwner = repository.owner.login;

  const starButtonText = isStarred ? "Unstar" : "Star";

  const handleStarAndUnstar = async () => {
    const url = `${STAR_UNSTAR_REPOSITORY_URL}/${repositoryOwner}/${repository.name}`;
    if (isStarred) {
      await axios.delete(url);
    } else {
      await axios.put(
        url,
        {},
        { headers: { "X-GitHub-Api-Version": "2022-11-28" } }
      );
    }
    const message = `${repository.name} ${
      !!isStarred ? "unstarred" : "starred"
    } successfully!`;
    toast.success(message);
    setIsStarred((starred) => !starred);
    refetchRepositories();
  };
  return (
    <Box className="border-2 rounded mt-4 px-4 py-2 flex justify-between items-center">
      <Box className="w-5/6">
        <Box className="flex items-center text-cyan-800">
          <Typography variant="h6">{repository.name},&nbsp;</Typography>
          <p className="font-sans text-lg">{`Owned by ${repositoryOwner}`}</p>
        </Box>
        <p className="font-sans text-sm">{repository.description}</p>
        <Box className="flex mt-2 text-xs gap-2">
          <p className="flex items-center gap-1">
            <Star /> {repository.stargazers_count}
          </p>
          <p className="flex items-center">
            <ForkLeft /> {repository.forks}
          </p>
        </Box>
      </Box>
      <Button
        className="h-fit"
        startIcon={<Star />}
        variant="outlined"
        onClick={handleStarAndUnstar}
      >
        {starButtonText}
      </Button>
    </Box>
  );
};

export default Repository;
