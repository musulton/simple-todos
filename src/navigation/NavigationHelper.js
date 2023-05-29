import * as RootNavigation from './RootNavigation';

export function goToScreen(routePath, isReplace) {
    RootNavigation.navigate(routePath, null, isReplace);
}
