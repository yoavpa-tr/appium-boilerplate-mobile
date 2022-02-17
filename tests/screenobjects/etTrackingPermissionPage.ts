import AppScreen from './AppScreen';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class etTrackingPermissionPage extends AppScreen {
    constructor () {
        super('[automation-id="tracking-permissions-popup"]');
    }

    get continueBtn() {
      return $('[value="Continue"]');
    } 

    async tapOnContinueBtn(){
      await this.continueBtn.click();
    }
}

export default new etTrackingPermissionPage();
