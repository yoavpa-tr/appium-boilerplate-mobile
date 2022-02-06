import AppScreen from './AppScreen';
import Gestures from '../helpers/Gestures';

class eToroLoginScreen extends AppScreen {
    constructor () {
        super('[value=Username or Email]');
    }

    get inputUsername() {
        return $('[automation-id="login-sts-username-input"]');
    }
    get inputPassword() {
        return $('[automation-id="login-sts-password-input"]');
    }
    get btnSignin() {
        return $('[automation-id="login-sts-btn-sign-in"]');
    }
    get btnSignup() {
        return $('[automation-id="login-sts-link-sign-up"]');
    }
    async tapOnUsername(){
        await this.inputUsername.click();
    }
    async tapOnSignInButton(){
        await this.btnSignin.click();
    }
    async tapOnSignUpButton(){
        await this.btnSignup.click();
    }
    async submitLoginForm({ username, password }:{username:string; password:string;}) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);

        if (await driver.isKeyboardShown()) {
            /**
             * Normally we would hide the keyboard with this command `driver.hideKeyboard()`, but there is an issue for hiding the keyboard
             * on iOS when using the command. You will get an error like below
             *
             *  Request failed with status 400 due to Error Domain=com.facebook.WebDriverAgent Code=1 "The keyboard on iPhone cannot be
             *  dismissed because of a known XCTest issue. Try to dismiss it in the way supported by your application under test."
             *  UserInfo={NSLocalizedDescription=The keyboard on iPhone cannot be dismissed because of a known XCTest issue. Try to dismiss
             *  it in the way supported by your application under test.}
             *
             * That's why we click outside of the keyboard.
             */
            //  driver.hideKeyboard();
            await $('[automation-id=login-sts-wrapp-title]').click();
            console.log('keyboard closed');
        }
        // On smaller screens there could be a possibility that the button is not shown
        await Gestures.checkIfDisplayedWithSwipeUp(await this.btnSignin, 2);
        await this.tapOnSignInButton();
    }

    async submitSignup() {
        await this.tapOnSignUpButton(); // patch: the first click doesn't affect
        await this.tapOnSignUpButton();
  }
}

export default new eToroLoginScreen();
