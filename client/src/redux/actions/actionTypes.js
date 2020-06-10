export const types = {
    // Favorites
    FAVORITES_START_FETCHING: 'FAVORITES/START_FETCHING',
    FAVORITES_STOP_FETCHING: 'FAVORITES/STOP_FETCHING',
    FAVORITES_FILL: 'FAVORITES/FAVORITES_FILL',
    FAVORITES_ALBUMS_FILL: 'FAVORITES/ALBUMS_FILL',
    FAVORITES_MEMBERS_FILL: 'FAVORITES/MEMBERS_FILL',
    FAVORITES_PHOTOS_FILL: 'FAVORITES/PHOTOS_FILL',

    // Checker
    CHECKER_SET_CHECK_THING: 'CHECKER/SET_CHECK_THING',
    CHECKER_SET_CHECK_STEP: 'CHECKER/SET_CHECK_STEP',
    CHECKER_SET_CHECK_STATUS: 'CHECKER/SET_CHECK_STATUS',

    // Check groups
    GROUP_MEMBERS_GET: 'ADMIN/GROUP_MEMBERS_GET',

    // Check members
    CHECK_MEMBERS_ALL: 'CHECK_MEMBERS/ALL',
    CHECK_MEMBERS_WITH_INFO: 'CHECK_MEMBERS/WITH_INFO',
    CHECK_MEMBERS_CLOSED: 'CHECK_MEMBERS/CLOSED',
    CHECK_MEMBERS_BANNED: 'CHECK_MEMBERS/BANNED',
    CHECK_MEMBERS_DELETED: 'CHECK_MEMBERS/DELETED',
    CHECK_MEMBERS_SELLER: 'CHECK_MEMBERS/SELLER',

    // Lists settings
    LIST_SETTINGS_SET_ITEMS_LIMIT: 'LIST_SETTINGS/SET_ITEMS_LIMIT',
    LIST_SETTINGS_SET_NUMBER_OF_SKIP: 'LIST_SETTINGS/SET_NUMBER_OF_SKIP',
    LIST_SETTINGS_SET_SORT_TYPE_OF_ITEMS: 'LIST_SETTINGS_/SET_SORT_TYPE_OF_ITEMS',
    LIST_SETTINGS_FETCHED_PART_ITEMS: 'LIST_SETTINGS/FETCHED_PART_ITEMS',
    LIST_SETTINGS_SET_TOTAL_ITEMS: 'LIST_SETTINGS/SET_TOTAL_ITEMS',
    LIST_SETTINGS_SET_TOTAL_LOADED_ITEMS: 'LIST_SETTINGS/SET_TOTAL_LOADED_ITEMS',
    LIST_SETTINGS_SET_LOAD_MORE: 'LIST_SETTINGS/SET_LOAD_MORE',
    LIST_SETTINGS_SET_MEMBER_STATUS: 'LIST_SETTINGS/SET_MEMBER_STATUS',
    LIST_SETTINGS_SET_MEMBER_COUNTRY: 'LIST_SETTINGS/SET_MEMBER_COUNTRY',

    // General settings
    LOADING_START: 'GENERAL_SETTINGS/LOADING_START',
    LOADING_STOP: 'GENERAL_SETTINGS/LOADING_STOP',
    FETCHING_START: 'GENERAL_SETTINGS/FETCHING_START',
    FETCHING_STOP: 'GENERAL_SETTINGS/FETCHING_STOP',
};
