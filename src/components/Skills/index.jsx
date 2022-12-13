import React from 'react'
import { FaHtml5, FaCss3Alt, FaGithub, FaGitAlt, FaReact } from 'react-icons/fa'
import { SiJavascript } from 'react-icons/si'
import { DefaultDescription } from './SkillsDescriptions/DefaultDescription'
import { HtmlDescription } from './SkillsDescriptions/HtmlDescription'
import { CssDescription } from './SkillsDescriptions/CssDescription'
import { JavaScriptDescription } from './SkillsDescriptions/JavaScriptDescription'
import { ReactDescription } from './SkillsDescriptions/ReactDescription'
import { GitDescription } from './SkillsDescriptions/GitDescription'
import { GitHubDescription } from './SkillsDescriptions/GitHubDescription'
import * as S from './style'

export const Skills = () => {

  const url = 'https://my-json-server.typicode.com/renovatt/portfolio/softskills'
  const [isdefault, setDefault] = React.useState(true);
  const [htmlHovered, setHtmlHovered] = React.useState(false);
  const [cssHovered, setCssHovered] = React.useState(false);
  const [jsHovered, setJSHovered] = React.useState(false);
  const [reactHovered, setReactHovered] = React.useState(false);
  const [gitHovered, setGitHovered] = React.useState(false);
  const [githubHovered, setGitHubHovered] = React.useState(false);
  const [data, setData] = React.useState([])
  const [loading, setLoading] = React.useState(false)
  const [error, setError] = React.useState(false)

  const getSoftSkills = async () => {
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
    getSoftSkills()
  }, [])

  return (
    <S.SkillsContainer>
      <S.HardSkills>
        <S.SkillsIcons>
          <S.Link
            onMouseOver={() => {
              setHtmlHovered(true)
              setDefault(false)
            }}
            onMouseOut={() => {
              setHtmlHovered(false)
              setDefault(true)
            }}><FaHtml5 /></S.Link>

          <S.Link
            onMouseOver={() => {
              setCssHovered(true)
              setDefault(false)
            }}
            onMouseOut={() => {
              setCssHovered(false)
              setDefault(true)
            }}><FaCss3Alt /></S.Link>

          <S.Link
            onMouseOver={() => {
              setJSHovered(true)
              setDefault(false)
            }}
            onMouseOut={() => {
              setJSHovered(false)
              setDefault(true)
            }}><SiJavascript /></S.Link>

          <S.Link
            onMouseOver={() => {
              setReactHovered(true)
              setDefault(false)
            }}
            onMouseOut={() => {
              setReactHovered(false)
              setDefault(true)
            }}><FaReact /></S.Link>

          <S.Link
            onMouseOver={() => {
              setGitHovered(true)
              setDefault(false)
            }}
            onMouseOut={() => {
              setGitHovered(false)
              setDefault(true)
            }}><FaGitAlt /></S.Link>


          <S.Link
            onMouseOver={() => {
              setGitHubHovered(true)
              setDefault(false)
            }}
            onMouseOut={() => {
              setGitHubHovered(false)
              setDefault(true)
            }}><FaGithub /></S.Link>
        </S.SkillsIcons>

        <S.SkillsDescription>
          {isdefault && <DefaultDescription />}
          {htmlHovered && <HtmlDescription />}
          {cssHovered && <CssDescription />}
          {jsHovered && <JavaScriptDescription />}
          {reactHovered && <ReactDescription />}
          {gitHovered && <GitDescription />}
          {githubHovered && <GitHubDescription />}
        </S.SkillsDescription>
      </S.HardSkills>

      <S.SoftSkills>
        <S.SoftTitle>SoftSkills</S.SoftTitle>
        <S.SoftListContainer>
          {data && data.map(softskill => (
            <S.SoftList key={softskill.id}>{softskill.name}</S.SoftList>
          ))}
        </S.SoftListContainer>
      </S.SoftSkills>
    </S.SkillsContainer >
  )
}