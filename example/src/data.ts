export type LocationInfo = {
  title: string;
  image: string;
  introText: string;
  lat: number;
  lng: number;
  taxonomyATerms: string[];
  taxonomyBTerms: string[];
  taxonomyCTerms: string[];
  taxonomyDTerms: string[];
  categories: string[];
  terms: string[];
  text: string;
};

export const locationInfos: LocationInfo[] = [
  {
    title: "Afghanistan",
    image: "/wp-content/uploads/2022/02/panel-sample-img.png",
    introText:
      "Lorem ipsum dolor sit amet, in has natum novum civibus, te vis tota civibus. Cu oblique aliquando assueverit nec. Quo aliquip atomorum efficiantur ea, ne has porro mollis eripuit. Mea ne magna offendit perfecto.",
    lat: 33.93911,
    lng: 67.709953,
    taxonomyATerms: ["Dolor sit amet", "Has natum novum", "Minimum imperdiet"],
    taxonomyBTerms: ["Mentitum"],
    taxonomyCTerms: ["Cu oblique aliquando", "Quo aliquip", "Efficiantur eane"],
    taxonomyDTerms: [
      "Quod",
      "Augue",
      "Vituperatoribus",
      "Partem iuvaret",
      "Accusata dissentiunt",
      "An quis",
    ],
    categories: ["Reprimique", "Theophrastus contentiones", "Putant dolorem"],
    terms: ["Disputationi"],
    text: "Eos praesent incorrupte dissentiunt ne, modus evertitur disputando vel ex, te sit facilisi quaerendum.",
  },
  {
    title: "DR Congo",
    image: "/wp-content/uploads/2022/02/panel-sample-img.png",
    introText:
      "Lorem ipsum dolor sit amet, in has natum novum civibus, te vis tota civibus. Cu oblique aliquando assueverit nec. Quo aliquip atomorum efficiantur ea, ne has porro mollis eripuit. Mea ne magna offendit perfecto.",
    lat: 4.038333,
    lng: 21.758664,
    taxonomyATerms: ["Minimum imperdiet"],
    taxonomyBTerms: ["Mentitum"],
    taxonomyCTerms: ["Efficiantur eane"],
    taxonomyDTerms: ["Quod", "Partem iuvaret", "Accusata dissentiunt"],
    categories: ["Putant dolorem", "Mutat veniam"],
    terms: ["Disputationi"],
    text: "Eos praesent incorrupte dissentiunt ne, modus evertitur disputando vel ex, te sit facilisi quaerendum.",
  },
  {
    title: "Benin",
    image: "/wp-content/uploads/2022/02/panel-sample-img.png",
    introText:
      "Lorem ipsum dolor sit amet, in has natum novum civibus, te vis tota civibus. Cu oblique aliquando assueverit nec. Quo aliquip atomorum efficiantur ea, ne has porro mollis eripuit. Mea ne magna offendit perfecto.",
    lat: 9.30769,
    lng: 2.315834,
    taxonomyATerms: ["Vix mediocrem"],
    taxonomyBTerms: ["Mentitum", "Accumsan ei eum"],
    taxonomyCTerms: ["Cu oblique aliquando"],
    taxonomyDTerms: ["Quod", "Augue", "Accusata dissentiunt"],
    categories: [
      "Putant dolorem",
      "Reprimique",
      "Denique contentiones",
      "Disputationi et",
    ],
    terms: ["Mutat veniam"],
    text: "Eos praesent incorrupte dissentiunt ne, modus evertitur disputando vel ex, te sit facilisi quaerendum.",
  },
  {
    title: "Burundi",
    image: "/wp-content/uploads/2022/02/panel-sample-img.png",
    introText:
      "Lorem ipsum dolor sit amet, in has natum novum civibus, te vis tota civibus. Cu oblique aliquando assueverit nec. Quo aliquip atomorum efficiantur ea, ne has porro mollis eripuit. Mea ne magna offendit perfecto.",
    lat: -3.373056,
    lng: 29.918886,
    taxonomyATerms: ["Gloriatur"],
    taxonomyBTerms: ["Mentitum", "Accumsan ei eum"],
    taxonomyCTerms: ["Efficiantur eane"],
    taxonomyDTerms: [
      "Accusata dissentiunt",
      "An quis",
      "Vituperatoribus",
      "Quod",
    ],
    categories: [
      "Putant dolorem",
      "Ut debet",
      "Reprimique",
      "Theophrastus contentiones",
      "Denique contentiones",
    ],
    terms: ["Disputationi"],
    text: "Eos praesent incorrupte dissentiunt ne, modus evertitur disputando vel ex, te sit facilisi quaerendum.",
  },
  {
    title: "Colombia",
    image: "/wp-content/uploads/2022/02/panel-sample-img.png",
    introText:
      "Lorem ipsum dolor sit amet, in has natum novum civibus, te vis tota civibus. Cu oblique aliquando assueverit nec. Quo aliquip atomorum efficiantur ea, ne has porro mollis eripuit. Mea ne magna offendit perfecto.",
    lat: 4.570868,
    lng: -74.297333,
    taxonomyATerms: ["Accusata"],
    taxonomyBTerms: [],
    taxonomyCTerms: ["Efficiantur eane"],
    taxonomyDTerms: [
      "Quod",
      "Partem iuvaret",
      "Accusata dissentiunt",
      "An quis",
      "Vituperatoribus",
    ],
    categories: ["Reprimique", "Theophrastus contentiones"],
    terms: ["Munere fabellas"],
    text: "Eos praesent incorrupte dissentiunt ne, modus evertitur disputando vel ex, te sit facilisi quaerendum.",
  },
  {
    title: "Cyprus",
    image: "/wp-content/uploads/2022/02/panel-sample-img.png",
    introText:
      "Lorem ipsum dolor sit amet, in has natum novum civibus, te vis tota civibus. Cu oblique aliquando assueverit nec. Quo aliquip atomorum efficiantur ea, ne has porro mollis eripuit. Mea ne magna offendit perfecto.",
    lat: 35.126413,
    lng: 33.429859,
    taxonomyATerms: ["Accusata"],
    taxonomyBTerms: ["Mentitum", "Accumsan ei eum"],
    taxonomyCTerms: ["Quo aliquip"],
    taxonomyDTerms: ["Quod", "Accusata dissentiunt", "Vituperatoribus"],
    categories: ["Denique contentiones", "Disputationi et"],
    terms: ["Contentiones"],
    text: "Eos praesent incorrupte dissentiunt ne, modus evertitur disputando vel ex, te sit facilisi quaerendum.",
  },
  {
    title: "El Salvador",
    image: "/wp-content/uploads/2022/02/panel-sample-img.png",
    introText:
      "Lorem ipsum dolor sit amet, in has natum novum civibus, te vis tota civibus. Cu oblique aliquando assueverit nec. Quo aliquip atomorum efficiantur ea, ne has porro mollis eripuit. Mea ne magna offendit perfecto.",
    lat: 13.794185,
    lng: -88.89653,
    taxonomyATerms: ["Has natum novum"],
    taxonomyBTerms: ["Mentitum"],
    taxonomyCTerms: ["Efficiantur eane", "Quo aliquip"],
    taxonomyDTerms: [
      "Quod",
      "Augue",
      "Partem iuvaret",
      "Accusata dissentiunt",
      "An quis",
      "Vituperatoribus",
    ],
    categories: ["Putant dolorem", "Reprimique", "Theophrastus contentiones"],
    terms: ["Disputationi"],
    text: "Eos praesent incorrupte dissentiunt ne, modus evertitur disputando vel ex, te sit facilisi quaerendum.",
  },
  {
    title: "Eritrea",
    image: "/wp-content/uploads/2022/02/panel-sample-img.png",
    introText:
      "Lorem ipsum dolor sit amet, in has natum novum civibus, te vis tota civibus. Cu oblique aliquando assueverit nec. Quo aliquip atomorum efficiantur ea, ne has porro mollis eripuit. Mea ne magna offendit perfecto.",
    lat: 15.179384,
    lng: 39.782334,
    taxonomyATerms: ["Dolor sit amet"],
    taxonomyBTerms: ["Mentitum"],
    taxonomyCTerms: ["Cu oblique aliquando"],
    taxonomyDTerms: ["Quod", "Augue", "Accusata dissentiunt", "An quis"],
    categories: ["Reprimique", "Theophrastus contentiones"],
    terms: ["Pri eu mentitum phaedrum"],
    text: "Eos praesent incorrupte dissentiunt ne, modus evertitur disputando vel ex, te sit facilisi quaerendum.",
  },
  {
    title: "Fiji",
    image: "/wp-content/uploads/2022/02/panel-sample-img.png",
    introText:
      "Lorem ipsum dolor sit amet, in has natum novum civibus, te vis tota civibus. Cu oblique aliquando assueverit nec. Quo aliquip atomorum efficiantur ea, ne has porro mollis eripuit. Mea ne magna offendit perfecto.",
    lat: -17.713371,
    lng: 178.065032,
    taxonomyATerms: ["Vix mediocrem"],
    taxonomyBTerms: ["Mentitum"],
    taxonomyCTerms: ["Cu oblique aliquando"],
    taxonomyDTerms: [
      "Quod",
      "Augue",
      "Partem iuvaret",
      "Accusata dissentiunt",
      "An quis",
      "Vituperatoribus",
    ],
    categories: ["Reprimique", "Theophrastus contentiones"],
    terms: ["Disputationi"],
    text: "Eos praesent incorrupte dissentiunt ne, modus evertitur disputando vel ex, te sit facilisi quaerendum.",
  },
  {
    title: "Georgia Abkhazia",
    image: "/wp-content/uploads/2022/02/panel-sample-img.png",
    introText:
      "Lorem ipsum dolor sit amet, in has natum novum civibus, te vis tota civibus. Cu oblique aliquando assueverit nec. Quo aliquip atomorum efficiantur ea, ne has porro mollis eripuit. Mea ne magna offendit perfecto.",
    lat: 42.782305,
    lng: 41.903252,
    taxonomyATerms: ["Accusata"],
    taxonomyBTerms: ["Mentitum"],
    taxonomyCTerms: ["Efficiantur eane"],
    taxonomyDTerms: ["Quod", "An quis", "Vituperatoribus"],
    categories: ["Reprimique", "Mutat veniam"],
    terms: ["Invidunt verterem"],
    text: "Eos praesent incorrupte dissentiunt ne, modus evertitur disputando vel ex, te sit facilisi quaerendum.",
  },
  {
    title: "Guatemala",
    image: "/wp-content/uploads/2022/02/panel-sample-img.png",
    introText:
      "Lorem ipsum dolor sit amet, in has natum novum civibus, te vis tota civibus. Cu oblique aliquando assueverit nec. Quo aliquip atomorum efficiantur ea, ne has porro mollis eripuit. Mea ne magna offendit perfecto.",
    lat: 16.787323,
    lng: -89.971225,
    taxonomyATerms: ["Dolor sit amet"],
    taxonomyBTerms: ["Mentitum"],
    taxonomyCTerms: ["Efficiantur eane"],
    taxonomyDTerms: [
      "Quod",
      "Partem iuvaret",
      "Accusata dissentiunt",
      "An quis",
    ],
    categories: [
      "Theophrastus contentiones",
      "Denique contentiones",
      "Reprimique",
    ],
    terms: ["Disputationi"],
    text: "Eos praesent incorrupte dissentiunt ne, modus evertitur disputando vel ex, te sit facilisi quaerendum.",
  },
  {
    title: "France",
    image: "/wp-content/uploads/2022/02/panel-sample-img.png",
    introText:
      "Lorem ipsum dolor sit amet, in has natum novum civibus, te vis tota civibus. Cu oblique aliquando assueverit nec. Quo aliquip atomorum efficiantur ea, ne has porro mollis eripuit. Mea ne magna offendit perfecto.",
    lat: 47.780380817763,
    lng: 1.0553256416786099,
    taxonomyATerms: ["Vix mediocrem"],
    taxonomyBTerms: ["Mentitum", "Accumsan ei eum"],
    taxonomyCTerms: ["Efficiantur eane"],
    taxonomyDTerms: [
      "Quod",
      "Partem iuvaret",
      "Accusata dissentiunt",
      "An quis",
      "Vituperatoribus",
    ],
    categories: ["Reprimique", "Mutat veniam"],
    terms: ["Pri eu mentitum phaedrum"],
    text: "Eos praesent incorrupte dissentiunt ne, modus evertitur disputando vel ex, te sit facilisi quaerendum.",
  },
  {
    title: "Israel Palestine",
    image: "/wp-content/uploads/2022/02/panel-sample-img.png",
    introText:
      "Lorem ipsum dolor sit amet, in has natum novum civibus, te vis tota civibus. Cu oblique aliquando assueverit nec. Quo aliquip atomorum efficiantur ea, ne has porro mollis eripuit. Mea ne magna offendit perfecto.",
    lat: 31.768319,
    lng: 35.21371,
    taxonomyATerms: ["Minimum imperdiet"],
    taxonomyBTerms: ["Mentitum"],
    taxonomyCTerms: ["Efficiantur eane"],
    taxonomyDTerms: ["Quod", "Accusata dissentiunt", "Vituperatoribus"],
    categories: ["Mutat veniam", "Disputationi et"],
    terms: ["Disputationi"],
    text: "Eos praesent incorrupte dissentiunt ne, modus evertitur disputando vel ex, te sit facilisi quaerendum.",
  },
  {
    title: "Kenya",
    image: "/wp-content/uploads/2022/02/panel-sample-img.png",
    introText:
      "Lorem ipsum dolor sit amet, in has natum novum civibus, te vis tota civibus. Cu oblique aliquando assueverit nec. Quo aliquip atomorum efficiantur ea, ne has porro mollis eripuit. Mea ne magna offendit perfecto.",
    lat: -0.023559,
    lng: 37.906193,
    taxonomyATerms: ["Accusata"],
    taxonomyBTerms: ["Mentitum", "Accumsan ei eum"],
    taxonomyCTerms: ["Cu oblique aliquando", "Efficiantur eane", "Quo aliquip"],
    taxonomyDTerms: ["Quod", "Accusata dissentiunt", "An quis"],
    categories: [
      "Reprimique",
      "Theophrastus contentiones",
      "Denique contentiones",
    ],
    terms: ["Disputationi"],
    text: "Eos praesent incorrupte dissentiunt ne, modus evertitur disputando vel ex, te sit facilisi quaerendum.",
  },
  {
    title: "Liberia",
    image: "/wp-content/uploads/2022/02/panel-sample-img.png",
    introText:
      "Lorem ipsum dolor sit amet, in has natum novum civibus, te vis tota civibus. Cu oblique aliquando assueverit nec. Quo aliquip atomorum efficiantur ea, ne has porro mollis eripuit. Mea ne magna offendit perfecto.",
    lat: 6.428055,
    lng: -9.429499,
    taxonomyATerms: ["Gloriatur"],
    taxonomyBTerms: ["Mentitum", "Accumsan ei eum"],
    taxonomyCTerms: ["Efficiantur eane", "Quo aliquip"],
    taxonomyDTerms: [
      "Quod",
      "Partem iuvaret",
      "Accusata dissentiunt",
      "An quis",
      "Vituperatoribus",
    ],
    categories: [
      "Putant dolorem",
      "Ut debet",
      "Reprimique",
      "Theophrastus contentiones",
      "Disputationi et",
    ],
    terms: ["Mutat veniam"],
    text: "Eos praesent incorrupte dissentiunt ne, modus evertitur disputando vel ex, te sit facilisi quaerendum.",
  },
  {
    title: "Norway",
    image: "/wp-content/uploads/2022/02/panel-sample-img.png",
    introText:
      "Lorem ipsum dolor sit amet, in has natum novum civibus, te vis tota civibus. Cu oblique aliquando assueverit nec. Quo aliquip atomorum efficiantur ea, ne has porro mollis eripuit. Mea ne magna offendit perfecto.",
    lat: 61.40476540843493,
    lng: 10.291172499213369,
    taxonomyATerms: ["Has natum novum"],
    taxonomyBTerms: ["Mentitum", "Accumsan ei eum"],
    taxonomyCTerms: ["Cu oblique aliquando"],
    taxonomyDTerms: ["Quod", "Partem iuvaret", "Accusata dissentiunt"],
    categories: [
      "Putant dolorem",
      "Theophrastus contentiones",
      "Denique contentiones",
      "Disputationi et",
    ],
    terms: ["Mutat veniam"],
    text: "Eos praesent incorrupte dissentiunt ne, modus evertitur disputando vel ex, te sit facilisi quaerendum.",
  },
  {
    title: "Mali",
    image: "/wp-content/uploads/2022/02/panel-sample-img.png",
    introText:
      "Lorem ipsum dolor sit amet, in has natum novum civibus, te vis tota civibus. Cu oblique aliquando assueverit nec. Quo aliquip atomorum efficiantur ea, ne has porro mollis eripuit. Mea ne magna offendit perfecto.",
    lat: 17.383081,
    lng: -3.833056,
    taxonomyATerms: ["Dolor sit amet"],
    taxonomyBTerms: ["Mentitum"],
    taxonomyCTerms: ["Efficiantur eane"],
    taxonomyDTerms: ["Quod", "Accusata dissentiunt", "An quis"],
    categories: ["Reprimique"],
    terms: [],
    text: "Eos praesent incorrupte dissentiunt ne, modus evertitur disputando vel ex, te sit facilisi quaerendum.",
  },
  {
    title: "Mexico",
    image: "/wp-content/uploads/2022/02/panel-sample-img.png",
    introText:
      "Lorem ipsum dolor sit amet, in has natum novum civibus, te vis tota civibus. Cu oblique aliquando assueverit nec. Quo aliquip atomorum efficiantur ea, ne has porro mollis eripuit. Mea ne magna offendit perfecto.",
    lat: 23.634501,
    lng: -102.552784,
    taxonomyATerms: ["Vix mediocrem"],
    taxonomyBTerms: [],
    taxonomyCTerms: ["Efficiantur eane", "Quo aliquip"],
    taxonomyDTerms: [
      "Quod",
      "Partem iuvaret",
      "Accusata dissentiunt",
      "An quis",
    ],
    categories: [
      "Putant dolorem",
      "Reprimique",
      "Theophrastus contentiones",
      "Disputationi et",
    ],
    terms: ["Disputationi"],
    text: "Eos praesent incorrupte dissentiunt ne, modus evertitur disputando vel ex, te sit facilisi quaerendum.",
  },
  {
    title: "Nepal ",
    image: "/wp-content/uploads/2022/02/panel-sample-img.png",
    introText:
      "Lorem ipsum dolor sit amet, in has natum novum civibus, te vis tota civibus. Cu oblique aliquando assueverit nec. Quo aliquip atomorum efficiantur ea, ne has porro mollis eripuit. Mea ne magna offendit perfecto.",
    lat: 28.394857,
    lng: 84.124008,
    taxonomyATerms: ["Vix mediocrem"],
    taxonomyBTerms: ["Mentitum", "Accumsan ei eum"],
    taxonomyCTerms: ["Cu oblique aliquando"],
    taxonomyDTerms: ["Accusata dissentiunt", "An quis"],
    categories: [
      "Putant dolorem",
      "Theophrastus contentiones",
      "Disputationi et",
    ],
    terms: ["Brute mucius an"],
    text: "Eos praesent incorrupte dissentiunt ne, modus evertitur disputando vel ex, te sit facilisi quaerendum.",
  },
  {
    title: "Northern Ireland",
    image: "/wp-content/uploads/2022/02/panel-sample-img.png",
    introText:
      "Lorem ipsum dolor sit amet, in has natum novum civibus, te vis tota civibus. Cu oblique aliquando assueverit nec. Quo aliquip atomorum efficiantur ea, ne has porro mollis eripuit. Mea ne magna offendit perfecto.",
    lat: 54.787715,
    lng: -6.492315,
    taxonomyATerms: ["Dolor sit amet"],
    taxonomyBTerms: [],
    taxonomyCTerms: ["Efficiantur eane", "Quo aliquip"],
    taxonomyDTerms: ["Quod", "Accusata dissentiunt", "An quis"],
    categories: [
      "Putant dolorem",
      "Theophrastus contentiones",
      "Reprimique",
      "Denique contentiones",
      "Disputationi et",
    ],
    terms: ["Disputationi"],
    text: "Eos praesent incorrupte dissentiunt ne, modus evertitur disputando vel ex, te sit facilisi quaerendum.",
  },
  {
    title: "Phillippines",
    image: "/wp-content/uploads/2022/02/panel-sample-img.png",
    introText:
      "Lorem ipsum dolor sit amet, in has natum novum civibus, te vis tota civibus. Cu oblique aliquando assueverit nec. Quo aliquip atomorum efficiantur ea, ne has porro mollis eripuit. Mea ne magna offendit perfecto.",
    lat: 14.54346,
    lng: 121.130374,
    taxonomyATerms: ["Has natum novum"],
    taxonomyBTerms: [],
    taxonomyCTerms: ["Efficiantur eane"],
    taxonomyDTerms: [
      "Quod",
      "Augue",
      "Partem iuvaret",
      "Accusata dissentiunt",
      "An quis",
      "Vituperatoribus",
    ],
    categories: [
      "Putant dolorem",
      "Ut debet",
      "Reprimique",
      "Theophrastus contentiones",
      "Eirmod doctus an nam",
      "Disputationi et",
    ],
    terms: ["Disputationi"],
    text: "Eos praesent incorrupte dissentiunt ne, modus evertitur disputando vel ex, te sit facilisi quaerendum.",
  },
  {
    title: "PNG Bougainville",
    image: "/wp-content/uploads/2022/02/panel-sample-img.png",
    introText:
      "Lorem ipsum dolor sit amet, in has natum novum civibus, te vis tota civibus. Cu oblique aliquando assueverit nec. Quo aliquip atomorum efficiantur ea, ne has porro mollis eripuit. Mea ne magna offendit perfecto.",
    lat: -6.053602,
    lng: 155.190731,
    taxonomyATerms: ["Has natum novum"],
    taxonomyBTerms: ["Mentitum"],
    taxonomyCTerms: ["Efficiantur eane", "Cu oblique aliquando"],
    taxonomyDTerms: [
      "Quod",
      "Partem iuvaret",
      "Accusata dissentiunt",
      "An quis",
    ],
    categories: ["Putant dolorem", "Theophrastus contentiones"],
    terms: ["Mutat veniam"],
    text: "Eos praesent incorrupte dissentiunt ne, modus evertitur disputando vel ex, te sit facilisi quaerendum.",
  },
  {
    title: "Solomon Islands",
    image: "/wp-content/uploads/2022/02/panel-sample-img.png",
    introText:
      "Lorem ipsum dolor sit amet, in has natum novum civibus, te vis tota civibus. Cu oblique aliquando assueverit nec. Quo aliquip atomorum efficiantur ea, ne has porro mollis eripuit. Mea ne magna offendit perfecto.",
    lat: -9.64571,
    lng: 160.156194,
    taxonomyATerms: ["Dolor sit amet"],
    taxonomyBTerms: ["Mentitum"],
    taxonomyCTerms: ["Efficiantur eane", "Cu oblique aliquando"],
    taxonomyDTerms: [
      "Quod",
      "Partem iuvaret",
      "Accusata dissentiunt",
      "An quis",
    ],
    categories: ["Reprimique", "Theophrastus contentiones"],
    terms: ["Disputationi"],
    text: "Eos praesent incorrupte dissentiunt ne, modus evertitur disputando vel ex, te sit facilisi quaerendum.",
  },
  {
    title: "Thailand",
    image: "/wp-content/uploads/2022/02/panel-sample-img.png",
    introText:
      "Lorem ipsum dolor sit amet, in has natum novum civibus, te vis tota civibus. Cu oblique aliquando assueverit nec. Quo aliquip atomorum efficiantur ea, ne has porro mollis eripuit. Mea ne magna offendit perfecto.",
    lat: 14.131880336485398,
    lng: 100.5475085529461,
    taxonomyATerms: ["Gloriatur"],
    taxonomyBTerms: ["Mentitum"],
    taxonomyCTerms: ["Efficiantur eane", "Quo aliquip"],
    taxonomyDTerms: ["Partem iuvaret", "Accusata dissentiunt", "An quis"],
    categories: ["Ut debet", "Reprimique", "Theophrastus contentiones"],
    terms: ["Pri eu mentitum phaedrum"],
    text: "Eos praesent incorrupte dissentiunt ne, modus evertitur disputando vel ex, te sit facilisi quaerendum.",
  },
  {
    title: "Somalia",
    image: "/wp-content/uploads/2022/02/panel-sample-img.png",
    introText:
      "Lorem ipsum dolor sit amet, in has natum novum civibus, te vis tota civibus. Cu oblique aliquando assueverit nec. Quo aliquip atomorum efficiantur ea, ne has porro mollis eripuit. Mea ne magna offendit perfecto.",
    lat: 4.819413,
    lng: 46.98051,
    taxonomyATerms: ["Minimum imperdiet"],
    taxonomyBTerms: ["Mentitum", "Accumsan ei eum"],
    taxonomyCTerms: ["Efficiantur eane", "Quo aliquip"],
    taxonomyDTerms: [
      "Partem iuvaret",
      "Accusata dissentiunt",
      "An quis",
      "Vituperatoribus",
    ],
    categories: ["Putant dolorem", "Theophrastus contentiones"],
    terms: ["Disputationi"],
    text: "Eos praesent incorrupte dissentiunt ne, modus evertitur disputando vel ex, te sit facilisi quaerendum.",
  },
  {
    title: "Canada",
    image: "/wp-content/uploads/2022/02/panel-sample-img.png",
    introText:
      "Lorem ipsum dolor sit amet, in has natum novum civibus, te vis tota civibus. Cu oblique aliquando assueverit nec. Quo aliquip atomorum efficiantur ea, ne has porro mollis eripuit. Mea ne magna offendit perfecto.",
    lat: 45.33317011456205,
    lng: -77.17118783401696,
    taxonomyATerms: ["Vix mediocrem"],
    taxonomyBTerms: ["Mentitum", "Accumsan ei eum"],
    taxonomyCTerms: ["Efficiantur eane", "Quo aliquip"],
    taxonomyDTerms: [
      "Quod",
      "Partem iuvaret",
      "Accusata dissentiunt",
      "An quis",
    ],
    categories: ["Putant dolorem", "Ut debet", "Reprimique", "Disputationi et"],
    terms: ["Brute mucius an"],
    text: "Eos praesent incorrupte dissentiunt ne, modus evertitur disputando vel ex, te sit facilisi quaerendum.",
  },
  {
    title: "USA",
    image: "/wp-content/uploads/2022/02/panel-sample-img.png",
    introText:
      "Lorem ipsum dolor sit amet, in has natum novum civibus, te vis tota civibus. Cu oblique aliquando assueverit nec. Quo aliquip atomorum efficiantur ea, ne has porro mollis eripuit. Mea ne magna offendit perfecto.",
    lat: 41.78286635353456,
    lng: -88.3906510049644,
    taxonomyATerms: ["Has natum novum"],
    taxonomyBTerms: [],
    taxonomyCTerms: ["Efficiantur eane", "Quo aliquip"],
    taxonomyDTerms: ["Partem iuvaret", "Accusata dissentiunt", "An quis"],
    categories: ["Putant dolorem", "Ut debet", "Reprimique", "Disputationi et"],
    terms: ["Mutat veniam"],
    text: "Eos praesent incorrupte dissentiunt ne, modus evertitur disputando vel ex, te sit facilisi quaerendum.",
  },
  {
    title: "South Africa",
    image: "/wp-content/uploads/2022/02/panel-sample-img.png",
    introText:
      "Lorem ipsum dolor sit amet, in has natum novum civibus, te vis tota civibus. Cu oblique aliquando assueverit nec. Quo aliquip atomorum efficiantur ea, ne has porro mollis eripuit. Mea ne magna offendit perfecto.",
    lat: -30.559482,
    lng: 22.937506,
    taxonomyATerms: ["Vix mediocrem", "Gloriatur", "Signiferumque"],
    taxonomyBTerms: ["Mentitum", "Accumsan ei eum"],
    taxonomyCTerms: ["Efficiantur eane", "Cu oblique aliquando", "Quo aliquip"],
    taxonomyDTerms: ["Quod", "Accusata dissentiunt", "An quis"],
    categories: [
      "Putant dolorem",
      "Ut debet",
      "Reprimique",
      "Theophrastus contentiones",
      "Denique contentiones",
      "Disputationi et",
    ],
    terms: ["Mutat veniam"],
    text: "Eos praesent incorrupte dissentiunt ne, modus evertitur disputando vel ex, te sit facilisi quaerendum.",
  },
  {
    title: "Sri Lanka",
    image: "/wp-content/uploads/2022/02/panel-sample-img.png",
    introText:
      "Lorem ipsum dolor sit amet, in has natum novum civibus, te vis tota civibus. Cu oblique aliquando assueverit nec. Quo aliquip atomorum efficiantur ea, ne has porro mollis eripuit. Mea ne magna offendit perfecto.",
    lat: 7.873054,
    lng: 80.771797,
    taxonomyATerms: ["Gloriatur"],
    taxonomyBTerms: ["Mentitum"],
    taxonomyCTerms: ["Efficiantur eane"],
    taxonomyDTerms: [
      "Quod",
      "Partem iuvaret",
      "Accusata dissentiunt",
      "Vituperatoribus",
    ],
    categories: ["Mutat veniam", "Disputationi et"],
    terms: ["Pri eu mentitum phaedrum"],
    text: "Eos praesent incorrupte dissentiunt ne, modus evertitur disputando vel ex, te sit facilisi quaerendum.",
  },
  {
    title: "Sudan Darfur",
    image: "/wp-content/uploads/2022/02/panel-sample-img.png",
    introText:
      "Lorem ipsum dolor sit amet, in has natum novum civibus, te vis tota civibus. Cu oblique aliquando assueverit nec. Quo aliquip atomorum efficiantur ea, ne has porro mollis eripuit. Mea ne magna offendit perfecto.",
    lat: 14.378275,
    lng: 24.904221,
    taxonomyATerms: ["Dolor sit amet"],
    taxonomyBTerms: ["Mentitum"],
    taxonomyCTerms: ["Efficiantur eane"],
    taxonomyDTerms: [
      "Quod",
      "Augue",
      "Accusata dissentiunt",
      "An quis",
      "Vituperatoribus",
    ],
    categories: ["Putant dolorem", "Reprimique", "Theophrastus contentiones"],
    terms: ["Pri eu mentitum phaedrum"],
    text: "Eos praesent incorrupte dissentiunt ne, modus evertitur disputando vel ex, te sit facilisi quaerendum.",
  },
  {
    title: "Turkey-Armenia",
    image: "/wp-content/uploads/2022/02/panel-sample-img.png",
    introText:
      "Lorem ipsum dolor sit amet, in has natum novum civibus, te vis tota civibus. Cu oblique aliquando assueverit nec. Quo aliquip atomorum efficiantur ea, ne has porro mollis eripuit. Mea ne magna offendit perfecto.",
    lat: 40.205242,
    lng: 43.690626,
    taxonomyATerms: ["Dolor sit amet"],
    taxonomyBTerms: ["Mentitum", "Accumsan ei eum"],
    taxonomyCTerms: ["Efficiantur eane"],
    taxonomyDTerms: ["Quod", "Augue", "Accusata dissentiunt", "An quis"],
    categories: ["Reprimique", "Eirmod doctus an nam", "Disputationi et"],
    terms: ["Brute mucius an"],
    text: "Eos praesent incorrupte dissentiunt ne, modus evertitur disputando vel ex, te sit facilisi quaerendum.",
  },
  {
    title: "Alaska",
    image: "/wp-content/uploads/2022/02/panel-sample-img.png",
    introText:
      "Lorem ipsum dolor sit amet, in has natum novum civibus, te vis tota civibus. Cu oblique aliquando assueverit nec. Quo aliquip atomorum efficiantur ea, ne has porro mollis eripuit. Mea ne magna offendit perfecto.",
    lat: 64.89810137541627,
    lng: -148.31052928991414,
    taxonomyATerms: ["Gloriatur"],
    taxonomyBTerms: ["Mentitum"],
    taxonomyCTerms: ["Efficiantur eane", "Quo aliquip"],
    taxonomyDTerms: [
      "Quod",
      "Partem iuvaret",
      "Accusata dissentiunt",
      "An quis",
      "Vituperatoribus",
    ],
    categories: ["Mutat veniam", "Denique contentiones", "Disputationi et"],
    terms: ["Disputationi"],
    text: "Eos praesent incorrupte dissentiunt ne, modus evertitur disputando vel ex, te sit facilisi quaerendum.",
  },
  {
    title: "Yemen",
    image: "/wp-content/uploads/2022/02/panel-sample-img.png",
    introText:
      "Lorem ipsum dolor sit amet, in has natum novum civibus, te vis tota civibus. Cu oblique aliquando assueverit nec. Quo aliquip atomorum efficiantur ea, ne has porro mollis eripuit. Mea ne magna offendit perfecto.",
    lat: 15.552727,
    lng: 48.516388,
    taxonomyATerms: ["Vix mediocrem"],
    taxonomyBTerms: ["Mentitum"],
    taxonomyCTerms: ["Efficiantur eane", "Cu oblique aliquando", "Quo aliquip"],
    taxonomyDTerms: [
      "Quod",
      "Partem iuvaret",
      "Accusata dissentiunt",
      "An quis",
      "Vituperatoribus",
    ],
    categories: [
      "Putant dolorem",
      "Reprimique",
      "Theophrastus contentiones",
      "Disputationi et",
    ],
    terms: ["Pri eu mentitum phaedrum"],
    text: "Eos praesent incorrupte dissentiunt ne, modus evertitur disputando vel ex, te sit facilisi quaerendum.",
  },
];

export type LocationTerm = {
  id: number,
  name: string,
  taxonomy: string
};

export type LocationFromRestApi = {
  id: string,
  title: {
    rendered: string
  },
  content: {
    rendered: string
  },
  _latitude: string,
  _longitude: string,
  _embedded: {
    ['wp:term']: LocationTerm[][]
  }
}
