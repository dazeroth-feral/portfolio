export async function getPersonalInformation () {
    const response = await fetch("http://localhost:3000/api/personalInformation");
    const personalInformation = await response.json();

    return personalInformation;
};