import React, { useState } from "react";
import BlogNavbar from "./../../components/Blog/BlogNavbar";
import { images } from "../../constants";
import Footer from "../Footer-blog/Footer";
const BlogFaq = () => {
  const [toggle, setToggle] = useState(true);

  const faqs = [{ section: "section" }];
  return (
    <>
      <BlogNavbar />
      <div className="landing-blog ">
        <div className="blog-content mt-5 container ">
          <h1 className="text-center faq-head">FAQ</h1>
        </div>
      </div>

      <div className="container content-container">
        <div className="faqs-section">
          <div className="contents">
            <b>Contents</b>
            <span onClick={() => setToggle((prev) => !prev)}>
              {toggle ? "hide" : "show"}
            </span>
          </div>
          <div className="items">
            {faqs.map((faq) => (
              <div className={`item-box ${toggle ? "d-block" : " d-none"}`}>
                <a href={faq.section}>
                  <span>{faq.id}</span>
                  <span>{faq.title}</span>
                </a>
              </div>
            ))}
          </div>
        </div>

        <div className="section-container" id={faqs.section}>
          <h2>What is WhatsApp API?</h2>
          <p>
            Everyone knows the {` `}
            <a href="https://www.whatsapp.com/" target="_blank">
              WhatsApp
            </a>{" "}
            {` `}
            WhatsApp application on mobile phones, for personal or business use,
            All the functions provided by the application from sending text
            messages, images, media, links … etc., receiving messages from
            customers and responding to them with the appropriate response, is
            exactly what the API does,
            <strong>but on your behalf.</strong>
          </p>
          <p>
            Where text messages can be sent to your customers automatically to
            remind you of an appointment or send an activation code.etc. <br />
            It is also possible to process messages received from customers and
            respond to them automatically, without your intervention, and you
            must have seen this before through a chatbot via WhatsApp.
          </p>
          <p>
            Quite simply, this is the API for WhatsApp, you{" "}
            <strong>send and receive WhatsApp messages automatically</strong>{" "}
            through your website or application.
          </p>
        </div>

        <h2>What are the requirements to start using the API?</h2>
        <div className="img-container">
          <img src={images.sendAPI} alt="img-whats app" />
        </div>
        <div className="iframe-container">
          <div className="ratio ratio-16x9">
            <iframe
              title="YouTube video player"
              className="embed-responsive-item "
              src="https://www.youtube.com/embed/5bAwsWGquIU"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        <strong>
          You can watch this intro video to start using Ultramsg Create an
          account + start sending messages and use API
        </strong>
        <p>
          You just need any WhatsApp number activated on your phone, the phone
          number can be a mobile number, or you can also use a {` `}
          <a
            href="https://blog.ultramsg.com/whatsapp-using-landline-number-via-whatsapp-business/"
            target="_blank"
            rel="noreferrer"
          >
            landline
          </a>
          {` `}
          number.
          <br />
          After that, create an account on the Ultramsg and scan the QR to
          create authentication and then start sending and receiving WhatsApp
          messages.
        </p>
        <h2>
          <span id="WhatsApp_API_pricing">WhatsApp API pricing</span>
        </h2>
        <p>$39 USD /month per instance</p>
        <ul>
          <li>Fixed price</li>
          <li>no hidden fees</li>
          <li>unlimited messages</li>
          <li>no cost per message</li>
        </ul>
        <em>1 instance = 1 WhatsApp number</em>
        <p>
          The price is in US dollars, you can convert the instance price to the
          currency of your country from{" "}
          <a
            href="https://www.google.com/search?q=USD+to"
            target="_blank"
            rel="noopener noreferrer"
          >
            here
          </a>
        </p>
        <p>
          <strong>Notes:</strong>
        </p>
        <ul>
          <li>Subscription can be canceled at any time.</li>
          <li>
            An annual subscription is available for $390, and the monthly
            subscription can be upgraded at any time.
          </li>
        </ul>
        <p></p>
        <h2>
          <span id="Maximum_number_of_WhatsApp_instances_in_one_account">
            Maximum number of WhatsApp instances in one account
          </span>
        </h2>
        <p></p>
        <p>
          If you want to send from many WhatsApp numbers, you must create an
          instance for each WhatsApp number, So You can create an unlimited
          number of instances because the payment is based on the number of
          instances.
        </p>
        <p></p>
        <h2>
          <span id="how_to_pay_And_what_types_of_cards_are_supported">
            how to pay? And what types of cards are supported?
          </span>
        </h2>
        <p>
          All Visa and Master Cards are accepted, and all cards that have the
          online purchase feature activated.
        </p>
        <p>
          To pay, you can click on the
          <strong> “Pay</strong>” button, and choose the appropriate package
          (monthly – yearly), and you can cancel the subscription at any time.
        </p>
        <div className="img-container">
          <img src={images.pay} alt="how to pay" />
        </div>
        <h2>
          <span id="How_can_I_cancel_the_subscription_and_is_there_a_refund_option">
            How can I cancel the subscription and is there a refund option?
          </span>
        </h2>
        <p>
          You can open a trial account for free days, Therefore, the refund
          option is not available.
        </p>
        <p>
          You can cancel the subscription at any time, and the instance will
          remain active until the end of the subscription term.
        </p>
        <div className="img-container">
          <img
            src={images.manageSub}
            alt="How_can_I_cancel_the_subscription_and_is_there_a_refund_option"
          />
        </div>
        <p>
          Then the
          {` `}
          <strong>“Cancel plan”</strong>
          {` `}
          button appears, you can click on it to cancel the subscription.
        </p>
        <h2>
          <span id="how_to_change_the_WhatsApp_number_linked_with_the_instance">
            how to change the WhatsApp number linked with the instance?
          </span>
        </h2>
        <p>
          You can change the number at any time, just click the “Logout” icon
          and scan QR again from a new number.
        </p>
        <div className="img-container">
          <img
            src={images.logout}
            alt="how_to_change_the_WhatsApp_number_linked_with_the_instance"
          />
        </div>
        <h2>
          <span id="what-are-the-limitations-of-the-demo-account">
            What are the limitations of the demo account?
          </span>
        </h2>
        <p>
          You can create a free trial account for 3 days and try all the
          features. 100 messages a day, and all features are enabled.
        </p>
        <h2>
          <span>Can I send a message to the WhatsApp group?</span>
        </h2>
        <p>
          You can receive & send WhatsApp messages to groups after getting the
          group ID, to see how you can see this article.
        </p>
        <p>Note:</p>
        <p>
          Creating a WhatsApp group and adding members must be from the phone,
          it is not possible through API.
        </p>
        <h2>
          <span id="How_do_I_send_files_from_a_local_server">
            How do I send files from a local server?
          </span>
        </h2>
        <p>
          You can send images, documents, and media by converting the files to
          base64.
        </p>
        <p>
          To convert any File using File to Base64 Tools from here.
          <br />
          <a
            href="https://user.ultramsg.com/app/base64/base64.php"
            rel="noreferrer noopener"
            target="_blank"
          >
            https://user.ultramsg.com/app/base64/base64.php
          </a>
          <a
            href="https://www.youtube.com/watch?v=T_rH3IFZ7A0"
            rel="noreferrer noopener"
            target="_blank"
          >
            https://www.youtube.com/watch?v=T_rH3IFZ7A0
          </a>
        </p>
        <p>
          You can view the following codes for sending WhatsApp API using base64
          via code: <br />
          <a
            href="https://blog.ultramsg.com/send-whatsapp-images-documents-using-base64"
            rel="noreferrer noopener"
            target="_blank"
          >
            https://blog.ultramsg.com/send-whatsapp-images-documents-using-base64
          </a>
        </p>
        <h2>
          <span id="How_to_send_multiple_numbers_with_the_same_API_request">
            How to send multiple numbers with the same API request?
          </span>
        </h2>
        <p>
          You can send many numbers with the same API request, just put the
          comma between the numbers.
          <br />
          Put a comma between the recipient numbers like that:
          <br />
          number1,number2,number3….etc
        </p>
        <p>
          There are important tips and advice about sending multiple numbers at
          the same time. You can see the following article:
        </p>
        <a
          href="https://blog.ultramsg.com/send-to-multiple-numbers-using"
          rel="noreferrer noopener"
          target="_blank"
        >
          https://blog.ultramsg.com/send-to-multiple-numbers-using{" "}
        </a>
        <a
          href="https://blog.ultramsg.com/send-to-multiple-numbers-using-same-request/"
          rel="noreferrer noopener"
          target="_blank"
        >
          -same-request
        </a>
        <h2 id="how-can-i-receive-whatsapp-messages-that-are-sent-to-us">
          <span>How can I receive WhatsApp messages that are sent to us?</span>
        </h2>
        <p>
          you can receive and handle incoming WhatsApp messages by using
          webhooks, In this {` `}
          <a
            href="https://www.youtube.com/watch?v=TfQOclLMIng"
            target="_blank"
            rel="noreferrer noopener"
          >
            tutorial
          </a>
          , you can create a simple page to handle incoming WhatsApp messages
          using PHP.
        </p>
        <h2 id="does-whatsapp-api-work-without-a-phone-connected-to-the-internet">
          <span id="Does_WhatsApp_API_work_without_a_phone_connected_to_the_Internet">
            Does WhatsApp API work without a phone connected to the Internet?
          </span>
        </h2>
        <p>
          In 2022, WhatsApp introduced the amazing feature “multi-device beta”,
          You can send and receive WhatsApp messages without the need for the
          phone to be connected to the Internet.
        </p>
        <p>
          <strong>Note: </strong>
        </p>
        <p>
          If you don’t use your phone for over 14 days, your linked devices will
          become disconnected.
        </p>
        <p>
          If your WhatsApp is not updated to the latest version, you can see
          this{" "}
          <a
            href="https://blog.ultramsg.com/join-the-multi-device-beta-on-android-iphone/"
            data-type="URL"
            data-id="https://blog.ultramsg.com/join-the-multi-device-beta-on-android-iphone/"
          >
            article
          </a>
          .
        </p>
        <h2>
          <span id="How_to_build_a_WhatsApp_chatbot">
            How to build a WhatsApp chatbot?
          </span>
        </h2>
        <p>
          This{" "}
          <a
            href="https://www.youtube.com/watch?v=XpJHkj_J5Xw"
            data-type="URL"
            data-id="https://www.youtube.com/watch?v=XpJHkj_J5Xw"
            rel="nofollow noopener"
            target="_blank"
          >
            video
          </a>{" "}
          will help you to make a WhatsApp chatbot menu in 5 minutes only, and
          You can use the Ultramsg demo data to easily test and build the menu
          quickly.
        </p>
        <p>
          You can also build an advanced WhatsApp chatbot from scratch using any
          programming language.{" "}
        </p>
        <p>Useful articles: </p>
        <ul>
          <li>
            <a
              href="https://blog.ultramsg.com/build-whatsapp-chatbot-with-php-ultramsg-api/"
              data-type="URL"
              data-id="https://blog.ultramsg.com/build-whatsapp-chatbot-with-php-ultramsg-api/"
            >
              Build a WhatsApp Chatbot using PHP
            </a>
          </li>
          <li>
            <a
              href="https://blog.ultramsg.com/make-whatsapp-chatbot-using-python-ultramsg/"
              data-type="URL"
              data-id="https://blog.ultramsg.com/make-whatsapp-chatbot-using-python-ultramsg/"
            >
              Build a WhatsApp Chatbot with Python
            </a>
          </li>
        </ul>
        <h2>
          <span id="How_to_Check_WhatsApp_numbers_using_API">
            How to Check WhatsApp numbers using API?
          </span>
        </h2>
        <p>
          It would be great to check if a specified phone number has WhatsApp or
          not to make the WhatsApp number filter, For that, you can check out
          this{" "}
          <a href="https://blog.ultramsg.com/check-whatsapp-numbers-using-api-whatsapp-filter/">
            article
          </a>
          .
        </p>
        <h2>
          <span id="How_to_Check_if_a_WhatsApp_Message_Was_Delivered">
            How to Check if a WhatsApp Message Was Delivered?
          </span>
        </h2>
        <p>
          You can know the status of messages sent using Ultramsg API and know
          the status of the message if the user has read the message or not.
        </p>
        <p>
          For that, you can check out this{" "}
          <a
            href="https://blog.ultramsg.com/whatsapp-message-delivery-read-status-ack/"
            data-type="URL"
            data-id="https://blog.ultramsg.com/whatsapp-message-delivery-read-status-ack/"
            target="_blank"
            rel="noreferrer noopener"
          >
            article
          </a>
          .
        </p>
        <h2 id="what-is-the-daily-whatsapp-message-limit">
          <span id="What_is_the_daily_WhatsApp_message_limit">
            What is the daily WhatsApp message limit?
          </span>
        </h2>
        <p>
          Ultramsg does not have a limit as to how many messages you can send,
          but we do not recommend sending more than 5000 messages a day.
        </p>
        <p>
          But when you send bulk messages users Maybe mark your messages as spam
          which will lead to your number being blocked.
        </p>
        <p>
          So, take care to send messages only to your clients only. And the
          messages should not be spam or annoying advertisements. The messages
          should be services (reminders – OTP – subscription – or any message
          the customer is waiting for …etc.
        </p>
        <h2>
          <span id="How_long_do_messages_stay_in_the_instance">
            How long do messages stay in the instance?
          </span>
        </h2>
        <p>
          Message and media logs are kept for 60 days only, And if you want to
          delete messages at any time, you can do so by using this method:
        </p>
        <p>
          <a
            href="https://docs.ultramsg.com/api/post/messages/clear"
            data-type="URL"
            data-id="https://docs.ultramsg.com/api/post/messages/clear"
            target="_blank"
            rel="noreferrer noopener"
          >
            https://docs.ultramsg.com/api/post/messages/clear
          </a>
        </p>
        <h2>
          <span id="What_are_the_states_of_messages_in_the_instance_unsent_expired_etc">
            What are the states of messages in the instance (unsent, expired,
            etc.)?
          </span>
        </h2>
        <ul>
          <li>
            <strong>Sent</strong>: Messages sent successfully.
          </li>
          <li>
            <strong>Queue</strong>: Messages are in the queue, and messages will
            be sent based on priority.
          </li>
          <li>
            <strong>Unsent</strong>: Messages that were not sent for technical
            reasons, and in most cases, it is due to an error in the content of
            the message.
          </li>
          <li>
            <strong>Invalid</strong>: Messages not sent, because the number is
            wrong or does not have WhatsApp.
          </li>
          <li>
            <strong>Expired</strong>: All messages not sent from the queue
            within 24 hours for any reason become expired.{" "}
          </li>
        </ul>
        <p>
          For more information about Message and queue management
          <br />
          Please see this{" "}
          <a
            href="https://blog.ultramsg.com/whatsapp-api-message-and-queue-management/"
            data-type="URL"
            data-id="https://blog.ultramsg.com/whatsapp-api-message-and-queue-management/"
            target="_blank"
            rel="noreferrer noopener"
          >
            article
          </a>
          .
        </p>
        <h2>
          <span id="What_is_the_difference_between_message_ID_and_Reference_Id">
            What is the difference between message ID and Reference
            <strong> Id</strong>?
          </span>
        </h2>
        <p>
          message ID and Reference ID
          <br />
          Both are used to query the status of the message through:
        </p>
        <p>
          <a
            href="https://docs.ultramsg.com/api/get/messages"
            target="_blank"
            rel="noreferrer"
          >
            https://docs.ultramsg.com/api/get/messages
          </a>
        </p>
        <p>
          <strong>
            The difference is simply:
            <br />
          </strong>
          ID: is a unique number generated by Ultramsg.
          <br />
          Reference Id: It is a unique number generated by you.
        </p>
        <h2 class="gb-headline gb-headline-18f9b7bb gb-headline-text">
          <span id="How_to_avoid_blocking_my_WhatsApp_number">
            How to avoid blocking my WhatsApp number?
          </span>
        </h2>
        <p>Tips and Hints</p>
        <ul>
          <li>
            {" "}
            Set up the advertising in such a way that the user is the first to
            write to you (the “Mark as Spam” button does not appear).
          </li>
        </ul>
        <ul>
          <li>
            {" "}
            Send messages only to your loyal database of numbers or your clients
            only.
          </li>
        </ul>
        <ul>
          <li>
            {" "}
            Don’t send the same messages, change them: personalize the messages
            (“Hi, %Customer_name%”).
          </li>
        </ul>
        <ul>
          <li>
            {" "}
            Take advantage of the opportunity to subscribe and unsubscribe from
            your mailing list in each message. To do this, add reply buttons
            (e.g., “Write 0 to unsubscribe”)
          </li>
        </ul>
        <ul>
          <li> Offer users to save your contact.</li>
        </ul>
        <ul>
          <li>
            {" "}
            Minimize the presence of a link in messages at first use of the bot.
          </li>
        </ul>
        <ul>
          <li>
            {" "}
            New phone numbers have a greater risk of being blocked. Before
            connecting to a completely new number, you can use WhatsApp
            personally for some time (chat with other numbers so that you have a
            variety of incoming and outgoing messages from different numbers).
          </li>
        </ul>
        <ul>
          <li>
            {" "}
            When you start using the bot, send no more than 6 -12 messages per
            minute, i.e. send messages in batches, not all at once. The longer
            your bot works, the more messages you can send.
          </li>
        </ul>
        <p>Note: About Facebook’s ban policy</p>
        <p>
          The same policy applies when you use your phone or{" "}
          <a href="#">web.whatsApp.com</a>.{" "}
        </p>
        <p>
          So. All the tips are the same when you use web.whatsapp.com or your
          phone or Ultramsg, sending spam messages by phone directly WhatsApp
          will block A number.
          <br />
          There is no difference between using our product and your phone or{" "}
          <a href="#">web.whatsApp.com</a>.
        </p>
        <h2>
          <span id="Is_there_a_guarantee_that_the_number_will_not_be_blocked">
            Is there a guarantee that the number will not be blocked?
          </span>
        </h2>
        <p>
          About the WhatsApp ban policy, the same policy applies when you use
          your phone or Web.WhatsApp.com.
          <br />
          So. All the tips are the same when you use the Web.WhatsApp.com or
          your phone.
          <br />
          Sending spam messages by phone directly will also apply the same
          policy.
          <br />
          There is no difference between using our product and your phone.
        </p>
        <p>
          <strong>Finally … </strong>do not forget the golden advice
          <strong>
            {" "}
            “Do not send messages of advertisements or spam, send to your
            customers who are waiting for messages from you.”
          </strong>
        </p>
        <p>
          <strong>Finally … </strong>do not forget the golden advice
          <strong>
            {" "}
            “Do not send messages of advertisements or spam, send to your
            customers who are waiting for messages from you.”
          </strong>
        </p>
        <h2>
          <span id="How_to_activate_a_banned_WhatsApp_number">
            <strong>How to activate a banned WhatsApp number</strong>?
          </span>
        </h2>
        <p>
          If your account is banned, you’ll see this message when trying to
          access WhatsApp APP “Your phone number is banned from using WhatsApp.
        </p>
        <p>
          If your account is banned, you’ll see this message when trying to
          access WhatsApp APP “Your phone number is banned from using WhatsApp.
        </p>
        <p>
          You can follow simple{" "}
          <a
            href="https://faq.whatsapp.com/general/account-and-profile/about-account-bans/?lang=en"
            data-type="URL"
            data-id="https://faq.whatsapp.com/general/account-and-profile/about-account-bans/?lang=en"
            target="_blank"
            rel="noreferrer"
          >
            steps
          </a>{" "}
          to activate the phone number.
        </p>
        <p>1 :: </p>
        <p>
          Usually, the number is retrieved within minutes the first time because
          the process of recovering the number is automatic, and the second time
          it may be a little delayed.
          <br />
          If the ban is repeated, the account will be reviewed manually, and
          activation will be delayed for a long time. So be careful and use
          sending messages wisely in case your number gets banned.
        </p>
        <p>2::</p>
        <p>
          After activating the WhatsApp number, it is necessary to delete all
          messages in the queue, in order not to be sent again
          <br />
          This can easily be done by:
        </p>
        <p>
          <a
            href="https://docs.ultramsg.com/api/post/messages/clear"
            target="_blank"
            rel="noreferrer"
          >
            https://docs.ultramsg.com/api/post/messages/clear
          </a>
        </p>
        <pre class="wp-block-code">
          <code>
            <div class="enlighter-default enlighter-v-inline enlighter-t-classic ">
              <span class="enlighter">
                <span class="enlighter-text">status : queue</span>
              </span>
            </div>
            <code
              data-enlighter-language="powershell"
              class="EnlighterJSRAW enlighter-origin"
            >
              status : queue
            </code>
          </code>
        </pre>
        <h2 class="gb-headline gb-headline-b9e3ae97 gb-headline-text">
          <span id="Why_does_it_not_appear_on_the_green_certification_mark">
            Why does it not appear on the green certification mark?
          </span>
        </h2>
        <p>
          The green certification mark is for official subscriptions from
          Facebook, we currently do not support it.
        </p>
        <p>
          The official API will pay a monthly fee + the charge for each message
          received or sent, in addition, it needs approvals from the Facebook
          company and is only available to official companies because they need
          official papers for approval and need a week or two for approval.
        </p>
        <p>
          With Ultramsg, the message sends from your number, and you can create
          the account and start the integration within 5 minutes.
        </p>
        <h6>
          <a
            href="https://user.ultramsg.com/app/support/faq/faq.php#q6"
            target="_blank"
            rel="noreferrer"
          ></a>
        </h6>
        <h2>
          <span id="Why_are_links_not_clickable_in_the_WhatsApp_message">
            Why are links not clickable in the WhatsApp message?
          </span>
        </h2>
        <p>
          When a message is sent between two phone numbers for the very first
          time, and the contacts aren’t saved or There are no conversations
          between you and the recipient of the message, any links or media
          content is by default not clickable. This is by design of WhatsApp App
          to prevent spam, and it applies to everyone.19 May 2020.
        </p>
        <p>
          Even if the send a message through your phone, it will not be a
          hyperlink. Also, it’s not related to the API.
        </p>
        <h2>
          <span id="How_to_receive_pictures_and_files_sent_by_clients">
            How to receive pictures and files sent by clients?
          </span>
        </h2>
        <p>
          You can only receive files through the web hook
          <br />
          With the option “Webhook Download Media” enabled in addition to
          <br />
          Webhook on Received.
        </p>
        <div className="img-container">
          <img
            src={images.settings}
            alt="How_to_receive_pictures_and_files_sent_by_clients"
          />
        </div>

        <h2>
          <span id="How_long_does_an_authentication_session_stay_active_without_having_to_scan_a_QR">
            How long does an authentication session stay active without having
            to scan a QR?
          </span>
        </h2>

        <p>
          There is no time for the session to end, it may stay for 6 months and
          up to 1 year without any problem.
          <br />
          It is enough to scan the QR once.
          <br />
          The session ends in one of the following cases:
        </p>

        <ul>
          <li>When deleting the session from the mobile.</li>
          <li>When you press the “logout” button from your account.</li>
          <li>
            When an update in the WhatsApp application requires a new QR scan.
          </li>
        </ul>

        <p>
          You can check the state of the instance if it needs QR scanning or is
          connected by:
          <br />
          <a
            href="https://docs.ultramsg.com/api/get/instance/status"
            target="_blank"
            rel="noreferrer noopener"
          >
            https://docs.ultramsg.com/api/get/instance/status
          </a>
        </p>
        <h2>
          <span id="How_to_format_font_in_WhatsApp_messages">
            How to format font in WhatsApp messages ?
          </span>
        </h2>
        <p>You can format text inside your messages</p>
        <p>
          <strong>Italic</strong>
        </p>

        <p>
          To&nbsp;<em>italicize</em>&nbsp;your message, place an underscore on
          both sides of the text:
        </p>

        <pre class="wp-block-code">
          <code>
            <div class="enlighter-default enlighter-v-inline enlighter-t-classic ">
              <span class="enlighter">
                <span class="enlighter-text">_text_</span>
              </span>
            </div>
            <code
              data-enlighter-language="generic"
              class="EnlighterJSRAW enlighter-origin"
            >
              _text_
            </code>
          </code>
        </pre>

        <p>
          <strong>Bold</strong>
        </p>

        <p>
          To&nbsp;<strong>bold</strong>&nbsp;your message, place an asterisk on
          both sides of the text:
        </p>

        <pre class="wp-block-code">
          <code>
            <div class="enlighter-default enlighter-v-inline enlighter-t-classic ">
              <span class="enlighter">
                <span class="enlighter-text">*text*</span>
              </span>
            </div>
            <code
              data-enlighter-language="generic"
              class="EnlighterJSRAW enlighter-origin"
            >
              *text*
            </code>
          </code>
        </pre>

        <p>
          <strong>Strikethrough</strong>
        </p>

        <p>
          To&nbsp;<s>strikethrough</s>&nbsp;your message, place a tilde on both
          sides of the text:
        </p>

        <pre class="wp-block-code">
          <code>
            <div class="enlighter-default enlighter-v-inline enlighter-t-classic ">
              <span class="enlighter">
                <span class="enlighter-text">~text~</span>
              </span>
            </div>
            <code
              data-enlighter-language="generic"
              class="EnlighterJSRAW enlighter-origin"
            >
              ~text~
            </code>
          </code>
        </pre>

        <p>
          <strong>Monospace</strong>
        </p>

        <p>
          To&nbsp;<code>monospace</code>&nbsp;your message, place three
          backticks on both sides of the text:
        </p>

        <pre class="wp-block-code">
          <code>
            <div class="enlighter-default enlighter-v-inline enlighter-t-classic ">
              <span class="enlighter">
                <span class="enlighter-text">```text```</span>
              </span>
            </div>
            <code
              data-enlighter-language="generic"
              class="EnlighterJSRAW enlighter-origin"
            >
              ```text```
            </code>
          </code>
        </pre>
      </div>

      <Footer />
    </>
  );
};

export default BlogFaq;
