import type { Config } from "@jest/types";
import { pathsToModuleNameMapper } from "ts-jest/utils";
import { compilerOptions } from "./tsconfig.json";

const config: Config.InitialOptions = {
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
    prefix: "<rootDir>/",
  }),
  transform: {
    "^.+\\.(t|j)s$": "ts-jest",
  },
  verbose: true,
};

export default config;
