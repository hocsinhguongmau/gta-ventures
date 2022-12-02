import { useQuery } from 'react-query';
import { QUERY_KEY } from '../../constants';

import { isUserInWhitelisted, checkClaimPass } from '../../services';

export const useCheckUserIsInWhitelist = (web3Instance, options) => {
  const result = useQuery([QUERY_KEY.CHECK_USER_WHITELIST], isUserInWhitelisted(web3Instance), {
    enabled: !!web3Instance,
    ...options,
  });
  return result;
};

export const useCheckClaimPass = (web3Instance, options) => {
  const result = useQuery([QUERY_KEY.CHECK_CLAIM_PASS], checkClaimPass(web3Instance), {
    enabled: !!web3Instance,
    ...options,
  });
  return result;
};
