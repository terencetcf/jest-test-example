import type { Config } from '@jest/types';
import { pathsToModuleNameMapper } from 'ts-jest/utils';
import { compilerOptions } from './tsconfig.json';

const config: Config.InitialOptions = {
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
    prefix: '<rootDir>/',
  }),
  testPathIgnorePatterns: ['archives'],
  transform: {
    '^.+\\.(t|j)s$': 'ts-jest',
  },
  coverageDirectory: 'test-coverage',
  collectCoverage: false,
  collectCoverageFrom: ['./src/**/*.{ts,tsx}'],
  // coveragePathIgnorePatterns: ["^.+\\.d\\.ts$"],
  verbose: true,
};

export default config;
