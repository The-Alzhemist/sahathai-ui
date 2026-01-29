import {StoryblokStory} from 'storyblok-generate-ts'

export interface Storyblok {
  _uid: string;
  component: "เอกสารแต่ละไตรมาส";
  [k: string]: any;
}

export interface AssetStoryblok {
  _uid?: string;
  id: number | null;
  alt: string | null;
  name: string;
  focus: string | null;
  source: string | null;
  title: string | null;
  filename: string;
  copyright: string | null;
  fieldtype?: string;
  meta_data?: null | {
    [k: string]: any;
  };
  is_external_url?: boolean;
  [k: string]: any;
}

export interface BannerStoryblok {
  bannerImage: AssetStoryblok;
  isShowBanner: boolean;
  bannerAlt?: string;
  _uid: string;
  component: "Banner";
  [k: string]: any;
}

export interface BoardAndCommitteeStoryblok {
  isBoardOfDirector: boolean;
  isCommittee: boolean;
  peopleImage?: AssetStoryblok;
  setOfData?: (
    | เอกสารแต่ละไตรมาสStoryblok
    | BannerStoryblok
    | BoardAndCommitteeStoryblok
    | DownloadLinkStoryblok
    | EServiceStoryblok
    | EventNewsDetailCardStoryblok
    | FeatureStoryblok
    | GridStoryblok
    | GroupStoryblok
    | ItemStoryblok
    | PageStoryblok
    | PerformanceQuarterFormsStoryblok
    | PerformanceReportPageStoryblok
    | RowStoryblok
    | RowBlockStoryblok
    | SetOfDataStoryblok
    | ShowOneImageStoryblok
    | ShowThreeImageStoryblok
    | ShowTwoImageStoryblok
    | TabStoryblok
    | TeaserStoryblok
    | ToggleBlockStoryblok
    | ToggleContainerPageStoryblok
    | TogglePageStoryblok
  )[];
  name?: string;
  _uid: string;
  component: "BoardAndCommittee";
  [k: string]: any;
}

export interface DownloadLinkStoryblok {
  Title: string;
  linkURL: string;
  _uid: string;
  component: "downloadLink";
  [k: string]: any;
}

export interface EServiceStoryblok {
  text?: string;
  text_en?: string;
  externalLink?: string;
  image?: AssetStoryblok;
  _uid: string;
  component: "e-service";
  [k: string]: any;
}

export interface RichtextStoryblok {
  type: string;
  content?: RichtextStoryblok[];
  marks?: RichtextStoryblok[];
  attrs?: any;
  text?: string;
  [k: string]: any;
}

export interface EventNewsDetailCardStoryblok {
  newsImageCover: AssetStoryblok;
  newsTitle: string;
  newsDate: string;
  newsDescription: RichtextStoryblok;
  metaTitle: string;
  metaDescription: string;
  metaImage: AssetStoryblok;
  _uid: string;
  component: "eventNewsDetailCard";
  [k: string]: any;
}

export interface FeatureStoryblok {
  name?: string;
  _uid: string;
  component: "feature";
  [k: string]: any;
}

export interface GridStoryblok {
  columns?: (
    | เอกสารแต่ละไตรมาสStoryblok
    | BannerStoryblok
    | BoardAndCommitteeStoryblok
    | DownloadLinkStoryblok
    | EServiceStoryblok
    | EventNewsDetailCardStoryblok
    | FeatureStoryblok
    | GridStoryblok
    | GroupStoryblok
    | ItemStoryblok
    | PageStoryblok
    | PerformanceQuarterFormsStoryblok
    | PerformanceReportPageStoryblok
    | RowStoryblok
    | RowBlockStoryblok
    | SetOfDataStoryblok
    | ShowOneImageStoryblok
    | ShowThreeImageStoryblok
    | ShowTwoImageStoryblok
    | TabStoryblok
    | TeaserStoryblok
    | ToggleBlockStoryblok
    | ToggleContainerPageStoryblok
    | TogglePageStoryblok
  )[];
  _uid: string;
  component: "grid";
  [k: string]: any;
}

export interface GroupStoryblok {
  heading?: string;
  tab?: (
    | เอกสารแต่ละไตรมาสStoryblok
    | BannerStoryblok
    | BoardAndCommitteeStoryblok
    | DownloadLinkStoryblok
    | EServiceStoryblok
    | EventNewsDetailCardStoryblok
    | FeatureStoryblok
    | GridStoryblok
    | GroupStoryblok
    | ItemStoryblok
    | PageStoryblok
    | PerformanceQuarterFormsStoryblok
    | PerformanceReportPageStoryblok
    | RowStoryblok
    | RowBlockStoryblok
    | SetOfDataStoryblok
    | ShowOneImageStoryblok
    | ShowThreeImageStoryblok
    | ShowTwoImageStoryblok
    | TabStoryblok
    | TeaserStoryblok
    | ToggleBlockStoryblok
    | ToggleContainerPageStoryblok
    | TogglePageStoryblok
  )[];
  _uid: string;
  component: "group";
  [k: string]: any;
}

