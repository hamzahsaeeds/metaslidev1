import React from 'react';
import { useLocation } from 'react-router-dom';

export default function Fetch() {

    const search = useLocation().search;

    const no = new URLSearchParams(search).get('no');
    var whatsapp = 'https://wa.me/+' + no;

    const fb_handle = new URLSearchParams(search).get('fb_handle');
    var facebook = 'https://facebook.com/' + fb_handle;

    return (
      <div>
        <h1>Fetch page</h1>
        <a href={whatsapp} target="_blank" rel="noopener noreferrer">WhatsApp</a><br></br>
        <a href={facebook} target="_blank" rel="noopener noreferrer">Facebook</a>
      </div>
    );
}