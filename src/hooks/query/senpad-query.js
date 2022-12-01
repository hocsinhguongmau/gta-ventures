import { useQuery } from 'react-query';
import { QUERY_KEY } from '../../constants';

import { isUserInWhitelisted } from '../../services';

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
