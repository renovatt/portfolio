import React from 'react'
import * as S from './style'
import { FaHtml5, FaCss3Alt, FaGithub, FaGitAlt, FaReact } from 'react-icons/fa'
import { SiJavascript, SiNextdotjs, SiStyledcomponents, SiTypescript } from 'react-icons/si'
import { DefaultDescription } from './DefaultDescription'
import { SkillDescripton } from './SkillDescripton'
import { SkillsTypeProps, SoftskillsTypeProps, IconMapPros } from '../../@types'
import { BASE_URL } from '../../services'

export const Skills = () => {
  // const skills_url = 'https://my-json-server.typicode.com/renovatt/portfolio/skills'
  // const softskills_url = 'https://my-json-server.typicode.com/renovatt/portfolio/softskills'

  const [error, setError] = React.useState(false)
  const [loading, setLoading] = React.useState(false)
  const [skillsResponse, setSkillsResponse] = React.useState<SkillsTypeProps[]>([])
  const [softSkillsResponse, setSoftSkillsResponse] = React.useState<SoftskillsTypeProps[]>([])

  const [status, setStatus] = React.useState({
    isDefault: true,
    isHovered: false,
    skillId: '',
  });

  const ICONS: IconMapPros = {
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

  const svgRender = (skillSvg: string) => {
    return ICONS[skillSvg] || null;
  };

  const fetchData = async () => {
    setLoading(true);
    setError(false);
    try {
      const softSkillResponse = await fetch(`${BASE_URL}/softskills`);
      const softSkillJsonResponse = await softSkillResponse.json();
      setSoftSkillsResponse(softSkillJsonResponse.softskills);

      const skillsResponse = await fetch(`${BASE_URL}/skills`);
      const skillsJsonResponse = await skillsResponse.json();
      setSkillsResponse(skillsJsonResponse.skills);

    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    fetchData()
  }, [])

  const renderSkillIcon = (skill: SkillsTypeProps) => {
    const { id, svg } = skill;

    return (
      <S.Link
        key={id}
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
      <S.SoftList key={softskill.id}>{softskill.softskill_name}</S.SoftList>
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