import etOnboardingScreen from '../screenobjects/etOnboardingScreen';
import etLoginPage from '../screenobjects/etLoginPage';
import etLoggedInPage from '../screenobjects/etLoggedInPage';
import etSignupPage from '../screenobjects/etSignupPage';
import etEmailVerificationPage from '../screenobjects/etEmailVerificationPage';
import WebViewScreen from '../screenobjects/WebviewScreen';
import { CONTEXT_REF } from '../helpers/WebView';

function createRandomNumber(min: number, max: number) {
    return  Math.floor(Math.random() * (max - min)) + min;
}

describe('WebdriverIO and Appium, when interacting with a login form,', () => {
    let index: number = 0;
    beforeEach(async()=>{
        // go to login screen
        await etOnboardingScreen.waitForIsShown(true);
        await etOnboardingScreen.tapOnSignIn();
        await etLoginPage.waitForIsShown(true);

        await WebViewScreen.waitForWebsiteLoaded();
    })

    it('should be able to sign up successfully', async () => {
        let randomNumber = createRandomNumber(0, Math.pow(10, 7));
        console.log('randomNumber=' + randomNumber);
        let username = 'Autouser' + randomNumber; 
        let email = 'etoroautomation' + randomNumber + '@gmail.com'; 
        let password = 'Password' + randomNumber;
        console.log('username=' + username);
        console.log('email=' + email);
        console.log('password=' + password);

        await WebViewScreen.switchToContext(CONTEXT_REF.WEBVIEW);

        await etLoginPage.submitSignup();
        await etSignupPage.submitSignup({username: username, email: email, password: password});

        await etEmailVerificationPage.waitForIsShown(true);
        await expect(etEmailVerificationPage.title).toBeExisting();
    });
});
