import { getSoftskills } from '@/services';
import { useQuery } from '@tanstack/react-query';

export const useSoftskillsQuery = () => {
    const { data, isLoading, error, isError } = useQuery({
        queryKey: ['softskills'],
        queryFn: () => getSoftskills(),
    });
    return { data, isLoading, error, isError };
};