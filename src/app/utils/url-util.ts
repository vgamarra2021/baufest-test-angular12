export class UrlUtil {
  static getIdFromUrl(url: string): string | null {
    const regex = /\/(\d+)(?:\/)?$/;
    const match = url.match(regex);
    return match ? match[1] : null;
  }
}
