'use client'

import React from 'react';
import Softskills from './Softskills';
import SkillsIcons from './SkillsIcons';
import useFetchData from '@/hooks/useFetchData';
import { SkillsDescriptions } from './SkillsDescriptions';
import { SkillsDefaultDescription } from './SkillsDefaultDescription';
import SmallLoader from './Helper/SmallLoader';
import SpinerLoader from './Helper/SpinerLoader';

export const SkillsWithSoftskills = () => {
  const {
    error,
    loading,
    skillsResponse,
    softSkillsResponse
  } = useFetchData()

  const [status, setStatus] = React.useState({
    isDefault: true,
    isHovered: false,
    skillId: '',
  });

  const handleSkillIconHover = (id: string) => {
    setStatus((prevStatus) => ({
      ...prevStatus,
      isHovered: true,
      skillId: id,
      isDefault: false,
    }));
  };

  const handleSkillIconLeave = () => {
    setStatus((prevStatus) => ({
      ...prevStatus,
      isHovered: false,
      skillId: '',
      isDefault: true,
    }));
  };

  const renderTechsIcons = () => {
    if (loading) {
      return <SpinerLoader />
    }

    return skillsResponse.map((skill) => (
      <SkillsIcons
        key={skill.id}
        skill={skill}
        loading={loading}
        error={error}
        onMouseOut={handleSkillIconLeave}
        onMouseOver={() => handleSkillIconHover(skill.id)}
      />
    ));
  };

  const renderSkillDescription = () => {
    const skill = skillsResponse
      .find(skill => skill.id === status.skillId);

    if (!status.isHovered && status.isDefault) {
      return (
        <SkillsDefaultDescription
          error={error}
          loading={loading}
        />
      );
    }

    if (status.isHovered && skill) {
      return (
        <SkillsDescriptions
          key={skill.id}
          skill={skill}
          error={error}
          loading={loading}
        />
      );
    }
  };

  const renderSoftSkillList = () => {
    if (loading) {
      return <SmallLoader />
    }

    return softSkillsResponse.map((softskill) => (
      <Softskills
        key={softskill.id}
        softskill={softskill}
        loading={loading}
        error={error}
      />
    ));
  };

  return (
    <section className='flex justify-around flex-col h-auto md:w-full mb-16 mb:mb-8 max-w-[1400px] animate-fade transition-all'>
      <section className='flex items-center justify-between m-8 md:my-8 h-full flex-col md:flex-row'>
        <aside className='grid grid-cols-3 md:grid-cols-3 grid-rows-2 gap-8 md:w-[30%] w-auto md:mb-0 mb-8'>
          {renderTechsIcons()}
        </aside>

        <aside className='flex justify-center items-center bg-backgroundThird h-auto md:h-80 w-auto md:w-[50%] md:p-8 overflow-hidden'>
          {renderSkillDescription()}
        </aside>
      </section>

      <section className='flex items-center justify-center flex-col my-0 mx-8 py-2 px-3 h-full bg-backgroundThird'>
        <span className='grid grid-cols-3 md:grid-cols-6 lg:grid-cols-8 items-center'>
          {renderSoftSkillList()}
        </span>
      </section>
    </section>
  );
};
