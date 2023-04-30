import { useState } from 'react';

const PageUseToggle = () => {
  const [showAds, setShowAds] = useState(false);
  const [sendMails, setSendMails] = useState(false);

  return (
    <>
      <h2>User Settings</h2>
      <p>
        <button onClick={() => setShowAds(!showAds)}>Advertisements</button>{' '}
        <span style={{ color: showAds ? 'green' : 'red' }}>
          {showAds
            ? 'yes, show advertisements'
            : 'no, do not show advertisements'}
        </span>
      </p>
      <p>
        <button onClick={() => setSendMails(!sendMails)}>Mails</button>{' '}
        <span style={{ color: sendMails ? 'green' : 'red' }}>
          {sendMails ? 'yes, send me mails' : 'no, do not send me mails'}
        </span>
      </p>
    </>
  );
};

export default PageUseToggle;
