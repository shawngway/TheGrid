import React from "react";
import Notification from "../Notification/Notification";
import "./notifications.css";

const Notifications = props => {
      const noNotifications = (
      <>
        <button className="btn btn-secondary notificationsBtn" type="button">
          No Notifications
        </button>
      </>
      )
   const haveNotifications = ( 
    <>
      <div className="dropdown mr-2">
        <button
          className="btn btn-secondary notificationsBtn dropdown-toggle"
          type="button"
          id="dropdownMenuButton"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <i className="fa fa-bell"></i> Notifications
        </button>
        <div
          className="dropdown-menu dropdown-menu-right"
          aria-labelledby="dropdownMenuButton"
        >
          
          {props.notifications.map(noti => {
            return (
              <Notification
                notificationClickHandler={props.notificationClickHandler}
                key={noti.id}
                id={noti.id}
                update={noti.update}
                userInvolved={noti.userInvolved}
                markNoteAsRead={props.markNoteAsRead}
                type={noti.type}
              />
            );
          })}
        </div>
      </div>
    </>
    )
    let notificationsButton = props.notifications.length === 0 ? noNotifications : haveNotifications
    return notificationsButton
};

export default Notifications;
