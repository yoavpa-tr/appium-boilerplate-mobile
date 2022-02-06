import etOnboardingScreen from '../screenobjects/etOnboardingScreen';
import etLoginPage from '../screenobjects/etLoginPage';
import etLoggedInPage from '../screenobjects/etLoggedInPage';
import WebViewScreen from '../screenobjects/WebviewScreen';
import { CONTEXT_REF } from '../helpers/WebView';

describe('WebdriverIO and Appium, when interacting with a login form,', () => {
    beforeEach(async()=>{
        // go to login screen
        await etOnboardingScreen.waitForIsShown(true);
        await etOnboardingScreen.tapOnSignIn();
        await etLoginPage.waitForIsShown(true);

        await WebViewScreen.waitForWebsiteLoaded();
    })

    it('should be able to login successfully', async () => {
        await WebViewScreen.switchToContext(CONTEXT_REF.WEBVIEW);

        let username = 'avish+01@etoro.com';
        let password = 'Aa123456';

        await etLoginPage.submitLoginForm({username, password});

        await etLoggedInPage.waitForIsShown(true);
        await expect(etLoggedInPage.sideMenu).toBeExisting();
    });
});
