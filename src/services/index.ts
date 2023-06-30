import {
    APIProfileResponse,
    APIProjectResponse,
    APIProjectsResponse,
    APISkillsResponse,
    APISoftskillsResponse,
    ContactProps
} from "@/@types";

export const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL as string;

export const getSkills = async (): Promise<APISkillsResponse> => {
    try {
        const response = await fetch(`${BASE_URL}/skills`);
        const data = await response.json();

        if (response.ok) {
            return { skills: data.skills };
        } else {
            throw new Error(data);
        }
    } catch (error) {
        return { error: 'An error occurred' };
    }
};

export const getSoftskills = async (): Promise<APISoftskillsResponse> => {
    try {
        const response = await fetch(`${BASE_URL}/softskills`);
        const data = await response.json();

        if (response.ok) {
            return { softskills: data.softskills };
        } else {
            throw new Error(data.status)
        }
    } catch (error) {
        return { error: 'An error occurred' };
    }
}

export const getProjects = async (): Promise<APIProjectsResponse> => {
    try {
        const response = await fetch(`${BASE_URL}/projects`);
        const data = await response.json();

        if (response.ok) {
            return { projects: data.projects };
        } else {
            throw new Error(data.status);
        }
    } catch (error) {
        return { error: 'An error occurred' };
    }
};

export const getProjectsById = async (id: string): Promise<APIProjectResponse> => {
    try {
        const response = await fetch(`${BASE_URL}/projects/${id}`);
        const data = await response.json();

        if (response.ok) {
            return { project: data };
        } else {
            throw new Error(data.status)
        }
    } catch (error) {
        return { error: 'An error occurred' };
    }
}

export const getProfile = async (): Promise<APIProfileResponse> => {
    try {
        const response = await fetch(`${BASE_URL}/profile`);
        const data = await response.json();

        if (response.ok) {
            return { profile: data.profile };
        } else {
            throw new Error(data.status)
        }
    } catch (error) {
        return { error: 'An error occurred' };
    }
}

export const sendMessageContact = async (data: ContactProps) => {
    try {
        const res = await fetch('/api', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })

        const json = await res.json()

        if (res.ok) {
            return { response: json }
        } else {
            throw new Error(json.status)
        }
    } catch (error) {
        return { error: 'Aconteceu algum erro!' };
    }
}