export interface ItemStoryblok {
  detail?: string;
  _uid: string;
  component: "item";
  [k: string]: any;
}

export interface PageStoryblok {
  body?: (
    | เอกสารแต่ละไตรมาสStoryblok
    | BannerStoryblok
    | BoardAndCommitteeStoryblok
    | DownloadLinkStoryblok
    | EServiceStoryblok
    | EventNewsDetailCardStoryblok
    | FeatureStoryblok
    | GridStoryblok
    | GroupStoryblok
    | ItemStoryblok
    | PageStoryblok
    | PerformanceQuarterFormsStoryblok
    | PerformanceReportPageStoryblok
    | RowStoryblok
    | RowBlockStoryblok
    | SetOfDataStoryblok
    | ShowOneImageStoryblok
    | ShowThreeImageStoryblok
    | ShowTwoImageStoryblok
    | TabStoryblok
    | TeaserStoryblok
    | ToggleBlockStoryblok
    | ToggleContainerPageStoryblok
    | TogglePageStoryblok
  )[];
  _uid: string;
  component: "page";
  uuid?: string;
  [k: string]: any;
}

export interface PerformanceQuarterFormsStoryblok {
  heading?: string;
  quarter1Text?: string;
  quarter1File?: AssetStoryblok;
  quarter2Text?: string;
  quarter2File?: string;
  _uid: string;
  component: "performanceQuarterForms";
  [k: string]: any;
}

export interface PerformanceReportPageStoryblok {
  Title?: string;
  performanceBoxYearContainer?: (
    | เอกสารแต่ละไตรมาสStoryblok
    | BannerStoryblok
    | BoardAndCommitteeStoryblok
    | DownloadLinkStoryblok
    | EServiceStoryblok
    | EventNewsDetailCardStoryblok
    | FeatureStoryblok
    | GridStoryblok
    | GroupStoryblok
    | ItemStoryblok
    | PageStoryblok
    | PerformanceQuarterFormsStoryblok
    | PerformanceReportPageStoryblok
    | RowStoryblok
    | RowBlockStoryblok
    | SetOfDataStoryblok
    | ShowOneImageStoryblok
    | ShowThreeImageStoryblok
    | ShowTwoImageStoryblok
    | TabStoryblok
    | TeaserStoryblok
    | ToggleBlockStoryblok
    | ToggleContainerPageStoryblok
    | TogglePageStoryblok
  )[];
  _uid: string;
  component: "performance-report-page";
  [k: string]: any;
}

export interface RowStoryblok {
  heading?: string;
  youtubeUrl?: string;
  file?: AssetStoryblok;
  englishFile?: AssetStoryblok;
  chineseFile?: AssetStoryblok;
  externalLink?: string;
  _uid: string;
  component: "row";
  [k: string]: any;
}

export interface RowBlockStoryblok {
  title?: string;
  youtubeUrl?: string;
  file?: AssetStoryblok;
  _uid: string;
  component: "RowBlock";
  [k: string]: any;
}

export interface SetOfDataStoryblok {
  heading?: string;
  item?: (
    | เอกสารแต่ละไตรมาสStoryblok
    | BannerStoryblok
    | BoardAndCommitteeStoryblok
    | DownloadLinkStoryblok
    | EServiceStoryblok
    | EventNewsDetailCardStoryblok
    | FeatureStoryblok
    | GridStoryblok
    | GroupStoryblok
    | ItemStoryblok
    | PageStoryblok
    | PerformanceQuarterFormsStoryblok
    | PerformanceReportPageStoryblok
    | RowStoryblok
    | RowBlockStoryblok
    | SetOfDataStoryblok
    | ShowOneImageStoryblok
    | ShowThreeImageStoryblok
    | ShowTwoImageStoryblok
    | TabStoryblok
    | TeaserStoryblok
    | ToggleBlockStoryblok
    | ToggleContainerPageStoryblok
    | TogglePageStoryblok
  )[];
  _uid: string;
  component: "setOfData";
  [k: string]: any;
}

export interface ShowOneImageStoryblok {
  ImageA?: AssetStoryblok;
  _uid: string;
  component: "showOneImage";
  [k: string]: any;
}

