import type { Config } from '@jest/types';
import { pathsToModuleNameMapper } from 'ts-jest';
import { compilerOptions } from './tsconfig.json';

const config: Config.InitialOptions = {
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
    prefix: '<rootDir>/',
  }),
  preset: 'ts-jest',
  coverageDirectory: 'test-coverage',
  collectCoverage: false,
  collectCoverageFrom: ['./src/**/*.{ts,tsx}'],
};

export default config;
