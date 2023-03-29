import * as React from 'react';
import styles from './TeamAssistant.module.scss';
import { ITeamAssistantProps } from './ITeamAssistantProps';
import { escape } from '@microsoft/sp-lodash-subset';

export default class TeamAssistant extends React.Component<ITeamAssistantProps, {}> {
  public render(): React.ReactElement<ITeamAssistantProps> {
    const {
      hasTeamsContext,
      userDisplayName,
      userEmailAddress
    } = this.props;

    return (
      <section className={`${styles.teamAssistant} ${hasTeamsContext ? styles.teams : ''}`}>
        <div className={styles.welcome}>
          <h2>Well done, {escape(userDisplayName)}!</h2>
          <h3>Your email address is {escape(userEmailAddress)}</h3>
        </div>
      </section>
    );
  }
}
