import { Mastra, createLogger } from '@mastra/core';
import { VercelDeployer } from '@mastra/deployer-vercel';
import { chefAgent } from "./agents/chefPravin";

export const mastra = new Mastra({
  agents: { chefAgent },
  logger: createLogger({ name: 'MyApp', level: 'debug' }),
  deployer: new VercelDeployer({
    teamId: process.env.VERCEL_TEAM_ID,
    projectName: 'chef-pravin',
    token: process.env.VERCEL_TOKEN
  }),
});
