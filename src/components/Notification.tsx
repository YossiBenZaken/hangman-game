import "./Notification.scss";
type Props = {
  show: boolean;
}
export const Notification = (props: Props) => {
  return (
    <div className={`notification-container ${props.show ? 'show' : ''}`}>
      <p>You have already entered this letter</p>
    </div>
  );
};
