import { useQuery } from 'react-query';
import { QUERY_KEY } from '../../constants';

import { isUserInWhitelisted, fetchMintableNft } from '../../services';

export const useCheckUserIsInWhitelist = (web3Instance, projectContract, options) => {
  const result = useQuery(
    [QUERY_KEY.CHECK_USER_WHITELIST, projectContract],
    isUserInWhitelisted(web3Instance, projectContract),
    {
      enabled: !!web3Instance && !!projectContract,
      ...options,
    }
  );
  return result;
};

export const useGetMintableNftQuery = (web3Instance, projectContract, options) => {
  const result = useQuery(
    [QUERY_KEY.MINTABLE_NFT, projectContract],
    fetchMintableNft(web3Instance, projectContract),
    {
      enabled: !!web3Instance && !!projectContract,
      ...options,
    }
  );
  return result;
};
