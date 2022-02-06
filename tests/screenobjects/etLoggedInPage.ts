import AppScreen from './AppScreen';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class etLoggedInPage extends AppScreen {
    constructor () {
        super('[automation-id="menu-layout"]');
    }

    get sideMenu() {
        return $('[automation-id="menu-layout"]');
    }
}

export default new etLoggedInPage();
