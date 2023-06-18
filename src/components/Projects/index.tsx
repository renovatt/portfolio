import React from 'react'
import * as S from './style'
import { CardProject } from '../CardProject'
import { Loading } from '../Helper/Loading'
import { Error } from '../Helper/Error'
import { ProjectsTypeProps } from '../../@types'

export const Projects = () => {

  // const local_url = "http://localhost:5000/projects"
  const url = 'https://my-json-server.typicode.com/renovatt/portfolio/projects'
  const [projects, setProjects] = React.useState<ProjectsTypeProps[]>([])
  const [loading, setLoading] = React.useState(false)
  const [error, setError] = React.useState(false)

  const getBanner = async () => {
    setLoading(true)
    try {
      await fetch(url)
        .then(res => res.json())
        .then(json => setProjects(json))
    } catch {
      setError(true)
    } finally {
      setLoading(false)
    }
  }

  React.useEffect(() => {
    getBanner()
  }, [])

  return (
    <>
      {error && <Error />}
      {loading && <Loading />}
      <S.ProjectsContainer>
        {projects && projects.map(banner => (
          <CardProject
            id={banner.id}
            key={banner.id}
            name={banner.name}
            link={banner.link}
            banner={banner.banner}
            thumbnail={banner.banner}
            description={banner.description}
            techs={banner.techs}
          />
        ))}
      </S.ProjectsContainer>
    </>


  )
}
