import { useMutation } from 'react-query';
import { claimPass } from '../../services';

export const useClaimTicketMutation = (options) => {
  const mutation = useMutation((params) => claimPass(params.web3), options);
  return mutation;
};
