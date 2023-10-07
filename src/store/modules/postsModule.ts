import { Post } from "../../types/post";
import apiSlice from "../apiSlice";

const enhanceEndpoints = apiSlice.enhanceEndpoints({ addTagTypes: ["About"] });

export const postSlice = enhanceEndpoints.injectEndpoints({
  endpoints(build) {
    return {
      fetchAllPosts: build.query<Post[], void>({
        query() {
          return {
            url: `/posts`
          };
        }
      })
    };
  }
});

export const { useFetchAllPostsQuery } = postSlice;
