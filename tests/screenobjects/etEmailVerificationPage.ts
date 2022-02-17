import AppScreen from './AppScreen';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class etEmailVerificationPage extends AppScreen {
    constructor () {
        super('[automation-id="email-verification-got-email-title"]');
    }

    get title() {
        return $('[automation-id="email-verification-got-email-title"]');
    }

    get skipBtn() {
      return $('[automation-id="email-verification-skip-link"]');
    } 

    async tapOnSkipBtn(){
      await this.skipBtn.click();
    }
}

export default new etEmailVerificationPage();
