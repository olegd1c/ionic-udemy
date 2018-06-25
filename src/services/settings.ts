export class SettingsService {
    private altBackround = false;

    setBackround(alt: boolean) {
        this.altBackround = alt;
    }

    isAltBackround() {
        return this.altBackround;
    }
}