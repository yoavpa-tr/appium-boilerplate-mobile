import AppScreen from './AppScreen';

class OnboardingScreen extends AppScreen {
    constructor () {
        super('[value=Sign In]');
    }

    get signIn () {return $('[value=Sign In]');}

    async tapOnSignIn(){
        await this.signIn.click();
    }
}

export default new OnboardingScreen();
