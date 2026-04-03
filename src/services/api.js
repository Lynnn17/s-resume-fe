import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || "/api-v1",
  timeout: 10000,
});

// Interceptor untuk mempermudah error handling
api.interceptors.response.use(
  (response) => {
    const res = response.data;
    // Jika backend membungkus dengan { code: 200, data: ... }
    if (res && res.code === 200 && res.data !== undefined) {
      return res.data;
    }
    // Jika backend hanya membungkus dengan { data: ... } tanpa field code
    if (res && res.data !== undefined && !res.code) {
      return res.data;
    }
    // Fallback jika data sudah berupa array/object langsung
    return res;
  },
  (error) => {
    console.error("API Error:", error);
    return Promise.reject(error);
  },
);

export const getProfile = () => api.get("/profile");
export const getExperiences = () => api.get("/experiences");
export const getProjects = () => api.get("/projects");
export const getSkills = () => api.get("/skills");
export const getSkillCategories = () => api.get("/skills/categories");

// Helper URL gambar
export const getImageUrl = (path) => {
  const apiBase = import.meta.env.VITE_API_BASE_URL || "/api-v1";
  return `${apiBase}/files?path=/files/${path}`;
};

export default api;
