import apirequest from "./ApiRequest";

export const getIdeas = async (pageNumber = 1, pageSize = 8, append = ['small_image', 'medium_image'], sort = '-published_at') => {
  try {
    const response = await apirequest('api/ideas', 'GET', null, {
      'page[number]': pageNumber,
      'page[size]': pageSize,
      append,
      sort,
    });
    return response.data.data;
  } catch (error) {
    console.error("Failed to get ideas:", error);
    throw error;
  }
};