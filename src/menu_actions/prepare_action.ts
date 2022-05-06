/*
Copyright: Ambrosus Inc.
Email: tech@ambrosus.io

This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0. If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.

This Source Code Form is “Incompatible With Secondary Licenses”, as defined by the Mozilla Public License, v. 2.0.
*/

import {APOLLO_CODE, ATLAS_CODE, HERMES_CODE} from '../consts';

const prepareAction = (action, nodeTypes = [ATLAS_CODE, HERMES_CODE, APOLLO_CODE]) => ({
  performAction: action,
  nodeTypes
});

export default prepareAction;