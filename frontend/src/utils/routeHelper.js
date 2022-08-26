
export default class RouteHelper {
    static redirect(route) {
        window.location.href = route;
    }

    static redirectToRoleDashboard(role) {
        if (role === 'participant') {
            return this.redirect('/team')
        }

        if (role === 'spoc') {
            return this.redirect('/spoc')
        }
    }
}
