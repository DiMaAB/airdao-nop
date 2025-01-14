/*
Copyright: Ambrosus Inc.
Email: tech@ambrosus.io

This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0. If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.

This Source Code Form is “Incompatible With Secondary Licenses”, as defined by the Mozilla Public License, v. 2.0.
*/

import { readState } from './utils/state';
import setupNodeConfigFiles from './setup';
import { dockerDown, dockerPull, dockerUp } from "./utils/exec";


export const update = async () => {
  const state = await readState();
  await setupNodeConfigFiles(state);

  await dockerDown();
  await dockerPull();
  await dockerUp();
};

update().catch((err) => {
  console.error(err);
  process.exit(1);
});
