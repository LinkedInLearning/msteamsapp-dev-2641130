import { WebPartContext } from "@microsoft/sp-webpart-base";

export interface ITeamAssistantProps {
  description: string;
  isDarkTheme: boolean;
  environmentMessage: string;
  hasTeamsContext: boolean;
  userDisplayName: string;
  userEmailAddress: string;
  context: WebPartContext;
}
