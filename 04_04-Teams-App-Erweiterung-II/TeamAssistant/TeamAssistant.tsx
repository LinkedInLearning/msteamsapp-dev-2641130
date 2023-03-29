import * as React from 'react';
import styles from './TeamAssistant.module.scss';
import { ITeamAssistantProps } from './ITeamAssistantProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { TeamMembers } from '../TeamMembers/TeamMembers';

export default class TeamAssistant extends React.Component<ITeamAssistantProps, {}> {
  public render(): React.ReactElement<ITeamAssistantProps> {
    const {
      hasTeamsContext,
      userDisplayName
    } = this.props;

    return (
      <section className={`${styles.teamAssistant} ${hasTeamsContext ? styles.teams : ''}`}>
        <div className={styles.welcome}>
          <h2>Well done, {escape(userDisplayName)}!</h2>
          <TeamMembers
            description={this.props.description}
            isDarkTheme={this.props.isDarkTheme}
            environmentMessage={this.props.environmentMessage}
            hasTeamsContext={this.props.hasTeamsContext}
            userDisplayName={this.props.userDisplayName}
            context={this.props.context}
          />
        </div>        
      </section>
    );
  }
}
