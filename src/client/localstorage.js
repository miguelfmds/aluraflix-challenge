export class LocalStorage {
  static storage = window.localStorage;

  static deserialize(key = 'videos') {
    return JSON.parse(this.storage.getItem(key));
  }

  static serialize(data, key = 'videos') {
    this.storage.setItem(key, JSON.stringify(data));
  }

  static get() {
    return this.deserialize();
  }

  static set(data) {
    this.serialize(data);
  }

  static addVideo(video) {
    const allVideos = this.get() ?? [];
    allVideos.push(video);
    this.set(allVideos);
  }

  static removeVideo(videoId) {
    const allVideos = this.get();
    const newVideos = allVideos.filter((video) => video.id !== videoId);
    this.set(newVideos);
  }
}
