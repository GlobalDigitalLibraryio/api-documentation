/**
 * Copyright (c) 2017-present, GDL.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import fetch from 'isomorphic-fetch';
import { apiResourceUrl, resolveJsonOrRejectWithError } from '../utils/apiHelpers';

export function fetchApis(method = 'GET') {
  const url = apiResourceUrl('/apis');
  return fetch(url, { method }).then(resolveJsonOrRejectWithError);
}
