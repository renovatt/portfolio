import React from 'react'
import * as S from './style'
import { FaHtml5, FaCss3Alt, FaGithub, FaGitAlt, FaReact } from 'react-icons/fa'
import { SiJavascript, SiNextdotjs, SiStyledcomponents, SiTypescript } from 'react-icons/si'
import { DefaultDescription } from './DefaultDescription'
import { SkillDescripton } from './SkillDescripton'

export const Skills = () => {
  const softskills_url = 'https://my-json-server.typicode.com/renovatt/portfolio/softskills'
  const skills_url = 'https://my-json-server.typicode.com/renovatt/portfolio/skills'

  const [error, setError] = React.useState(false)
  const [loading, setLoading] = React.useState(false)
  const [skillsResponse, setSkillsResponse] = React.useState([])
  const [softSkillsResponse, setSoftSkillsResponse] = React.useState([])

  const [status, setStatus] = React.useState({
    isDefault: true,
    isHovered: false,
    skillId: '',
  });

  const ICONS = {
    FaHtml5: <FaHtml5 />,
    FaCss3Alt: <FaCss3Alt />,
    SiJavascript: <SiJavascript />,
    SiTypescript: <SiTypescript />,
    FaReact: <FaReact />,
    SiNextdotjs: <SiNextdotjs />,
    SiStyledcomponents: <SiStyledcomponents />,
    FaGithub: <FaGithub />,
    FaGitAlt: <FaGitAlt />,
  };

  const svgRender = (skillSvg) => {
    return ICONS[skillSvg] || null;
  };

  const fetchData = async () => {
    setLoading(true);
    setError(false);
    try {
      const softSkillResponse = await fetch(softskills_url);
      const softSkillJsonResponse = await softSkillResponse.json();
      setSoftSkillsResponse(softSkillJsonResponse);

      const skillsResponse = await fetch(skills_url);
      const skillsJsonResponse = await skillsResponse.json();
      setSkillsResponse(skillsJsonResponse);

    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    fetchData()
  }, [])

  const renderSkillIcon = (skill) => {
    const { id, link, svg } = skill;

    return (
      <S.Link
        key={id}
        href={link}
        target="_blank"
        onMouseOver={() => setStatus({ ...status, isHovered: true, skillId: id, isDefault: false })}
        onMouseOut={() => setStatus({ ...status, isHovered: false, skillId: '', isDefault: true })}
      >
        {svgRender(svg)}
      </S.Link >
    );
  };

  const renderSkillDescription = () => {
    if (loading) return <S.Loading>Carregando..</S.Loading>;
    if (error) return <S.Error>Algo deu errado, por favor atualize a página.</S.Error>;
    if (!status.isHovered && status.isDefault) return <DefaultDescription />;

    const skill = skillsResponse.find((skill) => skill.id === status.skillId);

    if (status.isHovered && skill) {
      return (
        <SkillDescripton
          key={skill.id}
          skillName={skill.skill_name}
          skillDescription={skill.description}
        />
      );
    }

    return null;
  };

  const renderSoftSkillList = () => {
    if (loading) return <S.Loading>Carregando..</S.Loading>;
    if (error) return <S.Error>Algo deu errado, por favor atualize a página.</S.Error>;

    return softSkillsResponse.map((softskill) => (
      <S.SoftList key={softskill.id}>{softskill.name}</S.SoftList>
    ));
  };

  return (
    <S.SkillsContainer>
      <S.HardSkills>
        <S.SkillsIcons>
          {skillsResponse.map((skill) => renderSkillIcon(skill))}
        </S.SkillsIcons>

        <S.SkillsDescription>{renderSkillDescription()}</S.SkillsDescription>
      </S.HardSkills>

      <S.SoftSkills>
        <S.SoftTitle>SoftSkills</S.SoftTitle>
        <S.SoftListContainer>{renderSoftSkillList()}</S.SoftListContainer>
      </S.SoftSkills>
    </S.SkillsContainer>
  );
}