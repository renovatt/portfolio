import React from 'react';
import {
    getProfile,
    getProjects,
    getSkills,
    getSoftskills
} from '@/services';
import {
    ProfileProps,
    ProjectsTypeProps,
    SkillsTypeProps,
    SoftskillsTypeProps
} from '@/@types';

const thumbnail = 'https://raw.githubusercontent.com/renovatt/portfolio/main/public/thumbnails/tree.png'

export const initialValue: ProjectsTypeProps = {
    id: '',
    order: 0,
    project_name: '',
    deploy_url: '',
    banner_url: '',
    thumbnail_url: thumbnail,
    description: '',
    techs: {
        links: [
            {
                id: '',
                svg_name: '',
                link: '',
                svg_link: ''
            }
        ]
    }
}

const useFetchData = () => {
    const [error, setError] = React.useState(false);
    const [loading, setLoading] = React.useState(false);
    const [profile, setProfile] = React.useState<ProfileProps[]>()
    const [projects, setProjects] = React.useState<ProjectsTypeProps[]>([])
    const [skillsResponse, setSkillsResponse] = React.useState<SkillsTypeProps[]>([]);
    const [softSkillsResponse, setSoftSkillsResponse] = React.useState<SoftskillsTypeProps[]>([]);

    const fetchData = async () => {
        setLoading(true);
        setError(false);
        try {
            const profile = await getProfile()
            const projects = await getProjects()
            const [skills, softskills] = await Promise
                .all([getSkills(), getSoftskills()])

            if ('skills' in skills) {
                setSkillsResponse(skills.skills)
            } else if ('error' in skills) {
                setError(true)
            }

            if ('softskills' in softskills) {
                setSoftSkillsResponse(softskills.softskills)
            } else if ('error' in softskills) {
                setError(true)
            }

            if ('projects' in projects) {
                setProjects(projects.projects)
            } else if ('error' in projects) {
                setError(true)
            }

            if ('profile' in profile) {
                setProfile(profile.profile)
            } else if ('error' in profile) {
                setError(true)
            }

        } catch (error) {
            setError(true);
        } finally {
            setLoading(false);
        }
    };

    React.useEffect(() => {
        fetchData();
    }, []);

    return {
        error,
        loading,
        profile,
        projects,
        skillsResponse,
        softSkillsResponse,
    };
};

export default useFetchData;
