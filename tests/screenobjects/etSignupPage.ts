import AppScreen from './AppScreen';
import Gestures from '../helpers/Gestures';

class etSignUpScreen extends AppScreen {
    constructor () {
      super('[value=Create an account]');
    }

    get inputUsername() {
      return $('[automation-id="sign-up-user-name-input"]');
    }

    get inputEmail() {
      return $('[automation-id="sign-up-email-input"]');
    }

    get inputPassword() {
      return $('[automation-id="sign-up-password-input"]');
    }

    get checkboxTerm() {
      return $('[automation-id="sign-up-checkbox-terms"]');
    }

    get checkboxPolicies() {
      return $('[automation-id="sign-up-checkbox-policies"]');
    }

    get btnSubmit() {
      return $('[automation-id="sign-up-button-submit"]');
    }

    async submitSignup({ username, email, password }:{username:string; email: string, password:string;}) {
      //TODO: exempt recaptca
      await this.inputUsername.setValue(username);
      await this.inputEmail.setValue(email);
      await this.inputPassword.setValue(password);
      await this.checkboxTerm.click();
      await this.checkboxPolicies.click();

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
          await $('[automation-id=sign-up-join-title]').click();
          console.log('keyboard closed');
      }
      // On smaller screens there could be a possibility that the button is not shown
      await Gestures.checkIfDisplayedWithSwipeUp(await this.btnSubmit, 2);
      await this.btnSubmit.click();
    }
}

export default new etSignUpScreen();