export interface ShowThreeImageStoryblok {
  ImageA?: AssetStoryblok;
  ImageB?: AssetStoryblok;
  ImageC?: AssetStoryblok;
  _uid: string;
  component: "showThreeImage";
  [k: string]: any;
}

export interface ShowTwoImageStoryblok {
  ImageA?: AssetStoryblok;
  ImageB?: AssetStoryblok;
  _uid: string;
  component: "showTwoImage";
  [k: string]: any;
}

export interface TabStoryblok {
  heading?: string;
  row?: (
    | เอกสารแต่ละไตรมาสStoryblok
    | BannerStoryblok
    | BoardAndCommitteeStoryblok
    | DownloadLinkStoryblok
    | EServiceStoryblok
    | EventNewsDetailCardStoryblok
    | FeatureStoryblok
    | GridStoryblok
    | GroupStoryblok
    | ItemStoryblok
    | PageStoryblok
    | PerformanceQuarterFormsStoryblok
    | PerformanceReportPageStoryblok
    | RowStoryblok
    | RowBlockStoryblok
    | SetOfDataStoryblok
    | ShowOneImageStoryblok
    | ShowThreeImageStoryblok
    | ShowTwoImageStoryblok
    | TabStoryblok
    | TeaserStoryblok
    | ToggleBlockStoryblok
    | ToggleContainerPageStoryblok
    | TogglePageStoryblok
  )[];
  _uid: string;
  component: "tab";
  [k: string]: any;
}

export interface TeaserStoryblok {
  headline?: string;
  _uid: string;
  component: "teaser";
  [k: string]: any;
}

export interface ToggleBlockStoryblok {
  heading?: string;
  RowBlock?: (
    | เอกสารแต่ละไตรมาสStoryblok
    | BannerStoryblok
    | BoardAndCommitteeStoryblok
    | DownloadLinkStoryblok
    | EServiceStoryblok
    | EventNewsDetailCardStoryblok
    | FeatureStoryblok
    | GridStoryblok
    | GroupStoryblok
    | ItemStoryblok
    | PageStoryblok
    | PerformanceQuarterFormsStoryblok
    | PerformanceReportPageStoryblok
    | RowStoryblok
    | RowBlockStoryblok
    | SetOfDataStoryblok
    | ShowOneImageStoryblok
    | ShowThreeImageStoryblok
    | ShowTwoImageStoryblok
    | TabStoryblok
    | TeaserStoryblok
    | ToggleBlockStoryblok
    | ToggleContainerPageStoryblok
    | TogglePageStoryblok
  )[];
  _uid: string;
  component: "ToggleBlock";
  [k: string]: any;
}

export interface ToggleContainerPageStoryblok {
  ToggleBlock?: (
    | เอกสารแต่ละไตรมาสStoryblok
    | BannerStoryblok
    | BoardAndCommitteeStoryblok
    | DownloadLinkStoryblok
    | EServiceStoryblok
    | EventNewsDetailCardStoryblok
    | FeatureStoryblok
    | GridStoryblok
    | GroupStoryblok
    | ItemStoryblok
    | PageStoryblok
    | PerformanceQuarterFormsStoryblok
    | PerformanceReportPageStoryblok
    | RowStoryblok
    | RowBlockStoryblok
    | SetOfDataStoryblok
    | ShowOneImageStoryblok
    | ShowThreeImageStoryblok
    | ShowTwoImageStoryblok
    | TabStoryblok
    | TeaserStoryblok
    | ToggleBlockStoryblok
    | ToggleContainerPageStoryblok
    | TogglePageStoryblok
  )[];
  _uid: string;
  component: "ToggleContainerPage";
  [k: string]: any;
}

export interface TogglePageStoryblok {
  group?: (
    | เอกสารแต่ละไตรมาสStoryblok
    | BannerStoryblok
    | BoardAndCommitteeStoryblok
    | DownloadLinkStoryblok
    | EServiceStoryblok
    | EventNewsDetailCardStoryblok
    | FeatureStoryblok
    | GridStoryblok
    | GroupStoryblok
    | ItemStoryblok
    | PageStoryblok
    | PerformanceQuarterFormsStoryblok
    | PerformanceReportPageStoryblok
    | RowStoryblok
    | RowBlockStoryblok
    | SetOfDataStoryblok
    | ShowOneImageStoryblok
    | ShowThreeImageStoryblok
    | ShowTwoImageStoryblok
    | TabStoryblok
    | TeaserStoryblok
    | ToggleBlockStoryblok
    | ToggleContainerPageStoryblok
    | TogglePageStoryblok
  )[];
  _uid: string;
  component: "togglePage";
  [k: string]: any;
}
