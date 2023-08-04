/*
Copyright: Ambrosus Inc.
Email: tech@ambrosus.io

This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0. If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.

This Source Code Form is “Incompatible With Secondary Licenses”, as defined by the Mozilla Public License, v. 2.0.
*/

const messages = {
  networkQuestion: 'Which network do you want to be onboarded to?',
  noPrivateKeyQuestion: `No private key setup yet. What do you want to do?`,
  privateKeyManualInputAnswer: 'Input existing key manually',
  privateKeyAutoGenerationAnswer: 'Generate new key automatically',
  privateKeyInputInstruction: `Please provide your private key (in hex form):`,
  privateKeyInputError: (wrongValue) => `${wrongValue} is not a valid private key`,
  dockerInstalledInfo: '✅ Docker is installed',
  dockerMissingInfo: '⛔ Docker is required, and was not found. Please verify your installation',
  privateKeyInfo: (address) => `✅ Private key verified. Your address is ${address}`,
  nodeIPGuessQuestion: (ip) => `Please provide the IP address, which you will be using for your node. \nIs ${ip} correct?`,
  nodeIPInputInstruction: 'Provide the IP address, which you will be using for your node',
  nodeIPInputError:  (wrongValue) => `${wrongValue} is not a valid IP address`,
  nodeIPInfo: (ip) => `Node IP defined as ${ip}`,
  networkSelected: (network) => `Network: ${network}`,
  dockerComposeInfo: (outputDir, command) => `\n🎉 Your node configuration is ready 🎉\nIn order to start it, enter the ${outputDir} directory from the command line and run ${command}`,
  dockerComposeCommand: 'docker-compose up -d',
  warningMessage: '⚠️ WARNING! ⚠️',
  dockerRestartRequired: 'Changes in network have been detected. Please restart the docker containers with',
};

export default messages;
