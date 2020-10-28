import React, { Component } from 'react';
import './UserInfo.scss';

class UserInfo extends Component {
  render() {
    return (
      <aside className="UserInfo">
        <h2>Leanna Graham</h2>
        <p className="contact-me">Contact Me @</p>
        <table>
          <tbody>
            <tr>
              <th>Email</th>
              <td>
                <a>Sincere@april.biz</a>
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <th>Phone</th>
              <td>
                <a>1-770-736-8031 x56442</a>
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <th>Website</th>
              <td>
                <a>hildegard.org</a>
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <th>Company</th>
              <td>Romaguera-Crona</td>
            </tr>
          </tbody>
        </table>
      </aside>
    );
  }
}

export default UserInfo;
