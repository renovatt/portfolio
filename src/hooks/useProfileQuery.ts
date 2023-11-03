import { getProfile } from 'services'
import { useQuery } from '@tanstack/react-query'

export const useProfileQuery = () => {
  const { data, isLoading, error, isError } = useQuery({
    queryKey: ['profile'],
    queryFn: () => getProfile(),
  })
  return { data, isLoading, error, isError }
}
