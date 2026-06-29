const API_URL = "/api";

export const getImages = async () => {
    const response = await fetch(`${API_URL}/images`);
    return response.json();
};

export const uploadImage = async (data: {
    title: string;
    description: string;
    image_url: string;
}) => {
    const response = await fetch(`${API_URL}/upload`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });

    return response.json();
};