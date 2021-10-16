export interface Myinfo {
	userId: number;
	userName: string;
	userExportType: number;
	userTotalAnime: number;
	userTotalWatching: number;
	userTotalCompleted: number;
	userTotalOnhold: number;
	userTotalDropped: number;
	userTotalPlantowatch: number;
}

export interface Anime {
	seriesAnimedbId: number;
	seriesTitle: string;
	seriesType: string;
	seriesEpisodes: number;
	myId: number;
	myWatchedEpisodes: number;
	myStartDate: string;
	myFinishDate: string;
	myRated: string;
	myScore: number;
	myStorage: string;
	myStorageValue: number;
	myStatus: string;
	myComments: string;
	myTimesWatched: number;
	myRewatchValue: string;
	myPriority: string;
	myTags: string;
	myRewatching: any;
	myRewatchingEp: number;
	myDiscuss: number;
	mySns: string;
	updateOnImport: number;
}

export interface Myanimelist {
	myinfo: Myinfo;
	anime: Anime[];
}

export interface List {
	myanimelist: Myanimelist;
}
