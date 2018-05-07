/* @flow */
import type { ApiResponse, Auth } from '../../types';
import { apiPatch } from '../apiFetch';

export default async (auth: Auth, id: number): Promise<ApiResponse> =>
  apiPatch(auth, `user_groups/${id}`, res => res);
