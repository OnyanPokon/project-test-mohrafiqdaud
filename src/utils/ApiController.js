import apirequest from "./ApiRequest";

export const getIdeas = async (pageNumber = 1, pageSize = 10, sort = 'newest', append = ['small_image', 'medium_image']) => {
  try {
    const sortParam = sort === 'newest' ? '-published_at' : sort === 'oldest' ? 'published_at' : '';
    const response = await apirequest('api/ideas', 'GET', null, {
      'page[number]': pageNumber,
      'page[size]': pageSize,
      append,
      sort: sortParam,
    });
    console.log(response);
    return {
      data: response.data.data,
      totalPages: response.data.meta.last_page,
      totalItems: response.data.meta.total, // Assuming this is where the total number of items is provided
    };
  } catch (error) {
    console.error("Failed to get ideas:", error);
    throw error;
  }
};
