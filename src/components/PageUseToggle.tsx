import useToggle from '../hooks/useToggle';

const PageUseToggle = () => {
  const [showAds, toggelAds, adsClass] = useToggle(false);
  const [sendMails, toggelMails, mailsClass] = useToggle(false);

  return (
    <div className="pageUseToggle">
      <h2>User Settings</h2>
      <p>
        <button onClick={toggelAds}>Advertisements</button>{' '}
        <span className={adsClass}>
          {showAds
            ? 'yes, show advertisements'
            : 'no, do not show advertisements'}
        </span>
      </p>
      <p>
        <button onClick={toggelMails}>Mails</button>{' '}
        <span className={mailsClass}>
          {sendMails ? 'yes, send me mails' : 'no, do not send me mails'}
        </span>
      </p>
    </div>
  );
};

export default PageUseToggle;
