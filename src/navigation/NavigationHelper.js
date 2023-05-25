import * as RootNavigation from './RootNavigation';

export function goToScreenWithParams(routePath, params = {}, isReplace) {
    RootNavigation.navigate(routePath, params, isReplace);
}

export function goToScreen(routePath, isReplace) {
    RootNavigation.navigate(routePath, null, isReplace);
}
