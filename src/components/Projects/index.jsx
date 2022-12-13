import React from 'react'
import * as S from './style'
import { CardProject } from '../CardProject'
import { Modal } from '../Modal'

export const Projects = () => {

  const [data, setData] = React.useState([])
  const [projectID, setProjectID] = React.useState('')

  async function GetBanner() {
    await fetch('https://my-json-server.typicode.com/renovatt/portfolio/projects')
      .then(res => res.json())
      .then(json => setData(json))
  }

  React.useEffect(() => {
    GetBanner()
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
