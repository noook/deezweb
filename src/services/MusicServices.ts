import { Track } from '@/interfaces/track';
import fetchJsonp from 'fetch-jsonp';

export function loadLocalStorage(): Array<Track> {
  return JSON.parse(localStorage.getItem('favorites')!) || [];
}

export function saveFavorites(favorites: Array<Track>) {
  localStorage.setItem('favorites', JSON.stringify(favorites));
}

export function toggleFavorites(favorites: Array<Track>, track: Track) {
  const favoriteIds = favorites.map(item => item.id);

  if (favoriteIds.includes(track.id)) {
    const toDelete = favorites.find(item => item.id === track.id);
    favorites.splice(favorites.indexOf(toDelete!), 1);
  } else {
    favorites.push(track);
  }
}

export function shuffle(favorites: Array<Track>): Array<Track> {
  return favorites
    .map((a: Track) => [Math.random(), a])
    .sort((a: any, b: any) => a[0] - b[0])
    .map((a: any) => a[1]);
}

export function search(params: any): Promise<fetchJsonp.Response> {
  return fetchJsonp(`https://api.deezer.com/search/?output=jsonp&q=${params.q}&order=${params.order}`);
}
