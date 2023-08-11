export async function getSocialNetworkLinks() {
    const response = await fetch("http://localhost:3000/api/socialNetworkLinks");
    const socialNetworkLinks = await response.json();

    return socialNetworkLinks;
};