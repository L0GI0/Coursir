import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BaseQueryApi, FetchArgs } from '@reduxjs/toolkit/query';

const customBaseQuery = async (
  args: string | FetchArgs,
  api: BaseQueryApi,
  extraOptions: any
) => {
  const baseQuery = fetchBaseQuery({baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL});

  try {
    const result: any = await baseQuery(args, api, extraOptions);

    if(result.data) {
      result.data = result.data.data;
    }

    return result; 
  } catch (error: unknown){
    const errorMessage = error instanceof Error ? error.message : "Unknown error"

    return { error: { status: "FETCH_ERROR", error: errorMessage }}
  }
};

export const api = createApi({
  baseQuery: customBaseQuery,
  reducerPath: "api",
  tagTypes: ["Courses"], //represent data that we receive from backend
  endpoints: (build) => ({
    getCourses: build.query<Course[], { category?: string}>({
      query: ({ category }) => ({
        url: "courses",
        params: { category }
      }),
      providesTags: ["Courses"] // These tags are important for validation of courses
    }),
    getCourse: build.query<Course, string>({
      query: (id) => `courses/${id}`,
      providesTags: (result, error, id) => [{ type: "Courses", id}] // Will update specific course automatically 
    })
  })
});

export const { useGetCoursesQuery, useGetCourseQuery } = api;