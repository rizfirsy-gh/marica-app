export const dummyCerita = [
  {
    title: "Literasi Marica",
    thumbnail: require("../images/marica-thumbnail.png"),
    episodes: [
      {
        youtubeId: "mG8gR13blEE",
        title: "Materi Geometri",
        thumbnail: "geometri.png",
      },
      {
        youtubeId: "IoVNH5-xpFY",
        title: "Materi Aljabar",
        thumbnail: "aljabar.png",
      },
      {
        youtubeId: "qRazIMvmnOM",
        title: "Materi Bilangan",
        thumbnail: "bilangan.png",
      },
      {
        youtubeId: "fq1a07Jw0Oo",
        title: "Materi Data",
        thumbnail: "data.jpg",
      },
    ],
  },
  {
    title: "Short Literasi Marica",
    thumbnail: require("../images/marica-thumbnail.png"),
    episodes: [
      {
        youtubeId: "xM_0EnIKI8I",
        title: "Ragam Wayang Indonesia - Literasi Budaya",
      },
      {
        youtubeId: "aDgf2mnsHbg",
        title: "Seberapa Cepat Internet Indonesia - Literasi Digital",
      },
      {
        youtubeId: "CojbLXT3o-E",
        title: "Apa Mungkin Internet Mati? - Literasi Digital",
      },
      {
        youtubeId: "RO8s_kHoh88",
        title: "Bakau Si Penjaga Pantai - Literasi Sains",
      },
      {
        youtubeId: "ZcCUBC0fBGQ",
        title:
          "Hewan yang Bertahan Hidup dengan Memakan Racun - Literasi Sains",
      },
      {
        youtubeId: "3Oj25ROIMKs",
        title: "Kenapa Orang Gampang Percaya Hoax - Literasi Digital",
      },
    ],
  },
  {
    title: "Main Toca Boca",
    thumbnail: require("../images/goduplo-thumbnail.png"),
    episodes: [
      {
        youtubeId: "i8IhDEvnKGI",
        title:
          "Buat Rumah Hello Kitty Untuk Rena! - Toca Boca Eps 01 GoDuplo TV",
        isNew: true,
        thumbnail: require("../images/goduplo-thumbnail.png"),
      },
      {
        youtubeId: "Y2z-5NJvMCM",
        title: "Kalian Pernah Main Game Ini Nggak?",
      },
      {
        youtubeId: "mFtSkwC4kp4 ",
        title: "Drama Pengemis & Si Anak Sombong - Toca Boca Eps 02 GoDuplo TV",
      },
      {
        youtubeId: "2_6UZptOvIM",
        title: "Drama Hilang di Taman Hiburan - Toca Boca Eps 03 GoDuplo TV",
        isNew: true,
        thumbnail: require("../images/goduplo-thumbnail.png"),
      },
      {
        youtubeId: "YtiIqTU9iz4",
        title: "Drama Nene dan Yuka Jadi Mermaid - Toca Boca Eps 04 GoDuplo TV",
      },
      {
        youtubeId: "U4w9xIs2X_g",
        title: "Drama Wabah Virus Alien - Toca Boca Eps 05 GoDuplo TV",
      },
      {
        youtubeId: "KAsyuttfPhY",
        title: "Tim pink atau ungu?",
      },
      {
        youtubeId: "KAsyuttfPhY ",
        title: "Drama Anak Miskin dan Anak Kaya - Toca Boca Eps 06 GoDuplo TV",
      },
      {
        youtubeId: "p29KD122xZM ",
        title: "Drama Tersesat Ke Rumah Dracula - Toca Boca Eps 07 GoDuplo TV",
      },
    ],
  },
  {
    title: "Cerita Rakyat Jawa dan DKI Jakarta",
    thumbnail: require("../images/cia-thumbnail.png"),
    episodes: [
      {
        youtubeId: "2tOyG9sxTWc",
        title:
          "Kisah Timun Mas dari Jawa Timur - Animasi Cerita Indonesia (ACI)",
        isNew: true,
        thumbnail: require("../images/cia-thumbnail.png"),
      },
      {
        youtubeId: "s1VyUOxoqM",
        title:
          "Kisah Cindelaras dari Jawa Timur - Animasi Cerita Indonesia (ACI)",
        isNew: true,
        thumbnail: require("../images/cia-thumbnail.png"),
      },
      {
        youtubeId: "i4A9I3V9vtA",
        title:
          "Kisah Si Pitung dari DKI Jakarta - Animasi Cerita Indonesia (ACI)",
        isNew: true,
        thumbnail: require("../images/cia-thumbnail.png"),
      },
      {
        youtubeId: "5J8uGALWSTU",
        title:
          "Kisah Murtado, Macan Kemayoran dari DKI Jakarta - Animasi Cerita Indonesia (ACI)",
      },
      {
        youtubeId: "wzUIq9b_5Tc",
        title:
          "Kisah Asal-Usul Cianjur dari Jawa Barat - Animasi Cerita Indonesia (ACI)",
      },
      {
        youtubeId: "hSE-GFB-ENY",
        title:
          "Kisah Bawang Putih Bawang Merah dari Jawa Tengah - Animasi Cerita Indonesia (ACI)",
      },
      {
        youtubeId: "4K1t8xhW4kU",
        title:
          "Kisah Keong Mas dari Jawa Timur - Animasi Cerita Indonesia (ACI)",
      },
    ],
  },
  {
    title: "BeaBeo Story",
    thumbnail: require("../images/beabeo-thumbnail.png"),
    episodes: [
      {
        youtubeId: "4bPylWTEPzs",
        title: "Serunya Bermain Mobil Balap",
      },
      {
        youtubeId: "9FEfWel3_mo",
        title: "Hadiah Ulang Tahun Raya",
      },
      {
        youtubeId: "DJEP6Bbo0S0",
        title: "Bermain Layang-Layang",
      },
      {
        youtubeId: "me2krIcCuoA",
        title: "Hati Hati Orang Asing",
      },
    ],
  },
];

//store all titles key
const allTitles = [];
dummyCerita.forEach((item) => {
  allTitles.push(item.title);

  item.episodes.map((eps) => allTitles.push(eps.title));
});

console.log("allTitles", allTitles);
