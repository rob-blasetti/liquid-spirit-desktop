import { apiGet, getStoredUser } from './apiClient';

const extractList = (payload: any) => (Array.isArray(payload?.data) ? payload.data : Array.isArray(payload) ? payload : []);

export async function fetchDiscoverActivities() {
  const payload = await apiGet('/api/activities');
  return extractList(payload);
}

export async function fetchCommunityNews() {
  const user = getStoredUser();
  const communityId = user?.community?._id || user?.community?.id;
  if (!communityId) return [];
  const payload = await apiGet(`/api/posts/community-feed/${communityId}`);
  return extractList(payload);
}

export async function fetchDashboardSummary() {
  const user = getStoredUser();
  const userId = user?._id || user?.id;
  if (!userId) return null;
  return apiGet(`/api/users/${userId}/dashboard`);
}

export async function fetchProfile() {
  const user = getStoredUser();
  const userId = user?._id || user?.id;
  if (!userId) return null;
  return apiGet(`/api/users/getUser/${userId}`);
}
