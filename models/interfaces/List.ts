export interface Myinfo {
	user_id: number;
	user_name: string;
	user_export_type: number;
	user_total_anime: number;
	user_total_watching: number;
	user_total_completed: number;
	user_total_onhold: number;
	user_total_dropped: number;
	user_total_plantowatch: number;
}

export interface Anime {
	series_animedb_id: number;
	series_title: string;
	series_type: string;
	series_episodes: number;
	my_id: number;
	my_watched_episodes: number;
	my_start_date: string;
	my_finish_date: string;
	my_rated: string;
	my_score: number;
	my_storage: string;
	my_storage_value: number;
	my_status: string;
	my_comments: string;
	my_times_watched: number;
	my_rewatch_value: string;
	my_priority: string;
	my_tags: string;
	my_rewatching: any;
	my_rewatching_ep: number;
	my_discuss: number;
	my_sns: string;
	update_on_import: number;
}

export interface Myanimelist {
	myinfo: Myinfo;
	anime: Anime[];
}

export interface List {
	myanimelist: Myanimelist;
}
