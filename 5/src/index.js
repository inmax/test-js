const target = document.getElementById('sunmedia');
/**
 *
 * @param {string} src The video media file url
 * @return {HTMLVideoElement}
 */
const videoElm = createVideoElement('https://vod.addevweb.com/sunmedia/demos/v/normal.mp4');
/**
 * @param {HTMLDivElement} targetElm
 * @param {HTMLVideoElement} videoElm
 */
onInsertVideoWhenTargetIsVisible(target, videoElm);
