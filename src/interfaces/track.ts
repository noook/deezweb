export interface Track {
  id: Number
  title: String
  title_short: String
  preview: String
}

type Artist = {
  id: Number,
  name: String,
  picture: String,
}

type Album = {
  id: Number,
  title: String,
  cover: String,
  tracklist: String,
}
