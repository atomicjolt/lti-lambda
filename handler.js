"use strict";

import lti         from 'ims-lti';
import querystring from 'querystring';

const lti_shared_secret = "secret";

export const handler = (event, context, callback) => {

  const protocol = event.headers['X-Forwarded-Proto'];

  // Fix up the event to look like a node request for the ims-lti library
  event.headers.host = event.headers.Host
  event.url = `${protocol}://${event.headers.Host}/${event.stage}/lti`; // Note that we hard code the path of 'lti' here. This must match the 'path' set in serverless.yml.
  event.protocol = protocol;

  // Validate the lti launch
  const provider = new lti.Provider(event.body.oauth_consumer_key, lti_shared_secret);

  provider.valid_request(event, (error, isValid) => {

    const body = isValid ?
      `<html><body><h1>Hello ${event.body.lis_person_name_full}</h1></body></html>` :
      `<html><body><h1>Error: Failed LTI Launch</h1><p>${error}</p></body></html>`;

    callback(null, { body: body });

  });

};