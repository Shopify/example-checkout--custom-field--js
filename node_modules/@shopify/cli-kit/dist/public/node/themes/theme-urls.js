export function themePreviewUrl(theme, session) {
    const store = session.storeFqdn;
    if (theme.role === 'live') {
        return `https://${store}`;
    }
    return `https://${store}?preview_theme_id=${theme.id}`;
}
export function themeEditorUrl(theme, session) {
    const store = session.storeFqdn;
    return `https://${store}/admin/themes/${theme.id}/editor`;
}
export function storeAdminUrl(session) {
    const store = session.storeFqdn;
    return `https://${store}/admin`;
}
//# sourceMappingURL=theme-urls.js.map