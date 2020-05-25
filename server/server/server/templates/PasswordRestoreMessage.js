module.exports = {
  restoreMessage(restoreLink, restoreCode) {
    return `
<!DOCTYPE html>
<html>
  <header></header>
  <body
    style="
      display: flex;
      justify-content: center;
    align-items: center;
      flex-direction: column;
      font-family: 'Postmates Std', 'Helvetica', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif; font-size: 16px; font-smoothing: always; font-style: normal; font-weight: 400; letter-spacing: -0.18px; line-height: 24px; mso-line-height-rule: exactly; text-decoration: none; vertical-align: top; width: 100%;"
    "
  >
    <div style=" padding: 5rem; width: 60%; border: 30px solid #56CCF2;">
      <h1>Reset Your Password</h1>
      <div style="color: #BBBBC7">
        Yor code to password restore is <h1>${restoreCode}</h1>
        Tap the button below to reset your account
        password. If you didn't request a new password, 
        you can safely delete this email. </div>
      <a
        data-click-track-id="37"
        
        href=${restoreLink}
        style="
        color: white;
          
          font-smoothing: always;
          font-style: normal;
          font-weight: 600;
          letter-spacing: 0.7px;
          text-decoration: none;
          vertical-align: top;
          background: linear-gradient(238deg, #2F80ED 0%, #56CCF2 100%);
          border-radius: 28px;
          display: flex;
          text-align: center;
          justify-content: center;
          text-transform: uppercase;
          margin-right: auto;
          margin-left: auto;
          padding-left: 5rem;
          width: 15rem;
        "
      >
        Reset Password
      </a>
    </div>
  </body>
</html>`;
  },
}
