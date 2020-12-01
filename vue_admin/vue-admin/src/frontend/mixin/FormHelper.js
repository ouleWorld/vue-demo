export default {
    computed: {
        formType() {
            const path = this.$route.path;
            return path.indexOf('/create') > -1 ? 'create' : 'modify';
        },
        query() {
            return this.$route.query
        },
    }
}