import { Component } from '@angular/core';
import { AdMobFree, AdMobFreeBannerConfig, AdMobFreeInterstitialConfig, AdMobFreeRewardVideoConfig } from '@ionic-native/admob-free';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(private admobFree: AdMobFree) {
    this.showBannerAd();
    //this.showInterstitialAd();
    this.showVideoRewardsAd();
  }

  async showBannerAd() {
    const bannerConfig: AdMobFreeBannerConfig = {
      // add your config here
      // for the sake of this example we will just use the test config

      //id: 'ca-pub-kfkfkfkfkfkfkfk',
      isTesting: true,
      autoShow: true,
      //bannerAtTop: true
     };
     this.admobFree.banner.config(bannerConfig);
     
     try {
        const result = await this.admobFree.banner.prepare();
        console.log(result);
      }catch (e) {
        console.log(e);
      }
  }

  async showInterstitialAd() {
    try {
      const interstitialConfig: AdMobFreeInterstitialConfig = {
        isTesting: true,
        autoShow: true
      }

      this.admobFree.interstitial.config(interstitialConfig);
      const result = await this.admobFree.interstitial.prepare();
      console.log(result);
    } catch (e) {
      console.log(e);
    }
  }

  async showVideoRewardsAd() {
    try {
      const videoRewordsConfig: AdMobFreeRewardVideoConfig = {
        isTesting: true,
        autoShow: true
      }

      this.admobFree.rewardVideo.config(videoRewordsConfig);
      const result = await this.admobFree.rewardVideo.prepare();
      console.log(result);
    } catch (e) {
      console.log(e);
    }
  }

}
