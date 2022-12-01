import { useMutation } from 'react-query';
import { claimTicket, sendApproveTicketRequest } from '../../services';

export const useClaimTicketMutation = (options) => {
  const mutation = useMutation(
    (params) => claimTicket(params.web3, params.projectContract),
    options
  );
  return mutation;
};

export const useApproveTicketMutation = (options) => {
  const mutation = useMutation(
    (params) => sendApproveTicketRequest(params.web3, params.projectContract),
    options
  );
  return mutation;
};
