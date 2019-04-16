//const misc = require('../helpers/misc');

module.exports = {
    
    add_photo_file: element(by.css('[type="file"]')),

    // ========== Upload Media ==================================================
    uploadMedia: async function (media) {
        const pathSeperator = process.platform == "linux" ? "/" : "\\"

        //C:\foundation-tests
        const pathToMedia = process.cwd() + `..${pathSeperator}resources${pathSeperator}img` + media;

        //Uploading meida
        //NOTE* when adding mutiple media files add a wait: Image --wait-- video, otherwise some funkey UI issues on the add screen
        await this.add_photo_file.sendKeys(pathToMedia);
    },

    uploadVideo: async function (video) {
        const pathSeperator = process.platform == "linux" ? "/" : "\\"

        //C:\foundation-tests
        const pathToMedia = process.env.LARGE_VIDEO_PATH || process.cwd() + `${pathSeperator}app-foun${pathSeperator}resocurces` + video;

        //Uploading meida
        //await this.add_video_file.sendKeys(pathToMedia);
    },




}
