import React from 'react'
import * as S from './style'
import { CardProject } from '../CardProject'
import { Modal } from '../Modal'
import { Loading } from '../Helper/Loading'
import { Error } from '../Helper/Error'

export const Projects = () => {
  const url = 'https://my-json-server.typicode.com/renovatt/portfolio/projects'
  const [data, setData] = React.useState([])
  const [projectID, setProjectID] = React.useState('')
  const [loading, setLoading] = React.useState(false)
  const [error, setError] = React.useState(false)

  const getBanner = async () => {
    setLoading(true)
    try {
      await fetch(url)
        .then(res => res.json())
        .then(json => setData(json))
    } catch {
      setError(true)
    } finally {
      setLoading(false)
    }
  }

  React.useEffect(() => {
    getBanner()
  }, [])

  React.useEffect(() => {
    function handleModalClick(e) {
      setProjectID(e.target.id)
    }

    window.addEventListener('click', handleModalClick)
    return () => {
      window.removeEventListener('click', handleModalClick)
    }
  }, [])

  return (
    <>
      {error && <Error />}
      {loading && <Loading />}
      {projectID && <Modal id={projectID} />}
      <S.ProjectsContainer>
        {data && data.map(banner => (
          <CardProject
            id={banner.id}
            key={banner.id}
            name={banner.name}
            banner={banner.banner} />
        ))}
      </S.ProjectsContainer>
    </>


  )
}
