import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Pro, AppInfo, DeployInfo } from '@ionic-native/pro';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public deployChannel = "";
  public isProd = false;
  public downloadProgress = 0;
  private readonly CHANNEL_PROD = 'Production';
  private readonly CHANNEL_MASTER = 'Master';

  constructor(public navCtrl: NavController, private pro: Pro) {
    //this.checkChannel();
    // Get app info'
    /*
    this.pro.getChannel().then((res: any) => {
      console.log('getChannel');
      console.log(res);
      console.log(this.pro.deviceInfo);
    });
    */

    /*
    // Get app info
    this.pro.getAppInfo().then((res: AppInfo) => {
      console.log(res)
    })

    // Get live update info
    this.pro.deploy().info().then((res: DeployInfo) => {
      console.log(res)
    })
    */    
  }

  

  async checkChannel() {
    try {
      //console.log(Pro.deploy.getCurrentVersion());
      //console.log(this.pro.deviceInfo);
      //console.log(Pro.deploy.info());
      /*
      const res = await Pro.deploy.info();      
      this.deployChannel = res.channel;
      this.isProd = (this.deployChannel === this.CHANNEL_PROD)
      */
     console.log('getAppInfo');
     const getAppInfo = await this.pro.getAppInfo();
     console.log(getAppInfo);

    } catch (err) {
      //Pro.monitoring.exception(err);
      console.log(err);
    }

    try {
      console.log('deploy');
      const depl = await this.pro.deploy();
      console.log(depl);

    } catch (err) {
      //Pro.monitoring.exception(err);
      console.log(err);
    }  

    try {
      console.log('info');
      const info = await this.pro.deploy().info();
      console.log(info);

    } catch (err) {
      //Pro.monitoring.exception(err);
      console.log(err);
    }    
  }
/*
  async toggleBeta() {
    const config = {
      channel: (this.isProd ? this.CHANNEL_PROD : this.CHANNEL_MASTER)
    }

    try {
      await Pro.deploy.init(config);
      await this.checkChannel();
      await this.performAutomaticUpdate(); // Alternatively, to customize how this works, use performManualUpdate()
    } catch (err) {
      Pro.monitoring.exception(err);
    }

  }
*/
  async performAutomaticUpdate() {

    /*
      This code performs an entire Check, Download, Extract, Redirect flow for
      you so you don't have to program the entire flow yourself. This should
      work for a majority of use cases.
    */
/*
    try {
      const resp = await Pro.deploy.checkAndApply(true, progress => {
          this.downloadProgress = progress;
      });

      if (resp.update){
        // We found an update, and are in process of redirecting you since you put true!
      }else{
        // No update available
      }
    } catch (err) {
      Pro.monitoring.exception(err);
    }
    */
  }

  async performManualUpdate() {

    /*
      Here we are going through each manual step of the update process:
      Check, Download, Extract, and Redirect.
      This code is currently exactly the same as performAutomaticUpdate,
      but you could split it out to customize the flow.

      Ex: Check, Download, Extract when a user logs into your app,
        but Redirect when they logout for an app that is always running
        but used with multiple users (like at a doctors office).
    */

    /*
    try {
      const haveUpdate = await Pro.deploy.check();

      if (haveUpdate){
        this.downloadProgress = 0;

        await Pro.deploy.download((progress) => {
          this.downloadProgress = progress;
        })
        await Pro.deploy.extract();
        await Pro.deploy.redirect();
      }
    } catch (err) {
      Pro.monitoring.exception(err);
    }
*/
  }
}
