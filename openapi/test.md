![LGA](https://i.imgur.com/3HZpWHE.png)

> **Note:** This feature is only available as a part of Okta Identity Engine. [Contact support](mailto:dev-inquiries@okta.com) for further information.

As an option to increase org security, Okta supports CAPTCHA services to prevent automated sign-in attempts. You can integrate one of two providers: [hCaptcha](https://www.hcaptcha.com/) or [reCAPTCHA v2](https://developers.google.com/recaptcha/docs/invisible).

The vendor implementations supported by Okta are both invisible. They each run risk-analysis software in the background during user sign in to determine the likelihood that the user is a bot. This risk analysis is based on the settings that you configure with the provider that you choose.

The Okta CAPTCHAs API provides operations to manage CAPTCHAs and Org-wide CAPTCHA Settings.

* [Link to DELETE operation](#operation/deleteCaptchaInstance)

## Get started

Before you configure your org to use CAPTCHA, sign in to the vendor of your choice or sign up for an account. For more details, refer to [CAPTCHA integration](https://help.okta.com/okta_help.htm?type=oie&id=csh-captcha).

Explore the CAPTCHAs API: [![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/c51413d80cc8e88fd101?action=collection%2Fimport)
