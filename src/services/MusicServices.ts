import api from './api';
import { Track } from '@/interfaces/track';

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
