import { error } from '@sveltejs/kit';

export async function load({ params, url, fetch }){
    const { id } = params;

    try {
        return {
            id
        };
    } catch (e) {
        console.error("Failed to load category data:", e)
        throw error(500, "Failed to load category data");
    }
}