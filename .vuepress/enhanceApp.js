export default ({router}) => {
    router.addRoutes([
        {
            path: '/about/', beforeEnter(to, from, next) {
                window.location.href = 'https://vittorio.minacori.me';
            },
        }
    ])
}