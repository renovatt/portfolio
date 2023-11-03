import { getProjects } from 'services'
import { useQuery } from '@tanstack/react-query'

export const useProjectsQuery = () => {
  const { data, isLoading, error, isError } = useQuery({
    queryKey: ['projects'],
    queryFn: () => getProjects(),
  })
  return { data, isLoading, error, isError }
}
