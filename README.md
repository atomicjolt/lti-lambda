# LTI Lambda
-----------------------
This project demonstrates how to do a basic LTI launch using AWS Lambda. This uses the (Serverless framework)[https://serverless.com].

# Getting started
-----------------------
You will need an AWS account and credentials to run the function.

## Follow the Serverless getting started documentation

https://serverless.com/framework/docs/providers/aws/guide/intro/

## Deploy

  `serverless deploy`

## LTI Setup
-----------------------
Add a new LTI tool to your LMS. Use any value for the lti key. The value for the lti secret is hard coded to 'secret'.

Here's an example XML configuration that can be used to add a course navigation tool to Instructure Canvas. Be sure to replace the
urls with your own urls:

<?xml version="1.0" encoding="UTF-8"?>
<cartridge_basiclti_link xmlns="http://www.imsglobal.org/xsd/imslticc_v1p0" xmlns:blti="http://www.imsglobal.org/xsd/imsbasiclti_v1p0" xmlns:lticm="http://www.imsglobal.org/xsd/imslticm_v1p0" xmlns:lticp="http://www.imsglobal.org/xsd/imslticp_v1p0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.imsglobal.org/xsd/imslticc_v1p0 http://www.imsglobal.org/xsd/lti/ltiv1p0/imslticc_v1p0.xsd http://www.imsglobal.org/xsd/imsbasiclti_v1p0 http://www.imsglobal.org/xsd/lti/ltiv1p0/imsbasiclti_v1p0p1.xsd http://www.imsglobal.org/xsd/imslticm_v1p0 http://www.imsglobal.org/xsd/lti/ltiv1p0/imslticm_v1p0.xsd http://www.imsglobal.org/xsd/imslticp_v1p0 http://www.imsglobal.org/xsd/lti/ltiv1p0/imslticp_v1p0.xsd">
  <blti:title>Attendance</blti:title>
  <blti:description>LTI Lambda</blti:description>
  <blti:launch_url>https://7z1do2p8ra.execute-api.us-east-1.amazonaws.com/dev/lti</blti:launch_url>
  <blti:icon>https://7z1do2p8ra.execute-api.us-east-1.amazonaws.com/dev/images/oauth_icon.png</blti:icon>
  <blti:extensions platform="canvas.instructure.com">
    <lticm:options name="course_navigation">
      <lticm:property name="default">enabled</lticm:property>
      <lticm:property name="enabled">true</lticm:property>
      <lticm:property name="text">LTI Lambda</lticm:property>
      <lticm:property name="url">https://7z1do2p8ra.execute-api.us-east-1.amazonaws.com/dev/lti</lticm:property>
      <lticm:property name="visibility">public</lticm:property>
    </lticm:options>
    <lticm:property name="domain">https://7z1do2p8ra.execute-api.us-east-1.amazonaws.com</lticm:property>
    <lticm:property name="privacy_level">public</lticm:property>
  </blti:extensions>
</cartridge_basiclti_link>
