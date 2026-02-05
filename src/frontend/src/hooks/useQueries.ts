import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useActor } from './useActor';
import type { UserProfile, UserRole, Inquiry } from '../backend';
import { formatInquiryForBackend } from '../components/inquiry/inquiryMapping';

export function useGetCallerUserProfile() {
  const { actor, isFetching: actorFetching } = useActor();

  const query = useQuery<UserProfile | null>({
    queryKey: ['currentUserProfile'],
    queryFn: async () => {
      if (!actor) throw new Error('Actor not available');
      return actor.getCallerUserProfile();
    },
    enabled: !!actor && !actorFetching,
    retry: false,
  });

  return {
    ...query,
    isLoading: actorFetching || query.isLoading,
    isFetched: !!actor && query.isFetched,
  };
}

export function useSaveCallerUserProfile() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (profile: UserProfile) => {
      if (!actor) throw new Error('Actor not available');
      return actor.saveCallerUserProfile(profile);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['currentUserProfile'] });
    },
  });
}

export function useGetCallerUserRole() {
  const { actor, isFetching: actorFetching } = useActor();

  return useQuery<UserRole>({
    queryKey: ['callerUserRole'],
    queryFn: async () => {
      if (!actor) throw new Error('Actor not available');
      return actor.getCallerUserRole();
    },
    enabled: !!actor && !actorFetching,
  });
}

interface InquiryFormData {
  name: string;
  company: string;
  email: string;
  phone: string;
  inquiryType: 'Buy' | 'Sell' | 'Partnership';
  location: string;
  quantity: string;
  message: string;
}

export function useCreateInquiry() {
  const { actor } = useActor();

  return useMutation({
    mutationFn: async (formData: InquiryFormData) => {
      if (!actor) throw new Error('Actor not available');
      const inquiryInput = formatInquiryForBackend(formData);
      return actor.createInquiry(inquiryInput);
    },
  });
}

export function useListInquiries() {
  const { actor, isFetching: actorFetching } = useActor();

  return useQuery<Inquiry[]>({
    queryKey: ['inquiries'],
    queryFn: async () => {
      if (!actor) throw new Error('Actor not available');
      return actor.listInquiries();
    },
    enabled: !!actor && !actorFetching,
  });
}

export function useGetInquiry(id: bigint) {
  const { actor, isFetching: actorFetching } = useActor();

  return useQuery<Inquiry | null>({
    queryKey: ['inquiry', id.toString()],
    queryFn: async () => {
      if (!actor) throw new Error('Actor not available');
      return actor.getInquiry(id);
    },
    enabled: !!actor && !actorFetching && id > 0n,
  });
}
