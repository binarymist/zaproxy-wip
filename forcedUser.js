/* Zed Attack Proxy (ZAP) and its related class files.
 *
 * ZAP is an HTTP/HTTPS proxy for assessing web application security.
 *
 * Copyright the ZAP development team
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


'use strict';

/**
 * This file was automatically generated.
 */
function ForcedUser(clientApi) {
  this.api = clientApi;
}

ForcedUser.prototype.isForcedUserModeEnabled = function (callback) {
  this.api.request('/forcedUser/view/isForcedUserModeEnabled/', callback);
};

ForcedUser.prototype.getForcedUser = function (contextid, callback) {
  this.api.request('/forcedUser/view/getForcedUser/', {'contextId' : contextid}, callback);
};

ForcedUser.prototype.setForcedUser = function (contextid, userid, apikey) {
  return this.api.request('/forcedUser/action/setForcedUser/', {'contextId' : contextid, 'userId' : userid, 'apikey' : apikey});
};

ForcedUser.prototype.setForcedUserModeEnabled = function (bool, apikey) {
  return this.api.request('/forcedUser/action/setForcedUserModeEnabled/', {'boolean' : bool, 'apikey' : apikey});
};

module.exports = ForcedUser;
