import React, { Component } from 'react';
import './UserInfo.scss';

class UserInfo extends Component {
  render() {
    const { user } = this.props;
    return (
      <aside className="UserInfo">
        <h2>{user.name}</h2>
        <p className="contact-me">Contact Me @</p>
        <section className="user-info-block">
          <section className="contact-me-column row-title">
            <span>Email</span>
            <span>Phone</span>
            <span>Website</span>
            <span>Company</span>
          </section>
          <section className="contact-me-column contact-me-info">
            <span>{user.email}</span>
            <span>{user.phone}</span>
            <span>{user.website}</span>
            <span>{user.company?.name}</span>
          </section>
        </section>
      </aside>
    );
  }
}

export default UserInfo;
