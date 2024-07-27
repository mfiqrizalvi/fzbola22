'use client'
import React, { useState } from 'react';

const FloatingAds = () => {
  const [showAds, setShowAds] = useState(true);

  const handleClose = () => {
    setShowAds(false);
  };

  return (
    <div
      style={{
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        zIndex: 1000,
        backgroundColor: '#212121',
        border:'1px solid #a6a6a6',
        padding: '20px',
        display: showAds? 'block' : 'none', 
        width:'300px'
      }}
    >
      <button
        style={{
          position: 'absolute',
          top: '10px',
          right: '10px',
          backgroundColor: 'yellow',
          border: '2px solid black',
          cursor: 'pointer',
          fontWeight:'bold'
        }}
        onClick={handleClose}
      >
        &#10088;X&#10089; CLOSE
      </button>
      {showAds && (
        <div
          dangerouslySetInnerHTML={{
            __html: `
              <script>
                (function(jrck){
                var d = document,
                    s = d.createElement('script'),
                    l = d.scripts[d.scripts.length - 1];
                s.settings = jrck || {};
                s.src = "\/\/achingborder.com\/bUXsV\/s.dTG\/ly0BYkWEdcikYYWU5GuMZ\/XhIA\/-emmy9\/unZLUilZkAPFTJUUzvM\/jbkK4HOPDOkOtzNUTRMbyKOUT\/gc5wMfAT";
                s.async = true;
                s.referrerPolicy = 'no-referrer-when-downgrade';
                l.parentNode.insertBefore(s, l);
                })({})
              </script>
            `,
          }}
        />
      )}
    </div>
  );
};

export default FloatingAds;