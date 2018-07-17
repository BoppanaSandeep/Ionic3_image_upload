import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions';
import { HomePage } from '../home/home';

/**
 * Generated class for the SecondPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-second',
    templateUrl: 'second.html',
})
export class SecondPage {

    constructor(public navCtrl: NavController, public navParams: NavParams, private nativePageTransitions: NativePageTransitions) {
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad SecondPage');
    }

    goBack() {
        if (this.navCtrl.canGoBack()) {
            let options: NativeTransitionOptions = {
                direction: 'down',
                duration: 500,
                slowdownfactor: -1,
                slidePixels: 20,
            };

            this.nativePageTransitions.slide(options);
            this.navCtrl.pop();
        } else {
            let options: NativeTransitionOptions = {
                duration: 300
            };
            this.nativePageTransitions.fade(options);
            this.navCtrl.setRoot(HomePage);
        }
    }

}
