import { getProjects, getProjectsById } from "@/services"
import { ProjectDetails } from "@/app/components/ProjectDetails";
import { ProjectResponse, ProjectsResponse, ProjectsTypeProps } from "@/@types";

export async function generateStaticParams() {
    const projects = await getProjects();
    const projectsData = projects as ProjectsResponse;

    return projectsData.projects.map((project: ProjectsTypeProps) => ({
        id: project.id.toString()
    }));
};

export default async function Project({ params }: { params: { id: string } }) {
    const project = await getProjectsById(params.id);
    const projectDate = project as ProjectResponse

    return (
        <ProjectDetails.Root {...projectDate} >
            <ProjectDetails.Content  {...projectDate} >
                <ProjectDetails.Card  {...projectDate} />
                <ProjectDetails.CloseIcon />
                <ProjectDetails.ThumbnailContainer >
                    <ProjectDetails.Thumbnail {...projectDate} />
                    <ProjectDetails.Description text={projectDate.description} />
                    <ProjectDetails.Techs {...projectDate} />
                </ProjectDetails.ThumbnailContainer>
            </ProjectDetails.Content>
        </ProjectDetails.Root>
    )
}