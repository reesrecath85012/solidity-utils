import '@typechain/hardhat';
import '@nomiclabs/hardhat-truffle5';
import 'hardhat-gas-reporter';
require('solidity-coverage'); // require because no TS typings available
import dotenv from 'dotenv';
import { HardhatUserConfig } from 'hardhat/config';
import networks from './hardhat.networks';

dotenv.config();

const config: HardhatUserConfig = {
    solidity: {
        version: '0.8.13',
        settings: {
            optimizer: {
                enabled: true,
                runs: 1000000,
            },
        },
    },
    networks,
    gasReporter: {
        enabled: true,
        currency: 'USD',
    },
    typechain: {
        target: 'truffle-v5',
    },
};

export default config;
