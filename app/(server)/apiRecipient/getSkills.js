export const getSkills = async () => {
    const response = await fetch("http://localhost:3000/api/skills");
    const skills = await response.json();

    return skills;
};